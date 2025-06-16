/* eslint-disable simple-import-sort/sort */
/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppEvent, event, twilio } from '../../../../../api';
import { images } from '../../../../../assets';
import {
  CallModal,
  ChatModal,
  SafeAreaContainer,
  PanicButton,
} from '../../../../../components';
import { ClearLocationData, LogErrorToDb } from '../../../../../containers/app/actions';
import {
  makeSelectAppLocation,
  makeSelectTwilioAccessToken,
} from '../../../../../containers/app/selectors';
import { Id, IncidentEscort, Organization } from 'incident-code-core';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Alert, AppState, AppStateStatus, StatusBar } from 'react-native';
import { Location } from 'react-native-background-geolocation';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import KeepAwake from 'react-native-keep-awake';
import { ScreenProps } from 'react-native-screens';
import {
  TwilioVideo,
  TwilioVideoLocalView,
} from 'react-native-twilio-video-webrtc';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useBackButton, useSelector } from '../../../../../utils/hooks';
import { stopBackgroundGeolocation } from '../../../../../utils/location/backgroundGeolocation';
import { addBadge, removeBadge } from '../../../../../utils/notification';
import { isTokenExpired, refreshTwilioAccessToken } from '../../../../../utils/token';
import { requestCameraPermissions } from '../../../../../utils/permission';

enum PermissionStatus {
  Checking,
  Granted,
  Blocked,
}

import * as api from '../../../../../api';
import {
  addMessage,
  appStateChangeAction,
  clearDataAndGoBack,
  enterPanicMode,
  exitPanicMode,
  hideCallModal,
  hideChatModal,
  hideExitPanicModal,
  hideSafeModal,
  imSafeRequest,
  sendMessageRequest,
  setEscortFromPassive,
  showCallModal,
  showChatModal,
  showExitPanicModal,
  showPanicInfo,
  showSafeModal,
  startChat,
  toggleRecordType,
} from './actions';
import { ESCORT_STATE_KEY, PANIC_MODE_KEY } from './constants';
import ExitPanicModal from './ExitPanicModal';
import messages from './messages';
import RecordAudio from './RecordAudio';
import SafeModal from './SafeModal';
import {
  makeSelectIsPanicMode,
  makeSelectMessages,
  makeSelectRecordType,
  makeSelectRequestingImSafe,
  makeSelectShouldShowCallModal,
  makeSelectShouldShowChatModal,
  makeSelectShouldShowExitPanicModal,
  makeSelectShouldShowPanicInfo,
  makeSelectShouldShowSafeModal,
  makeSelectAppState,
} from './selectors';
import {
  AudioStream,
  BottomControls,
  CameraFlipButton,
  ChatButton,
  ChatContainer,
  Container,
  Logo,
  MiddleControls,
  OrganizationName,
  PanicInfoContainer,
  PanicOverlay,
  PhoneButton,
  RecordContainer,
  RecordDot,
  SafeButton,
  SafeButtonText,
  SharingText,
  StyledBadge,
  ToggleContainer,
  ToggleImage,
  ToggleImageContainer,
  ToggleText,
} from './styles';
import TimerExpiredBanner from './TimerExpired';
import { EscortState, PanicMode, RecordType } from './types';

enum connectionTypes {
  disconnected = 'disconnected',
  connecting = 'connnecting',
  connnected = 'connected',
}

interface Params {
  incidentEscort: IncidentEscort;
  organization: Organization;
  fromPassive?: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const EscortScreen: FC<Props> = ({ navigation: { getParam } }) => {

  const [permissionStatus, setPermissionStatus] = useState(
    PermissionStatus.Checking,
  );

  const incidentEscort = getParam('incidentEscort');
  const organization = getParam('organization');
  const fromPassive = getParam('fromPassive');

  const [badges, setBadges] = useState<Id[]>([]);
  const [showTimerExpired, setShowTimerExpired] = useState(false);
  const [connectionState, setConnectionState] = useState<connectionTypes>(
    connectionTypes.disconnected,
  );
  const locationRef = useRef<Location>();

  const { formatMessage } = useIntl();

  const showCallModalAction = useAction(showCallModal);
  const hideCallModalAction = useAction(hideCallModal);
  const showSafeModalAction = useAction(showSafeModal);
  const hideSafeModalAction = useAction(hideSafeModal);
  const toggleRecordTypeAction = useAction(toggleRecordType);
  const startChatAction = useAction(startChat);
  const showChatModalAction = useAction(showChatModal);
  const hideChatModalAction = useAction(hideChatModal);
  const sendMessageAction = useAction(sendMessageRequest);
  const addMessageAction = useAction(addMessage);
  const imSafeAction = useAction(imSafeRequest);
  const showPanicInfoAction = useAction(showPanicInfo);
  const enterPanicModeAction = useAction(enterPanicMode);
  const exitPanicModeAction = useAction(exitPanicMode);
  const showExitPanicModalAction = useAction(showExitPanicModal);
  const hideExitPanicModalAction = useAction(hideExitPanicModal);
  const clearDataAndGoBackAction = useAction(clearDataAndGoBack);
  const setTriggeredFromPassiveAction = useAction(setEscortFromPassive);
  const clearLocation = useAction(ClearLocationData);
  const logError = useAction(LogErrorToDb);
  const appStateStatusChange = useAction(appStateChangeAction);
  const shouldShowCallModal = useSelector(makeSelectShouldShowCallModal());
  const shouldShowSafeModal = useSelector(makeSelectShouldShowSafeModal());
  const recordType = useSelector(makeSelectRecordType());
  const shouldShowChatModal = useSelector(makeSelectShouldShowChatModal());
  const chatMessages = useSelector(makeSelectMessages());
  const requestingImSafe = useSelector(makeSelectRequestingImSafe());
  const shouldShowPanicInfo = useSelector(makeSelectShouldShowPanicInfo());
  const shouldShowExitPanicModal = useSelector(
    makeSelectShouldShowExitPanicModal(),
  );
  const accessToken = useSelector(makeSelectTwilioAccessToken());
  const isPanicMode = useSelector(makeSelectIsPanicMode());
  const location = useSelector(makeSelectAppLocation());
  const appState = useSelector(makeSelectAppState());

  const twilioVideoRef = useRef<TwilioVideo>(null);
  const panicModeRef = useRef(false);

  // console.log("isPanicMode ====>",isPanicMode)

  useBackButton(() => {
    showSafeModalAction();
    return true;
  });


  const tryRequestCameraPermissions = () => {
    requestCameraPermissions()
      .then(() => {
        // console.log("camera permission granted")
        setPermissionStatus(PermissionStatus.Granted);
      })
      .catch(() => {
        // console.log("camera permission blocked")
        setPermissionStatus(PermissionStatus.Blocked);
      });
  };


  const onEscortClosed = () => {
    hideChatModalAction();
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
    setTimeout(
      async () => {
        Alert.alert(
          formatMessage(messages.escortClosed),
          formatMessage(messages.escortClosedDetail),
          [
            {
              text: formatMessage(messages.ok),
              onPress: clearDataAndGoBackAction,
            },
          ],
          { cancelable: false },
        );
        await stopBackgroundGeolocation(clearLocation);
      },
      shouldShowChatModal ? 5000 : 1500,
    );
  };

  const handleAppStateChange = (state: AppStateStatus) => {
    appStateStatusChange({ state, incidentEscort });
  };

  //initialize twilio video
  const initTwilioVideo = async () => {
    if (showTimerExpired === true && connectionState !== connectionTypes.connnected) {
      // console.log("initTwilioVideo===>")
      let token = accessToken;
      if (isTokenExpired(accessToken)) {
        token = await refreshTwilioAccessToken();
      }
      // console.log("incidentEscort.twilio?.roomId===>",incidentEscort.twilio?.roomId)
      twilioVideoRef.current?.connect({
        roomName: incidentEscort.twilio?.roomId,
        accessToken: token.access_token || '',
        maintainVideoTrackInBackground: true,
        enableAudio: true,
        enableRemoteAudio: true
      });
      // console.log("-initTwilioVideo Connecting--->")
      setConnectionState(connectionTypes.connecting);
    }
  }

  useEffect(function initEffects() {
    KeepAwake.activate(); // sync
    event.on(AppEvent.OnEscortClosed, onEscortClosed); // sync
    handleAppStateChange(AppState.currentState); // if app is restart mid escort, need to update AppState to 'active'
    AppState.addEventListener('change', handleAppStateChange); // sync
    tryRequestCameraPermissions()
    const asyncInit = async () => {
      try {
        const panicMode = await AsyncStorage.getItem(PANIC_MODE_KEY);
        // console.log("=panicMode======>", panicMode)
        if (panicMode === PanicMode.Active) {
          panicModeRef.current = true;
          enterPanicModeAction(incidentEscort);
        } else {
          panicModeRef.current = false;
        }
        await AsyncStorage.setItem(ESCORT_STATE_KEY, EscortState.Started);

        // console.log("=panicMode======>", panicMode)
        // console.log("=isPanicMode======>", isPanicMode)
        // let token = accessToken;
        // if (isTokenExpired(accessToken)) {
        //   token = await refreshTwilioAccessToken();
        // }
        // twilioVideoRef.current?.connect({
        //   roomName: incidentEscort.twilio?.roomId,
        //   accessToken: token.access_token || '',
        //   maintainVideoTrackInBackground: true,
        //   enableAudio: true,
        //   enableRemoteAudio:true
        // });
        // console.log("-Connecting--->")
        // setConnectionState(connectionTypes.connecting);



        if (AppState.currentState === 'active' && showTimerExpired === false && isPanicMode === false) {
          let token = accessToken;
          if (isTokenExpired(accessToken)) {
            token = await refreshTwilioAccessToken();
          }
          console.log("-incidentEscort.twilio?.roomId 2--->",incidentEscort.twilio?.roomId)
          twilioVideoRef.current?.connect({
            roomName: incidentEscort.twilio?.roomId,
            accessToken: token.access_token || '',
            maintainVideoTrackInBackground: true,
            enableAudio: true,
            enableRemoteAudio: true
          });
          // console.log("-initEffects Connectin g--->")
          setConnectionState(connectionTypes.connecting);
        }



      } catch (err) {
        api.logger.log('Record Screen async init', err);
      }
    };
    asyncInit();
    return function initEffectCleanUp() {
      event.off(AppEvent.OnEscortClosed, onEscortClosed); // sync
      KeepAwake.deactivate(); // sync
      AppState.removeEventListener('change', handleAppStateChange); // sync
      const asyncCleanup = async () => {
        try {
          await AsyncStorage.setItem(ESCORT_STATE_KEY, EscortState.Finished); // async
          twilioVideoRef.current?.disconnect();
        } catch (err) {
          api.logger.log('Record Screen async cleanup', (err as Error).message);
        }
      };
      asyncCleanup();
    };
  }, []);

  // Manage toggle sideEffect
  useEffect(() => {
    (async () => {
      try {
        if (!isPanicMode && connectionState === connectionTypes.connnected) {
          await twilioVideoRef.current?.setLocalVideoEnabled(
            recordType === RecordType.Video,
          );
        }
      } catch (err) {
        api.logger.log('Toggle video enabled ERR: ', (err as Error).message);
      }
    })();
  }, [recordType, isPanicMode]);

  // // Manage toggle sideEffect
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log("isPanicMode****==>",isPanicMode)
  //       if (isPanicMode && connectionState !== connectionTypes.connnected) {
  //         let token = accessToken;
  //         if (isTokenExpired(accessToken)) {
  //           token = await refreshTwilioAccessToken();
  //         }
  //         twilioVideoRef.current?.connect({
  //           roomName: incidentEscort.twilio?.roomId,
  //           accessToken: token.access_token || '',
  //           maintainVideoTrackInBackground: true,
  //           enableAudio: true,
  //           enableRemoteAudio: true
  //         });
  //         console.log("-useEffect Connecting--->")
  //         setConnectionState(connectionTypes.connecting);
  //       }
  //     } catch (err) {
  //       api.logger.log('Toggle video enabled ERR: ', err);
  //     }
  //   })();
  // }, [isPanicMode]);

  useEffect(
    function manageChatNotifications() {
      startChatAction(incidentEscort);
      const notificationAdded = (notificationBadges: Id[]) => {
        setBadges(filter(notificationBadges, n => n === incidentEscort.id));
      };
      event.on(AppEvent.OnNotificationBadge, notificationAdded);
      const messageAdded = async (message: GiftedChatMessage) => {
        await addBadge(incidentEscort.id as Id);
        addMessageAction(message);
      };
      event.on(AppEvent.OnMessageAdded, messageAdded);

      const onMessageOpenChatBox = async (message: GiftedChatMessage) => {
        console.log("open chat box===>",message)
        showChatModalAction()
      };
      event.on(AppEvent.OnChatMessageTap, onMessageOpenChatBox);
      return function clean() {
        event.off(AppEvent.OnNotificationBadge, notificationAdded);
        event.off(AppEvent.OnMessageAdded, messageAdded);
        twilio
          .removeChannelEvents(incidentEscort.id?.toString() || '')
          .then()
          .catch(e => api.logger.log('Remove chat channel event', e));
      };
    },
    [addMessageAction, incidentEscort, startChatAction],
  );

  useEffect(() => {
    (() => {
      if (connectionState === connectionTypes.connnected) {
        if (panicModeRef.current) {
          try {
            // console.log("Video Enable")
            setTimeout(async () => {
              toggleRecordTypeAction(incidentEscort);
              await twilioVideoRef.current?.setLocalAudioEnabled(true);
              await twilioVideoRef.current?.setLocalVideoEnabled(true);
            }, 5000);
          } catch (err) {
            api.logger.log('Enter panic ERR: ', (err as Error).message);
          }
        }
      }
    })();
  }, [incidentEscort, toggleRecordTypeAction, connectionState]);

  useEffect(() => {
    setShowTimerExpired(!!incidentEscort.fromTimerExpired);
  }, [incidentEscort]);

  useEffect(() => {
    if (fromPassive) {
      setTriggeredFromPassiveAction();
    }
  }, [fromPassive, setTriggeredFromPassiveAction]);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    (async () => {
      if (!panicModeRef.current && appState === 'active') {
        initTwilioVideo() // initialize twilio video
        await twilioVideoRef.current?.setLocalAudioEnabled(true);
        await twilioVideoRef.current?.setLocalVideoEnabled(
          recordType === RecordType.Video,
        );
      }
    })();
  }, [appState, recordType]);

  const handleSendMessage = useCallback(
    (messagesToSent: GiftedChatMessage[]) => {
      forEach(messagesToSent, message => {
        sendMessageAction({
          incidentEscort,
          message,
          location: locationRef.current,
        });
      });
    },
    [incidentEscort, sendMessageAction],
  );

  const handleSafeModalContinue = useCallback(
    (comment: string | undefined) => {
      exitPanicModeAction(incidentEscort);
      panicModeRef.current = false;

      imSafeAction({ incidentEscort, comment });
      twilioVideoRef.current?.disconnect();
      if (!fromPassive) {
        (async () => {
          await stopBackgroundGeolocation(clearLocation);
        })();
      }
    },
    [imSafeAction, incidentEscort, fromPassive],
  );

  const handleEnterPanicModeAction = useCallback(() => {
    enterPanicModeAction(incidentEscort);
    panicModeRef.current = true;
    if (recordType === RecordType.Audio && connectionState === connectionTypes.connnected) {
      toggleRecordTypeAction(incidentEscort);
      twilioVideoRef.current?.setLocalVideoEnabled(true);
    }
  }, [
    enterPanicModeAction,
    incidentEscort,
    recordType,
    toggleRecordTypeAction,
    connectionState,
  ]);

  const handleExitPanicModeAction = useCallback(() => {
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
  }, [exitPanicModeAction, incidentEscort]);

  const clearBadges = useCallback(async () => {
    await removeBadge(incidentEscort.id as Id);
  }, [incidentEscort]);

  const onFlipButtonClick = useCallback(() => {
    // console.log("-connectionState->", connectionState)
    // console.log("-twilioVideoRef.current?->", twilioVideoRef.current)
    if (connectionState === connectionTypes.connnected) {
      twilioVideoRef.current?.flipCamera();
    }
  }, [connectionState]);

  const handleRoomDidConnect = useCallback(async () => {
    try {
      console.log("-Connected--->")
      setConnectionState(connectionTypes.connnected);
      await twilioVideoRef.current?.setRemoteAudioEnabled(true);
      await twilioVideoRef.current?.setLocalAudioEnabled(true);
      await twilioVideoRef.current?.setLocalVideoEnabled(false);
      twilioVideoRef.current?.flipCamera();
    } catch (e) {
      logError({
        source: 'handleRoomDidConnect',
        message: (e as Error).message,
        raw: JSON.stringify(e),
      });
    }
  }, [logError]);

  const handleRoomDisconnect = useCallback(
    payload => {
      console.log("-DisConnected--->")
      setConnectionState(connectionTypes.disconnected);
      logError({
        source: 'Record Screen: OnRoomDidDisconnect',
        message: payload.error,
        raw: JSON.stringify(payload),
      });
    },
    [logError],
  );

  // const reconnect = async () => {

  //   let token = accessToken;
  //   if (isTokenExpired(accessToken)) {
  //     token = await refreshTwilioAccessToken();
  //   }
  //   twilioVideoRef.current?.connect({
  //     roomName: incidentEscort.twilio?.roomId,
  //     accessToken: token.access_token || '',
  //     maintainVideoTrackInBackground: true,
  //     encodingParameters: { enableH264Codec: true }
  //   });
  //   console.log("-Connecting--->")
  //   setConnectionState(connectionTypes.connecting);
  // }

  const handleRoomConnectionFail = useCallback(
    payload => {
      console.log("-Connection Failed--->", payload)
      setConnectionState(connectionTypes.disconnected);
      // reconnect()
      logError({
        source: 'Record Screen: OnRoomDidFailToConnect',
        message: payload.error,
        raw: JSON.stringify(payload),
      });
    },
    [logError],

  );


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container>
          <RecordContainer>
            {connectionState === connectionTypes.connnected && (
              <TwilioVideoLocalView
                applyZOrder={true}
                enabled={recordType === RecordType.Video}
                style={{ flex: 1 }}
              />
            )}
            {recordType === RecordType.Audio && (
              <RecordAudio location={location} />
            )}
            <Logo />
            <OrganizationName>
              {formatMessage(messages.escort, {
                organizationName: organization.name,
              })}
            </OrganizationName>
            {showTimerExpired && <TimerExpiredBanner />}
            <SharingText>
              {formatMessage(
                recordType === RecordType.Audio
                  ? messages.sharingAudio
                  : messages.shareVideo,
              )}
            </SharingText>
            {recordType === RecordType.Audio && <AudioStream />}
            {recordType === RecordType.Video && <RecordDot />}
            {shouldShowPanicInfo && <PanicInfoContainer />}
            {recordType === RecordType.Video && (
              <CameraFlipButton
                onPress={onFlipButtonClick}
                image={images.icFlip()}
              />
            )}
          </RecordContainer>
          <MiddleControls>
            <SafeButton
              onPress={
                isPanicMode ? showExitPanicModalAction : showSafeModalAction
              }
            >
              <SafeButtonText>
                {formatMessage(
                  isPanicMode ? messages.endPanic : messages.imSafe,
                )}
              </SafeButtonText>
            </SafeButton>
            <PanicButton
              isPanicMode={isPanicMode}
              onPress={showPanicInfoAction}
              onFill={handleEnterPanicModeAction}
              text={formatMessage(messages.panic)}
            />
          </MiddleControls>
          <BottomControls>
            <PhoneButton
              onPress={showCallModalAction}
              image={images.icPhoneCall()}
            />
            <ToggleContainer
              disabled={isPanicMode}
              recordType={recordType}
              onPress={() => toggleRecordTypeAction(incidentEscort)}
            >
              <ToggleImageContainer>
                <ToggleImage
                  source={
                    recordType === RecordType.Audio
                      ? images.icMicrophone()
                      : images.icCamera()
                  }
                />
              </ToggleImageContainer>
              <ToggleText>
                {recordType === RecordType.Audio
                  ? formatMessage(messages.shareVideo)
                  : formatMessage(messages.audioOnly)}
              </ToggleText>
            </ToggleContainer>
            <ChatContainer>
              <ChatButton
                onPress={showChatModalAction}
                image={images.icChat()}
              />
              {!isEmpty(badges) && <StyledBadge length={badges.length} />}
            </ChatContainer>
          </BottomControls>
        </Container>
        <CallModal
          isVisible={shouldShowCallModal}
          hideModal={hideCallModalAction}
          organization={organization}
        />
        <SafeModal
          isVisible={shouldShowSafeModal}
          hideModal={hideSafeModalAction}
          onContinue={handleSafeModalContinue}
          requestingImSafe={requestingImSafe}
        />
        {location && (
          <ChatModal
            isVisible={shouldShowChatModal}
            hideModal={hideChatModalAction}
            organization={organization}
            messages={chatMessages}
            onMessageSent={handleSendMessage}
            onShow={clearBadges}
            onHide={clearBadges}
          />
        )}
        <ExitPanicModal
          isVisible={shouldShowExitPanicModal}
          hideModal={hideExitPanicModalAction}
          onConfirm={handleExitPanicModeAction}
        />

        <TwilioVideo
          ref={twilioVideoRef}
          onRoomDidConnect={handleRoomDidConnect}
          onRoomDidDisconnect={handleRoomDisconnect}
          onRoomDidFailToConnect={handleRoomConnectionFail}

        />

        {/* {recordType == RecordType.Video ?
          <TwilioVideo
            ref={twilioVideoRef}
            onRoomDidConnect={handleRoomDidConnect}
            onRoomDidDisconnect={handleRoomDisconnect}
            onRoomDidFailToConnect={handleRoomConnectionFail}
          /> :
          null
        } */}
      </SafeAreaContainer>
      {isPanicMode && <PanicOverlay />}
    </>
  );
};

export default EscortScreen;

