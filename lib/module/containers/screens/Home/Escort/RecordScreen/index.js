/* eslint-disable simple-import-sort/sort */
/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppEvent, event, twilio } from '../../../../../api';
import { images } from '../../../../../assets';
import { CallModal, ChatModal, SafeAreaContainer, PanicButton } from '../../../../../components';
import { ClearLocationData, LogErrorToDb } from '../../../../../containers/app/actions';
import { makeSelectAppLocation, makeSelectTwilioAccessToken } from '../../../../../containers/app/selectors';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Alert, AppState, StatusBar } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { TwilioVideo, TwilioVideoLocalView } from 'react-native-twilio-video-webrtc';
import { useAction, useBackButton, useSelector } from '../../../../../utils/hooks';
import { stopBackgroundGeolocation } from '../../../../../utils/location/backgroundGeolocation';
import { addBadge, removeBadge } from '../../../../../utils/notification';
import { isTokenExpired, refreshTwilioAccessToken } from '../../../../../utils/token';
import { requestCameraPermissions } from '../../../../../utils/permission';
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
import * as api from '../../../../../api';
import { addMessage, appStateChangeAction, clearDataAndGoBack, enterPanicMode, exitPanicMode, hideCallModal, hideChatModal, hideExitPanicModal, hideSafeModal, imSafeRequest, sendMessageRequest, setEscortFromPassive, showCallModal, showChatModal, showExitPanicModal, showPanicInfo, showSafeModal, startChat, toggleRecordType } from './actions';
import { ESCORT_STATE_KEY, PANIC_MODE_KEY } from './constants';
import ExitPanicModal from './ExitPanicModal';
import messages from './messages';
import RecordAudio from './RecordAudio';
import SafeModal from './SafeModal';
import { makeSelectIsPanicMode, makeSelectMessages, makeSelectRecordType, makeSelectRequestingImSafe, makeSelectShouldShowCallModal, makeSelectShouldShowChatModal, makeSelectShouldShowExitPanicModal, makeSelectShouldShowPanicInfo, makeSelectShouldShowSafeModal, makeSelectAppState } from './selectors';
import { AudioStream, BottomControls, CameraFlipButton, ChatButton, ChatContainer, Container, Logo, MiddleControls, OrganizationName, PanicInfoContainer, PanicOverlay, PhoneButton, RecordContainer, RecordDot, SafeButton, SafeButtonText, SharingText, StyledBadge, ToggleContainer, ToggleImage, ToggleImageContainer, ToggleText } from './styles';
import TimerExpiredBanner from './TimerExpired';
import { EscortState, PanicMode, RecordType } from './types';
var connectionTypes = /*#__PURE__*/function (connectionTypes) {
  connectionTypes["disconnected"] = "disconnected";
  connectionTypes["connecting"] = "connnecting";
  connectionTypes["connnected"] = "connected";
  return connectionTypes;
}(connectionTypes || {});
const EscortScreen = ({
  navigation: {
    getParam
  }
}) => {
  const [permissionStatus, setPermissionStatus] = useState(PermissionStatus.Checking);
  const incidentEscort = getParam('incidentEscort');
  const organization = getParam('organization');
  const fromPassive = getParam('fromPassive');
  const [badges, setBadges] = useState([]);
  const [showTimerExpired, setShowTimerExpired] = useState(false);
  const [connectionState, setConnectionState] = useState(connectionTypes.disconnected);
  const locationRef = useRef();
  const {
    formatMessage
  } = useIntl();
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
  const shouldShowExitPanicModal = useSelector(makeSelectShouldShowExitPanicModal());
  const accessToken = useSelector(makeSelectTwilioAccessToken());
  const isPanicMode = useSelector(makeSelectIsPanicMode());
  const location = useSelector(makeSelectAppLocation());
  const appState = useSelector(makeSelectAppState());
  const twilioVideoRef = useRef(null);
  const panicModeRef = useRef(false);

  // console.log("isPanicMode ====>",isPanicMode)

  useBackButton(() => {
    showSafeModalAction();
    return true;
  });
  const tryRequestCameraPermissions = () => {
    requestCameraPermissions().then(() => {
      // console.log("camera permission granted")
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      // console.log("camera permission blocked")
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  const onEscortClosed = () => {
    hideChatModalAction();
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
    setTimeout(async () => {
      Alert.alert(formatMessage(messages.escortClosed), formatMessage(messages.escortClosedDetail), [{
        text: formatMessage(messages.ok),
        onPress: clearDataAndGoBackAction
      }], {
        cancelable: false
      });
      await stopBackgroundGeolocation(clearLocation);
    }, shouldShowChatModal ? 5000 : 1500);
  };
  const handleAppStateChange = state => {
    appStateStatusChange({
      state,
      incidentEscort
    });
  };

  //initialize twilio video
  const initTwilioVideo = async () => {
    if (showTimerExpired === true && connectionState !== connectionTypes.connnected) {
      var _twilioVideoRef$curre, _incidentEscort$twili;
      // console.log("initTwilioVideo===>")
      let token = accessToken;
      if (isTokenExpired(accessToken)) {
        token = await refreshTwilioAccessToken();
      }
      // console.log("incidentEscort.twilio?.roomId===>",incidentEscort.twilio?.roomId)
      (_twilioVideoRef$curre = twilioVideoRef.current) === null || _twilioVideoRef$curre === void 0 || _twilioVideoRef$curre.connect({
        roomName: (_incidentEscort$twili = incidentEscort.twilio) === null || _incidentEscort$twili === void 0 ? void 0 : _incidentEscort$twili.roomId,
        accessToken: token.access_token || '',
        maintainVideoTrackInBackground: true,
        enableAudio: true,
        enableRemoteAudio: true
      });
      // console.log("-initTwilioVideo Connecting--->")
      setConnectionState(connectionTypes.connecting);
    }
  };
  useEffect(function initEffects() {
    KeepAwake.activate(); // sync
    event.on(AppEvent.OnEscortClosed, onEscortClosed); // sync
    handleAppStateChange(AppState.currentState); // if app is restart mid escort, need to update AppState to 'active'
    AppState.addEventListener('change', handleAppStateChange); // sync
    tryRequestCameraPermissions();
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
          var _incidentEscort$twili2, _twilioVideoRef$curre2, _incidentEscort$twili3;
          let token = accessToken;
          if (isTokenExpired(accessToken)) {
            token = await refreshTwilioAccessToken();
          }
          console.log("-incidentEscort.twilio?.roomId 2--->", (_incidentEscort$twili2 = incidentEscort.twilio) === null || _incidentEscort$twili2 === void 0 ? void 0 : _incidentEscort$twili2.roomId);
          (_twilioVideoRef$curre2 = twilioVideoRef.current) === null || _twilioVideoRef$curre2 === void 0 || _twilioVideoRef$curre2.connect({
            roomName: (_incidentEscort$twili3 = incidentEscort.twilio) === null || _incidentEscort$twili3 === void 0 ? void 0 : _incidentEscort$twili3.roomId,
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
          var _twilioVideoRef$curre3;
          await AsyncStorage.setItem(ESCORT_STATE_KEY, EscortState.Finished); // async
          (_twilioVideoRef$curre3 = twilioVideoRef.current) === null || _twilioVideoRef$curre3 === void 0 || _twilioVideoRef$curre3.disconnect();
        } catch (err) {
          api.logger.log('Record Screen async cleanup', err.message);
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
          var _twilioVideoRef$curre4;
          await ((_twilioVideoRef$curre4 = twilioVideoRef.current) === null || _twilioVideoRef$curre4 === void 0 ? void 0 : _twilioVideoRef$curre4.setLocalVideoEnabled(recordType === RecordType.Video));
        }
      } catch (err) {
        api.logger.log('Toggle video enabled ERR: ', err.message);
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

  useEffect(function manageChatNotifications() {
    startChatAction(incidentEscort);
    const notificationAdded = notificationBadges => {
      setBadges(filter(notificationBadges, n => n === incidentEscort.id));
    };
    event.on(AppEvent.OnNotificationBadge, notificationAdded);
    const messageAdded = async message => {
      await addBadge(incidentEscort.id);
      addMessageAction(message);
    };
    event.on(AppEvent.OnMessageAdded, messageAdded);
    const onMessageOpenChatBox = async message => {
      console.log("open chat box===>", message);
      showChatModalAction();
    };
    event.on(AppEvent.OnChatMessageTap, onMessageOpenChatBox);
    return function clean() {
      var _incidentEscort$id;
      event.off(AppEvent.OnNotificationBadge, notificationAdded);
      event.off(AppEvent.OnMessageAdded, messageAdded);
      twilio.removeChannelEvents(((_incidentEscort$id = incidentEscort.id) === null || _incidentEscort$id === void 0 ? void 0 : _incidentEscort$id.toString()) || '').then().catch(e => api.logger.log('Remove chat channel event', e));
    };
  }, [addMessageAction, incidentEscort, startChatAction]);
  useEffect(() => {
    (() => {
      if (connectionState === connectionTypes.connnected) {
        if (panicModeRef.current) {
          try {
            // console.log("Video Enable")
            setTimeout(async () => {
              var _twilioVideoRef$curre5, _twilioVideoRef$curre6;
              toggleRecordTypeAction(incidentEscort);
              await ((_twilioVideoRef$curre5 = twilioVideoRef.current) === null || _twilioVideoRef$curre5 === void 0 ? void 0 : _twilioVideoRef$curre5.setLocalAudioEnabled(true));
              await ((_twilioVideoRef$curre6 = twilioVideoRef.current) === null || _twilioVideoRef$curre6 === void 0 ? void 0 : _twilioVideoRef$curre6.setLocalVideoEnabled(true));
            }, 5000);
          } catch (err) {
            api.logger.log('Enter panic ERR: ', err.message);
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
        var _twilioVideoRef$curre7, _twilioVideoRef$curre8;
        initTwilioVideo(); // initialize twilio video
        await ((_twilioVideoRef$curre7 = twilioVideoRef.current) === null || _twilioVideoRef$curre7 === void 0 ? void 0 : _twilioVideoRef$curre7.setLocalAudioEnabled(true));
        await ((_twilioVideoRef$curre8 = twilioVideoRef.current) === null || _twilioVideoRef$curre8 === void 0 ? void 0 : _twilioVideoRef$curre8.setLocalVideoEnabled(recordType === RecordType.Video));
      }
    })();
  }, [appState, recordType]);
  const handleSendMessage = useCallback(messagesToSent => {
    forEach(messagesToSent, message => {
      sendMessageAction({
        incidentEscort,
        message,
        location: locationRef.current
      });
    });
  }, [incidentEscort, sendMessageAction]);
  const handleSafeModalContinue = useCallback(comment => {
    var _twilioVideoRef$curre9;
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
    imSafeAction({
      incidentEscort,
      comment
    });
    (_twilioVideoRef$curre9 = twilioVideoRef.current) === null || _twilioVideoRef$curre9 === void 0 || _twilioVideoRef$curre9.disconnect();
    if (!fromPassive) {
      (async () => {
        await stopBackgroundGeolocation(clearLocation);
      })();
    }
  }, [imSafeAction, incidentEscort, fromPassive]);
  const handleEnterPanicModeAction = useCallback(() => {
    enterPanicModeAction(incidentEscort);
    panicModeRef.current = true;
    if (recordType === RecordType.Audio && connectionState === connectionTypes.connnected) {
      var _twilioVideoRef$curre10;
      toggleRecordTypeAction(incidentEscort);
      (_twilioVideoRef$curre10 = twilioVideoRef.current) === null || _twilioVideoRef$curre10 === void 0 || _twilioVideoRef$curre10.setLocalVideoEnabled(true);
    }
  }, [enterPanicModeAction, incidentEscort, recordType, toggleRecordTypeAction, connectionState]);
  const handleExitPanicModeAction = useCallback(() => {
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
  }, [exitPanicModeAction, incidentEscort]);
  const clearBadges = useCallback(async () => {
    await removeBadge(incidentEscort.id);
  }, [incidentEscort]);
  const onFlipButtonClick = useCallback(() => {
    // console.log("-connectionState->", connectionState)
    // console.log("-twilioVideoRef.current?->", twilioVideoRef.current)
    if (connectionState === connectionTypes.connnected) {
      var _twilioVideoRef$curre11;
      (_twilioVideoRef$curre11 = twilioVideoRef.current) === null || _twilioVideoRef$curre11 === void 0 || _twilioVideoRef$curre11.flipCamera();
    }
  }, [connectionState]);
  const handleRoomDidConnect = useCallback(async () => {
    try {
      var _twilioVideoRef$curre12, _twilioVideoRef$curre13, _twilioVideoRef$curre14, _twilioVideoRef$curre15;
      console.log("-Connected--->");
      setConnectionState(connectionTypes.connnected);
      await ((_twilioVideoRef$curre12 = twilioVideoRef.current) === null || _twilioVideoRef$curre12 === void 0 ? void 0 : _twilioVideoRef$curre12.setRemoteAudioEnabled(true));
      await ((_twilioVideoRef$curre13 = twilioVideoRef.current) === null || _twilioVideoRef$curre13 === void 0 ? void 0 : _twilioVideoRef$curre13.setLocalAudioEnabled(true));
      await ((_twilioVideoRef$curre14 = twilioVideoRef.current) === null || _twilioVideoRef$curre14 === void 0 ? void 0 : _twilioVideoRef$curre14.setLocalVideoEnabled(false));
      (_twilioVideoRef$curre15 = twilioVideoRef.current) === null || _twilioVideoRef$curre15 === void 0 || _twilioVideoRef$curre15.flipCamera();
    } catch (e) {
      logError({
        source: 'handleRoomDidConnect',
        message: e.message,
        raw: JSON.stringify(e)
      });
    }
  }, [logError]);
  const handleRoomDisconnect = useCallback(payload => {
    console.log("-DisConnected--->");
    setConnectionState(connectionTypes.disconnected);
    logError({
      source: 'Record Screen: OnRoomDidDisconnect',
      message: payload.error,
      raw: JSON.stringify(payload)
    });
  }, [logError]);

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

  const handleRoomConnectionFail = useCallback(payload => {
    console.log("-Connection Failed--->", payload);
    setConnectionState(connectionTypes.disconnected);
    // reconnect()
    logError({
      source: 'Record Screen: OnRoomDidFailToConnect',
      message: payload.error,
      raw: JSON.stringify(payload)
    });
  }, [logError]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(RecordContainer, null, connectionState === connectionTypes.connnected && /*#__PURE__*/React.createElement(TwilioVideoLocalView, {
    applyZOrder: true,
    enabled: recordType === RecordType.Video,
    style: {
      flex: 1
    }
  }), recordType === RecordType.Audio && /*#__PURE__*/React.createElement(RecordAudio, {
    location: location
  }), /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement(OrganizationName, null, formatMessage(messages.escort, {
    organizationName: organization.name
  })), showTimerExpired && /*#__PURE__*/React.createElement(TimerExpiredBanner, null), /*#__PURE__*/React.createElement(SharingText, null, formatMessage(recordType === RecordType.Audio ? messages.sharingAudio : messages.shareVideo)), recordType === RecordType.Audio && /*#__PURE__*/React.createElement(AudioStream, null), recordType === RecordType.Video && /*#__PURE__*/React.createElement(RecordDot, null), shouldShowPanicInfo && /*#__PURE__*/React.createElement(PanicInfoContainer, null), recordType === RecordType.Video && /*#__PURE__*/React.createElement(CameraFlipButton, {
    onPress: onFlipButtonClick,
    image: images.icFlip()
  })), /*#__PURE__*/React.createElement(MiddleControls, null, /*#__PURE__*/React.createElement(SafeButton, {
    onPress: isPanicMode ? showExitPanicModalAction : showSafeModalAction
  }, /*#__PURE__*/React.createElement(SafeButtonText, null, formatMessage(isPanicMode ? messages.endPanic : messages.imSafe))), /*#__PURE__*/React.createElement(PanicButton, {
    isPanicMode: isPanicMode,
    onPress: showPanicInfoAction,
    onFill: handleEnterPanicModeAction,
    text: formatMessage(messages.panic)
  })), /*#__PURE__*/React.createElement(BottomControls, null, /*#__PURE__*/React.createElement(PhoneButton, {
    onPress: showCallModalAction,
    image: images.icPhoneCall()
  }), /*#__PURE__*/React.createElement(ToggleContainer, {
    disabled: isPanicMode,
    recordType: recordType,
    onPress: () => toggleRecordTypeAction(incidentEscort)
  }, /*#__PURE__*/React.createElement(ToggleImageContainer, null, /*#__PURE__*/React.createElement(ToggleImage, {
    source: recordType === RecordType.Audio ? images.icMicrophone() : images.icCamera()
  })), /*#__PURE__*/React.createElement(ToggleText, null, recordType === RecordType.Audio ? formatMessage(messages.shareVideo) : formatMessage(messages.audioOnly))), /*#__PURE__*/React.createElement(ChatContainer, null, /*#__PURE__*/React.createElement(ChatButton, {
    onPress: showChatModalAction,
    image: images.icChat()
  }), !isEmpty(badges) && /*#__PURE__*/React.createElement(StyledBadge, {
    length: badges.length
  })))), /*#__PURE__*/React.createElement(CallModal, {
    isVisible: shouldShowCallModal,
    hideModal: hideCallModalAction,
    organization: organization
  }), /*#__PURE__*/React.createElement(SafeModal, {
    isVisible: shouldShowSafeModal,
    hideModal: hideSafeModalAction,
    onContinue: handleSafeModalContinue,
    requestingImSafe: requestingImSafe
  }), location && /*#__PURE__*/React.createElement(ChatModal, {
    isVisible: shouldShowChatModal,
    hideModal: hideChatModalAction,
    organization: organization,
    messages: chatMessages,
    onMessageSent: handleSendMessage,
    onShow: clearBadges,
    onHide: clearBadges
  }), /*#__PURE__*/React.createElement(ExitPanicModal, {
    isVisible: shouldShowExitPanicModal,
    hideModal: hideExitPanicModalAction,
    onConfirm: handleExitPanicModeAction
  }), /*#__PURE__*/React.createElement(TwilioVideo, {
    ref: twilioVideoRef,
    onRoomDidConnect: handleRoomDidConnect,
    onRoomDidDisconnect: handleRoomDisconnect,
    onRoomDidFailToConnect: handleRoomConnectionFail
  })), isPanicMode && /*#__PURE__*/React.createElement(PanicOverlay, null));
};
export default EscortScreen;
//# sourceMappingURL=index.js.map