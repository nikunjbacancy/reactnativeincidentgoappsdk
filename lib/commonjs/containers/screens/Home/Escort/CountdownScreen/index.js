"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _actions = require("../../../../../containers/app/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _incidentCodeCore = require("incident-code-core");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeKeepAwake = _interopRequireDefault(require("react-native-keep-awake"));
var _reactNavigation = require("react-navigation");
var _hooks = require("../../../../../utils/hooks");
var _backgroundGeolocation = require("../../../../../utils/location/backgroundGeolocation");
var _reactNativeBatteryOptimizationCheck = require("react-native-battery-optimization-check");
var _location = require("../../../../../utils/location");
var _actions2 = require("./actions");
var _CountdownClock = _interopRequireDefault(require("./CountdownClock"));
var _messages = _interopRequireDefault(require("./messages"));
var _ProcedureChecklist = _interopRequireDefault(require("./ProcedureChecklist"));
var _selectors = require("./selectors");
var _SetTimerModal = _interopRequireDefault(require("./SetTimerModal"));
var _styles = require("./styles");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable simple-import-sort/sort */

// const { BatteryOptimizationModule } from ReactNative.NativeModules;

const EscortScreen = ({
  navigation,
  isFocused
}) => {
  const passedProcedure = navigation.getParam('procedure');
  const organization = navigation.getParam('organization');
  const passedIncidentId = navigation.getParam('id');
  const isSafetyTimer = navigation.getParam('isSafetyTimer');
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [isKeyboardShow, setIsKeyboardShow] = (0, _react.useState)(false);
  const [timerIsRunning, setTimerIsRunning] = (0, _react.useState)(false);
  const [procedureParam, setProcedureParam] = (0, _react.useState)(passedProcedure);
  const [incidentId, setIncidentId] = (0, _react.useState)(passedIncidentId);

  // const [isCheckedBatteryUsage, setCheckBatteryUsage] = useState(false);
  const [isBatteryUsageDisable, setBatteryUsageDisable] = (0, _react.useState)(1);
  const incident = (0, _hooks.useSelector)((0, _selectors.makeSelectIncident)());
  const procedure = (0, _hooks.useSelector)((0, _selectors.makeSelectProcedure)());
  const actions = (0, _hooks.useSelector)((0, _selectors.makeSelectProcedureActions)());
  const timer = (0, _hooks.useSelector)((0, _selectors.makeSelectProcedureTimer)());
  // const timer = 60;
  const isLoading = (0, _hooks.useSelector)((0, _selectors.makeSelectIsLoading)());
  const enableStart = (0, _hooks.useSelector)((0, _selectors.makeSelectEnableStartButton)());
  const displaySetTimerModal = (0, _hooks.useSelector)((0, _selectors.makeSelectDisplaySetTimerModal)());
  const isUserDefined = (0, _hooks.useSelector)((0, _selectors.makeSelectIsUserDefinedTimer)());
  const actionsComplete = (0, _hooks.useSelector)((0, _selectors.makeSelectFinalActionCompleted)());
  const shouldShowCallModal = (0, _hooks.useSelector)((0, _selectors.makeSelectShouldShowCallModal)());
  const shouldShowSafeModal = (0, _hooks.useSelector)((0, _selectors.makeSelectShouldShowSafeModal)());
  const isPanicMode = (0, _hooks.useSelector)((0, _selectors.makeSelectIsPanicMode)());
  const requestingImSafe = (0, _hooks.useSelector)((0, _selectors.makeSelectRequestingImSafe)());
  const shouldShowPanicInfo = (0, _hooks.useSelector)((0, _selectors.makeSelectShouldShowPanicInfo)());
  const isWarningActive = (0, _hooks.useSelector)((0, _selectors.makeSelectIsWarningActive)());
  const requestingEscort = (0, _hooks.useSelector)((0, _selectors.makeSelectIsRequestingEscort)());
  const countdownIsActive = (0, _hooks.useSelector)((0, _selectors.makeSelectCountdownIsActive)());
  const error = (0, _hooks.useSelector)((0, _selectors.makeSelectError)());
  const errorMessage = (0, _hooks.useSelector)((0, _selectors.makeSelectErrorMessage)());
  const typeSafetyTimer = (0, _hooks.useSelector)((0, _selectors.makeSelectSafetyTimer)());
  const getProcedureAction = (0, _hooks.useAction)(_actions2.getProcedureRequest);
  const showModalAction = (0, _hooks.useAction)(_actions2.showSetTimerModal);
  const completeProcedureActionAction = (0, _hooks.useAction)(_actions2.completeProcedureAction);
  const showCallModalAction = (0, _hooks.useAction)(_actions2.showCallModal);
  const hideCallModalAction = (0, _hooks.useAction)(_actions2.hideCallModal);
  const showSafeModalAction = (0, _hooks.useAction)(_actions2.showSafeModal);
  const hideSafeModalAction = (0, _hooks.useAction)(_actions2.hideSafeModal);
  const showPanicInfoAction = (0, _hooks.useAction)(_actions2.showPanicInfo);
  const enterPanicModeAction = (0, _hooks.useAction)(_actions2.enterPanicMode);
  const imSafeAction = (0, _hooks.useAction)(_actions2.imSafeRequest);
  const triggerCountdownWarning = (0, _hooks.useAction)(_actions2.startCountdownWarning);
  const clearCountdownWarning = (0, _hooks.useAction)(_actions2.cancelCountdownWarning);
  const startPassiveEscort = (0, _hooks.useAction)(_actions2.startPassiveEscortRequest);
  const requestVirtualEscort = (0, _hooks.useAction)(_actions2.startVirtualEscortRequest);
  const clearSafe = (0, _hooks.useAction)(_actions2.clearAreYouSafe);
  const logAction = (0, _hooks.useAction)(_actions2.logEscortAction);
  const errorCleanup = (0, _hooks.useAction)(_actions2.clearEscortErrorAction);
  const setLocation = (0, _hooks.useAction)(_actions.UpdateLocationData);
  const clearLocation = (0, _hooks.useAction)(_actions.ClearLocationData);
  const clearSelectedProcedure = (0, _hooks.useAction)(_actions2.clearProcedure);
  const setSafetyTimerAction = (0, _hooks.useAction)(_actions2.setSafetyTimer);
  const panicModeRef = (0, _react.useRef)(false);

  // console.log("passedIncidentId===>", passedIncidentId)

  (0, _react.useEffect)(function setIncidentToLocalState() {
    // console.log("passedIncidentId->", passedIncidentId)
    setIncidentId(passedIncidentId);
  }, [passedIncidentId]);
  (0, _react.useEffect)(function retrieveProcedure() {
    if ((!procedure || procedureParam && (procedureParam === null || procedureParam === void 0 ? void 0 : procedureParam.id) !== (procedure === null || procedure === void 0 ? void 0 : procedure.id)) && !isSafetyTimer
    // This gets triggered before state typeSafetyTimer gets set
    ) {
      getProcedureAction(procedureParam === null || procedureParam === void 0 ? void 0 : procedureParam.id);
    }
  }, [isFocused]);
  (0, _react.useEffect)(function autoStartCountdown() {
    if (isFocused && incidentId && procedure) {
      console.log("countdown start");
      startCountdown();
    }
  }, [isFocused, procedure]);
  (0, _react.useEffect)(function finishCountdown() {
    if (actionsComplete) {
      completeCountdown();
    }
  }, [actionsComplete]);
  const completeCountdown = () => {
    console.log("complete count down");
    setTimerIsRunning(false);
    if (isWarningActive) {
      clearCountdownWarning();
    }
    showSafeModalAction();
    _reactNativeKeepAwake.default.deactivate();
  };
  (0, _react.useEffect)(function safetyTimer() {
    if (isSafetyTimer) {
      setSafetyTimerAction(organization);
    }
    // console.log("-showModalAction--->",showModalAction)
  }, [isSafetyTimer]);
  (0, _react.useEffect)(function registerKeyboardListener() {
    const keyboarDidShowListener = _reactNative.Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true));
    const keyboarDidHideListener = _reactNative.Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false));
    // // startBackgroundTask()
    return function componentWillUnmount() {
      keyboarDidShowListener.remove();
      keyboarDidHideListener.remove();
      _reactNativeKeepAwake.default.deactivate();
    };
  }, []);
  (0, _react.useEffect)(function startGeolocation() {
    if (incident !== null && incident !== void 0 && incident.id && setLocation) {
      (0, _backgroundGeolocation.startBackgroundGeolocationToEscort)(incident.id, setLocation);
    }
  }, [incident, setLocation]);
  (0, _react.useEffect)(function checkBattery() {
    checkBatteryOptimizationAndroid();
  }, [isFocused]);
  (0, _react.useEffect)(() => {
    _reactNative.AppState.addEventListener('change', handleChange);
    return () => {
      _reactNative.AppState.removeEventListener('change', handleChange);
    };
  }, []);
  const handleChange = newState => {
    // console.log("-newState->>>>>>", newState)
    if (newState === "active") {
      checkBatteryOptimizationAndroid();
    }
  };

  // check battery optimization 
  const checkBatteryOptimizationAndroid = () => {
    if (_reactNative.Platform.OS == 'android') {
      (0, _reactNativeBatteryOptimizationCheck.BatteryOptEnabled)().then(isEnabled => {
        console.log("checkBattery==>", isEnabled);
        if (isEnabled) {
          // RNDisableBatteryOptimizationsAndroid.openBatteryModal();
          console.log("Is battery optimization enabled==-->", isEnabled);
          // BatteryOptimizationModule.openBatteryModal();
          setBatteryUsageDisable(1);
          _reactNative.Alert.alert('Incident Go', 'To ensure uninterrupted safety timer capabilities, please ALLOW IncidentGO unrestricted battery usage. Once the safety timer is complete IncidentGO will use minimal battery.', [{
            text: 'Cancel',
            onPress: () => console.log("back"),
            style: 'cancel'
          }, {
            text: 'OK',
            onPress: () => {
              setBatteryUsageDisable(2);
              (0, _reactNativeBatteryOptimizationCheck.RequestDisableOptimization)();
            }
          }]);
        } else {
          setBatteryUsageDisable(2);
        }
      });
    }
  };
  const handleEnterPanicModeAction = (0, _react.useCallback)(() => {
    setTimerIsRunning(false);
    enterPanicModeAction(organization);
    panicModeRef.current = true;
  }, [enterPanicModeAction, organization]);
  const handleSafeModalContinue = (0, _react.useCallback)(comment => {
    imSafeAction({
      comment
    });
    setProcedureParam(undefined);
    setIncidentId(undefined);
    setTimerIsRunning(false);
    (0, _backgroundGeolocation.stopBackgroundGeolocation)(clearLocation);
    if (isWarningActive) {
      clearCountdownWarning();
    }
    if (error) {
      errorCleanup();
    }
  }, []);
  const onHideSafeModal = (0, _react.useCallback)(() => {
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
  (0, _hooks.useBackButton)(onBack);
  // button press back
  const goBack = async () => {
    const blockNavigate = onBack();
    if (!blockNavigate) {
      if (typeSafetyTimer) {
        navigation.navigate(_screens.default.Home.Escort.EscortType);
      }
      navigation.goBack();
    }
  };
  const backToPrevious = () => {
    navigation.goBack();
    setTimeout(() => {
      navigation.goBack();
    }, 1000);
  };
  const onClockPress = () => {
    console.log("onClockPress", isUserDefined);
    console.log("!timerIsRunning", !timerIsRunning);
    if (isUserDefined && !timerIsRunning) {
      console.log("model open");
      showModalAction();
    }
  };

  // countdown expire warning
  const onWarning = () => {
    // console.log("on warning")
    triggerCountdownWarning();
  };
  const startCountdown = () => {
    console.log("startCountdown");
    console.log("startPassiveEscort Incident ==>", incidentId);
    startPassiveEscort({
      organization,
      id: incidentId,
      safetyTimer: typeSafetyTimer
    });
    (0, _backgroundGeolocation.startBackgroundGeolocationToEscort)(incidentId, setLocation);
    setTimerIsRunning(true);
    _reactNativeKeepAwake.default.activate();
  };
  const onCountdownExpired = async () => {
    // console.log("-onCountdownExpired---->")
    setTimerIsRunning(false);
    // console.log("-timer false---->")
    const geoPosition = await (0, _location.getCachedFinePosition)();
    // console.log("-geo postion---->", geoPosition)
    // console.log("-organizatio---->", JSON.stringify(organization))
    if (geoPosition) {
      requestVirtualEscort(organization);
    } else {
      _navigation.default.navigate(_screens.default.Home.Escort.EscortType);
    }
  };
  const onActionChecked = (id, name, complete) => {
    completeProcedureActionAction(id);
    logAction({
      id: incident === null || incident === void 0 ? void 0 : incident.id,
      action: _incidentCodeCore.PassiveEscortAction.ProcedureAction,
      actionName: name + (complete ? ' unchecked' : ' finished')
    });
  };
  if (isLoading) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  const preCountdown = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(typeSafetyTimer ? _messages.default.safetyPreCountdown : _messages.default.preCountdown))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginTop: 'auto'
      }
    }), /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
      disabled: !enableStart,
      text: formatMessage(_messages.default.timerStart),
      onPress: startCountdown,
      onCancel: goBack
    })));
  };
  const activeCountdown = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeSafetyTimer ? /*#__PURE__*/_react.default.createElement(_styles.SafetyButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.SafetyButton, {
      text: formatMessage(_messages.default.safetyBtn),
      onPress: completeCountdown
    })) : /*#__PURE__*/_react.default.createElement(_ProcedureChecklist.default, {
      onActionChecked: onActionChecked,
      actions: actions
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginTop: 'auto'
      }
    }), shouldShowPanicInfo && /*#__PURE__*/_react.default.createElement(_styles.PressPanicInfo, null), /*#__PURE__*/_react.default.createElement(_styles.BottomControls, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneButton, {
      onPress: showCallModalAction,
      image: _assets.images.icPhoneCall()
    }), /*#__PURE__*/_react.default.createElement(_components.PanicButton, {
      isPanicMode: isPanicMode,
      onPress: showPanicInfoAction,
      onFill: handleEnterPanicModeAction,
      text: formatMessage(_messages.default.panic)
    })));
  };
  const expiredTimerRequestingEscort = () => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.RequestEscortLoading, null), /*#__PURE__*/_react.default.createElement(_styles.RequestEscortTitle, null, isPanicMode ? formatMessage(_messages.default.panicRequestEscortTitle) : formatMessage(_messages.default.requestEscortTitle)), /*#__PURE__*/_react.default.createElement(_styles.RequestEscortMessage, null, isPanicMode ? formatMessage(_messages.default.panicRequestEscortMessage) : formatMessage(_messages.default.requestEscortMessage)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isKeyboard: isKeyboardShow
  }, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: typeSafetyTimer ? formatMessage(_messages.default.safetyTitle) : formatMessage(_messages.default.checklistTitle)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, !typeSafetyTimer && /*#__PURE__*/_react.default.createElement(_styles.SubHeader, null, formatMessage(_messages.default.subheader, {
    procedure: procedure === null || procedure === void 0 ? void 0 : procedure.name
  }))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)), requestingEscort ? expiredTimerRequestingEscort() : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_CountdownClock.default, {
    countdown: timer,
    running: timerIsRunning && countdownIsActive,
    onPressed: onClockPress,
    onFinish: onCountdownExpired,
    onCountdownWarning: onWarning,
    warningTriggered: isWarningActive
  }), countdownIsActive ? activeCountdown() : preCountdown(), _reactNative.Platform.OS == 'android' ? isBatteryUsageDisable == 2 ? displaySetTimerModal ? /*#__PURE__*/_react.default.createElement(_SetTimerModal.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : displaySetTimerModal ? /*#__PURE__*/_react.default.createElement(_SetTimerModal.default, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null))), /*#__PURE__*/_react.default.createElement(_components.CallModal, {
    isVisible: shouldShowCallModal,
    hideModal: hideCallModalAction,
    organization: organization
  }), /*#__PURE__*/_react.default.createElement(_components.SafeModal, {
    isVisible: shouldShowSafeModal,
    hideModal: onHideSafeModal,
    onContinue: handleSafeModalContinue,
    requestingImSafe: requestingImSafe,
    title: formatMessage(_messages.default.safeModalTitle),
    info: formatMessage(_messages.default.safeModalInfo),
    placeholder: formatMessage(_messages.default.safeModalCommentPlaceholder),
    alert: formatMessage(_messages.default.safeModalAlert),
    cancel: formatMessage(_messages.default.safeModalCancel),
    confirm: formatMessage(_messages.default.safeModalContinue),
    inputRequired: true
  })), isPanicMode && /*#__PURE__*/_react.default.createElement(_styles.PanicOverlay, null));
};
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(EscortScreen);
//# sourceMappingURL=index.js.map