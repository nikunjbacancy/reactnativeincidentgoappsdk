/* eslint-disable simple-import-sort/sort */
import { images } from '../../../../../assets';
import {
  CallModal,
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  SafeModal,
  ScreenActionButton,
  PanicButton,
} from '../../../../../components';
import { ClearLocationData, UpdateLocationData } from '../../../../../containers/app/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import {
  Id,
  Organization,
  OrganizationProcedure,
  PassiveEscortAction,
} from 'incident-code-core';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, StatusBar, View, Platform, Alert, AppState } from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import { ScreenProps } from 'react-native-screens';
import { withNavigationFocus } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useBackButton, useSelector } from '../../../../../utils/hooks';
import {
  startBackgroundGeolocationToEscort,
  stopBackgroundGeolocation
} from '../../../../../utils/location/backgroundGeolocation';

import { BatteryOptEnabled, RequestDisableOptimization } from "react-native-battery-optimization-check";

// const { BatteryOptimizationModule } from ReactNative.NativeModules;

import {
  getCachedFinePosition
} from '../../../../../utils/location';

import {
  cancelCountdownWarning,
  clearAreYouSafe,
  clearEscortErrorAction,
  clearProcedure,
  completeProcedureAction,
  enterPanicMode,
  getProcedureRequest,
  hideCallModal,
  hideSafeModal,
  imSafeRequest,
  logEscortAction,
  showCallModal,
  showPanicInfo,
  showSafeModal,
  showSetTimerModal,
  startCountdownWarning,
  startPassiveEscortRequest,
  startVirtualEscortRequest,
  setSafetyTimer,
} from './actions';
import CountDownClock from './CountdownClock';
import messages from './messages';
import ProcedureChecklist from './ProcedureChecklist';
import {
  makeSelectCountdownIsActive,
  makeSelectDisplaySetTimerModal,
  makeSelectEnableStartButton,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectFinalActionCompleted,
  makeSelectIncident,
  makeSelectIsLoading,
  makeSelectIsPanicMode,
  makeSelectIsRequestingEscort,
  makeSelectIsUserDefinedTimer,
  makeSelectIsWarningActive,
  makeSelectProcedure,
  makeSelectProcedureActions,
  makeSelectProcedureTimer,
  makeSelectRequestingImSafe,
  makeSelectSafetyTimer,
  makeSelectShouldShowCallModal,
  makeSelectShouldShowPanicInfo,
  makeSelectShouldShowSafeModal,
} from './selectors';
import SetTimerModal from './SetTimerModal';
import {
  BottomControls,
  ButtonRow,
  Container,
  ErrorMessage,
  ErrorRow,
  InfoRow,
  InfoText,
  PanicOverlay,
  PhoneButton,
  PressPanicInfo,
  RequestEscortLoading,
  RequestEscortMessage,
  RequestEscortTitle,
  SafetyButton,
  SafetyButtonRow,
  SubHeader,
} from './styles';
import NavigatorService from '../../../../../utils/navigation';

interface Params {
  procedure?: OrganizationProcedure;
  organization?: Organization;
  id?: Id;
  isSafetyTimer?: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
  isFocused: boolean;
}

const EscortScreen: FC<Props> = ({ navigation, isFocused }) => {

  const passedProcedure = navigation.getParam('procedure');
  const organization = navigation.getParam('organization');
  const passedIncidentId = navigation.getParam('id');
  const isSafetyTimer = navigation.getParam('isSafetyTimer');

  const { formatMessage } = useIntl();
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [timerIsRunning, setTimerIsRunning] = useState(false);
  const [procedureParam, setProcedureParam] = useState(passedProcedure);
  const [incidentId, setIncidentId] = useState(passedIncidentId);

  // const [isCheckedBatteryUsage, setCheckBatteryUsage] = useState(false);
  const [isBatteryUsageDisable, setBatteryUsageDisable] = useState(1);

  const incident = useSelector(makeSelectIncident());
  const procedure = useSelector(makeSelectProcedure());
  const actions = useSelector(makeSelectProcedureActions());
  const timer = useSelector(makeSelectProcedureTimer());
  // const timer = 60;
  const isLoading = useSelector(makeSelectIsLoading());
  const enableStart = useSelector(makeSelectEnableStartButton());
  const displaySetTimerModal = useSelector(makeSelectDisplaySetTimerModal());
  const isUserDefined = useSelector(makeSelectIsUserDefinedTimer());
  const actionsComplete = useSelector(makeSelectFinalActionCompleted());
  const shouldShowCallModal = useSelector(makeSelectShouldShowCallModal());
  const shouldShowSafeModal = useSelector(makeSelectShouldShowSafeModal());
  const isPanicMode = useSelector(makeSelectIsPanicMode());
  const requestingImSafe = useSelector(makeSelectRequestingImSafe());
  const shouldShowPanicInfo = useSelector(makeSelectShouldShowPanicInfo());
  const isWarningActive = useSelector(makeSelectIsWarningActive());
  const requestingEscort = useSelector(makeSelectIsRequestingEscort());
  const countdownIsActive = useSelector(makeSelectCountdownIsActive());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const typeSafetyTimer = useSelector(makeSelectSafetyTimer());

  const getProcedureAction = useAction(getProcedureRequest);
  const showModalAction = useAction(showSetTimerModal);
  const completeProcedureActionAction = useAction(completeProcedureAction);
  const showCallModalAction = useAction(showCallModal);
  const hideCallModalAction = useAction(hideCallModal);
  const showSafeModalAction = useAction(showSafeModal);
  const hideSafeModalAction = useAction(hideSafeModal);
  const showPanicInfoAction = useAction(showPanicInfo);
  const enterPanicModeAction = useAction(enterPanicMode);
  const imSafeAction = useAction(imSafeRequest);
  const triggerCountdownWarning = useAction(startCountdownWarning);
  const clearCountdownWarning = useAction(cancelCountdownWarning);
  const startPassiveEscort = useAction(startPassiveEscortRequest);
  const requestVirtualEscort = useAction(startVirtualEscortRequest);
  const clearSafe = useAction(clearAreYouSafe);
  const logAction = useAction(logEscortAction);
  const errorCleanup = useAction(clearEscortErrorAction);
  const setLocation = useAction(UpdateLocationData);
  const clearLocation = useAction(ClearLocationData);
  const clearSelectedProcedure = useAction(clearProcedure);
  const setSafetyTimerAction = useAction(setSafetyTimer);

  const panicModeRef = useRef(false);

  // console.log("passedIncidentId===>", passedIncidentId)

  useEffect(
    function setIncidentToLocalState() {
      // console.log("passedIncidentId->", passedIncidentId)
      setIncidentId(passedIncidentId);
    },
    [passedIncidentId],
  );

  useEffect(
    function retrieveProcedure() {
      if (
        (!procedure ||
          (procedureParam && procedureParam?.id !== procedure?.id)) &&
        !isSafetyTimer
        // This gets triggered before state typeSafetyTimer gets set
      ) {
        getProcedureAction(procedureParam?.id);
      }
    },
    [isFocused],
  );

  useEffect(
    function autoStartCountdown() {
      if (isFocused && incidentId && procedure) {
        console.log("countdown start")
        startCountdown();
      }
    },
    [isFocused, procedure],
  );

  useEffect(
    function finishCountdown() {
      if (actionsComplete) {
        completeCountdown();
      }
    },
    [actionsComplete],
  );

  const completeCountdown = () => {
    console.log("complete count down")
    setTimerIsRunning(false);
    if (isWarningActive) {
      clearCountdownWarning();
    }
    showSafeModalAction();
    KeepAwake.deactivate();
  };

  useEffect(
    function safetyTimer() {
      if (isSafetyTimer) {
        setSafetyTimerAction(organization);
      }
      // console.log("-showModalAction--->",showModalAction)
    },
    [isSafetyTimer],
  );

  useEffect(function registerKeyboardListener() {
    const keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
      setIsKeyboardShow(true),
    );
    const keyboarDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
      setIsKeyboardShow(false),
    );
    // // startBackgroundTask()
    return function componentWillUnmount() {
      keyboarDidShowListener.remove();
      keyboarDidHideListener.remove();
      KeepAwake.deactivate();
    };
  }, []);

  useEffect(function startGeolocation() {
    if (incident?.id && setLocation) {
      startBackgroundGeolocationToEscort(incident.id, setLocation);
    }
  },
    [incident, setLocation],
  );


  useEffect(function checkBattery() {
    checkBatteryOptimizationAndroid()
  },

    [isFocused],
  );

  useEffect(() => {
    AppState.addEventListener('change', handleChange);

    return () => {
      AppState.removeEventListener('change', handleChange);
    }
  }, []);

  const handleChange = (newState: string) => {
    // console.log("-newState->>>>>>", newState)
    if (newState === "active") {
      checkBatteryOptimizationAndroid()
    }
  }

  // check battery optimization 
  const checkBatteryOptimizationAndroid = () => {
    if (Platform.OS == 'android') {
      BatteryOptEnabled().then((isEnabled: boolean) => {
        console.log("checkBattery==>", isEnabled)
        if (isEnabled) {
          // RNDisableBatteryOptimizationsAndroid.openBatteryModal();
          console.log("Is battery optimization enabled==-->", isEnabled)
          // BatteryOptimizationModule.openBatteryModal();
          setBatteryUsageDisable(1)
          Alert.alert(
            'Incident Go',
            'To ensure uninterrupted safety timer capabilities, please ALLOW IncidentGO unrestricted battery usage. Once the safety timer is complete IncidentGO will use minimal battery.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log("back"),
                style: 'cancel',
              },
              {
                text: 'OK', onPress: () => {
                  setBatteryUsageDisable(2)
                  RequestDisableOptimization()

                }
              },
            ]
          );
        }
        else {
          setBatteryUsageDisable(2)
        }
      });
    }
  }

  const handleEnterPanicModeAction = useCallback(() => {
    setTimerIsRunning(false);
    enterPanicModeAction(organization);
    panicModeRef.current = true;
  }, [enterPanicModeAction, organization]);

  const handleSafeModalContinue = useCallback((comment: string | undefined) => {

    imSafeAction({ comment });
    setProcedureParam(undefined);
    setIncidentId(undefined);
    setTimerIsRunning(false);
    stopBackgroundGeolocation(clearLocation);
    if (isWarningActive) {
      clearCountdownWarning();
    }
    if (error) {
      errorCleanup();
    }
  }, []);

  const onHideSafeModal = useCallback(() => {
    clearSafe();
    hideSafeModalAction();
    setTimerIsRunning(true);
  }, []);

  const onBack = () => {
    let blockExit = false;
    if (requestingEscort) {
      blockExit = true;
    }
    if (timerIsRunning || incidentId || error) {
      setTimerIsRunning(false);
      showSafeModalAction();
      blockExit = true;
    }
    if (error) {
      errorCleanup();
    }
    if (!blockExit) {
      clearSelectedProcedure();
    }
    return blockExit;
  };
  // hardware back
  useBackButton(onBack);
  // button press back
  const goBack = async () => {
    const blockNavigate = onBack();

    if (!blockNavigate) {
      if (typeSafetyTimer) {
        navigation.navigate(Screens.Home.Escort.EscortType);
      }
      navigation.goBack();
    }
  };

  const backToPrevious = () => {
    navigation.goBack();
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  }

  const onClockPress = () => {
    console.log("onClockPress", isUserDefined)
    console.log("!timerIsRunning", !timerIsRunning)
    if (isUserDefined && !timerIsRunning) {
      console.log("model open")
      showModalAction();
    }
  };

  // countdown expire warning
  const onWarning = () => {
    // console.log("on warning")
    triggerCountdownWarning();
  };

  const startCountdown = () => {
    console.log("startCountdown")
    console.log("startPassiveEscort Incident ==>", incidentId)
    startPassiveEscort({
      organization,
      id: incidentId,
      safetyTimer: typeSafetyTimer,
    });
    startBackgroundGeolocationToEscort(incidentId, setLocation);
    setTimerIsRunning(true);
    KeepAwake.activate();
  };

  const onCountdownExpired = async () => {
    // console.log("-onCountdownExpired---->")
    setTimerIsRunning(false);
    // console.log("-timer false---->")
    const geoPosition = await getCachedFinePosition();
    // console.log("-geo postion---->", geoPosition)
    // console.log("-organizatio---->", JSON.stringify(organization))
    if (geoPosition) {
      requestVirtualEscort(organization);
    } else {
      NavigatorService.navigate(Screens.Home.Escort.EscortType);
    }
  };

  const onActionChecked = (
    id: string | undefined,
    name: string,
    complete?: boolean,
  ) => {
    completeProcedureActionAction(id);
    logAction({
      id: incident?.id,
      action: PassiveEscortAction.ProcedureAction,
      actionName: name + (complete ? ' unchecked' : ' finished'),
    });
  };

  if (isLoading) return <LoadingIndicator />;

  const preCountdown = () => {
    return (
      <>
        <InfoRow>
          <InfoText>
            {formatMessage(
              typeSafetyTimer
                ? messages.safetyPreCountdown
                : messages.preCountdown,
            )}
          </InfoText>
        </InfoRow>
        <View style={{ marginTop: 'auto' }} />
        <ButtonRow>
          <ScreenActionButton
            disabled={!enableStart}
            text={formatMessage(messages.timerStart)}
            onPress={startCountdown}
            onCancel={goBack}
          />
        </ButtonRow>
      </>
    );
  };

  const activeCountdown = () => {
    return (
      <>
        {typeSafetyTimer ? (
          <SafetyButtonRow>
            <SafetyButton
              text={formatMessage(messages.safetyBtn)}
              onPress={completeCountdown}
            />
          </SafetyButtonRow>
        ) : (
          <ProcedureChecklist
            onActionChecked={onActionChecked}
            actions={actions}
          />
        )}

        <View style={{ marginTop: 'auto' }} />
        {shouldShowPanicInfo && <PressPanicInfo />}
        <BottomControls>
          <PhoneButton
            onPress={showCallModalAction}
            image={images.icPhoneCall()}
          />
          <PanicButton
            isPanicMode={isPanicMode}
            onPress={showPanicInfoAction}
            onFill={handleEnterPanicModeAction}
            text={formatMessage(messages.panic)}
          />
        </BottomControls>
      </>
    );
  };

  const expiredTimerRequestingEscort = () => {
    return (
      <>
        <RequestEscortLoading />
        <RequestEscortTitle>
          {isPanicMode
            ? formatMessage(messages.panicRequestEscortTitle)
            : formatMessage(messages.requestEscortTitle)}
        </RequestEscortTitle>
        <RequestEscortMessage>
          {isPanicMode
            ? formatMessage(messages.panicRequestEscortMessage)
            : formatMessage(messages.requestEscortMessage)}
        </RequestEscortMessage>
      </>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container isKeyboard={isKeyboardShow}>
          <Header
            title={
              typeSafetyTimer
                ? formatMessage(messages.safetyTitle)
                : formatMessage(messages.checklistTitle)
            }
          />
          <InfoRow>
            {!typeSafetyTimer && (
              <SubHeader>
                {formatMessage(messages.subheader, {
                  procedure: procedure?.name,
                })}
              </SubHeader>
            )}
          </InfoRow>
          {error && (
            <ErrorRow>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </ErrorRow>
          )}
          {requestingEscort ? (
            expiredTimerRequestingEscort()
          ) : (
            <>
              {/* {console.log("timer------------------>",timer)} */}
              {/* {console.log("timer------------------>",timer)}
               */}
              {/* {console.log("timerIsRunning------------------>",timerIsRunning)}
               {console.log("countdownIsActive------------------>",countdownIsActive)} */}
              <CountDownClock
                countdown={timer}
                running={timerIsRunning && countdownIsActive}
                onPressed={onClockPress}
                onFinish={onCountdownExpired}
                onCountdownWarning={onWarning}
                warningTriggered={isWarningActive}
              />
              {countdownIsActive ? activeCountdown() : preCountdown()}
              {/* {displaySetTimerModal ? <SetTimerModal /> : <></>} */}
              {Platform.OS == 'android' ?
                isBatteryUsageDisable == 2 ? displaySetTimerModal ? <SetTimerModal /> : <></> : <></> :
                displaySetTimerModal ? <SetTimerModal /> : <></>}
            </>
          )}
        </Container>
        <CallModal
          isVisible={shouldShowCallModal}
          hideModal={hideCallModalAction}
          organization={organization}
        />
        <SafeModal
          isVisible={shouldShowSafeModal}
          hideModal={onHideSafeModal}
          onContinue={handleSafeModalContinue}
          requestingImSafe={requestingImSafe}
          title={formatMessage(messages.safeModalTitle)}
          info={formatMessage(messages.safeModalInfo)}
          placeholder={formatMessage(messages.safeModalCommentPlaceholder)}
          alert={formatMessage(messages.safeModalAlert)}
          cancel={formatMessage(messages.safeModalCancel)}
          confirm={formatMessage(messages.safeModalContinue)}
          inputRequired
        />
      </SafeAreaContainer>
      {isPanicMode && <PanicOverlay />}
    </>
  );
};

export default withNavigationFocus(EscortScreen);

