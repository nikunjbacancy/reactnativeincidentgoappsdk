"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _actions = require("../../../../containers/app/actions");
var _selectors = require("../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _device = require("../../../../utils/device");
var _hooks = require("../../../../utils/hooks");
var _location = require("../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _actions2 = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors2 = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WarningScreen = ({
  navigation: {
    replace,
    navigate
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const incidentRecordData = (0, _hooks.useSelector)((0, _selectors.makeSelectIncidentEscortData)());
  const incidentPassiveData = (0, _hooks.useSelector)((0, _selectors.makeSelectPassiveEscortData)());
  const showPanicInfo = (0, _hooks.useSelector)((0, _selectors2.makeSelectShowPanicInfo)());
  const setLocation = (0, _hooks.useAction)(_actions.UpdateLocationData);
  const setShowPanicInfo = (0, _hooks.useAction)(_actions2.makeSetShowPanicInfo);
  const startDuressRequest = (0, _hooks.useAction)(_actions2.triggerDuressRequest);
  var [isLogout, setLogout] = (0, _react.useState)(false);

  // var isLogout = false

  (0, _react.useEffect)(() => {
    if (incidentRecordData) {
      _navigation.default.navigate(_screens.default.Home.Escort.Record, incidentRecordData);
    } else if (incidentPassiveData) {
      _navigation.default.navigate(_screens.default.Home.Escort.Countdown, {
        id: incidentPassiveData.id,
        procedure: incidentPassiveData.procedure,
        isSafetyTimer: incidentPassiveData.isSafetyTimer
      });
    }

    //check logout param
    _asyncStorage.default.getItem("isLogout").then(async value => {
      let val = value == null ? false : true;
      setLogout(val);
    });
  }, []);
  const nextScreen = (0, _hooks.useSelector)((0, _selectors.makeSelectNextOnboardingScreen)());

  // const goToNextScreen = useCallback(async () => {

  //   const goTo = nextScreen === Screens.Home.Index ? navigate : replace;

  //   // if (isAndroid && nextScreen === Screens.Home.Index) {
  //   if (isAndroid && (nextScreen === Screens.Onboarding.PermissionLocation || nextScreen === Screens.Home.Index)) {

  //     const isActive = await checkGPSStatus();
  //     const isEnabled = await checkBluetoothStatus();
  //     if (isEnabled) {
  //       AsyncStorage.getItem(BEACON_CONNECTED).then(async (value) => {
  //         if (JSON.parse(value) != true) {
  //           const beaconInfo = await setUpBeaconInfo();
  //           beaconRegistration(beaconInfo);
  //         }
  //       });
  //     }
  //     //("-isActive->",isActive)
  //     if (!isActive) return goTo(Screens.Onboarding.ActivateGPS);
  //     // return goTo(Screens.Home.Index);
  //     return NavigatorService.navigate(Screens.Home.Index);
  //   }
  //   goTo(nextScreen);
  // }, []);

  const goToNextScreen = (0, _react.useCallback)(async () => {
    // //("next screen is --->", nextScreen)

    const goTo = nextScreen === _screens.default.Home.Index ? navigate : replace;

    // if (isAndroid && nextScreen === Screens.Home.Index) {
    if (_device.isAndroid && (nextScreen === _screens.default.Onboarding.PermissionLocation || nextScreen === _screens.default.Home.Index)) {
      const isActive = await (0, _location.checkGPSStatus)();
      // const isEnabled = await checkBluetoothStatus();
      // if (isEnabled) {
      //   AsyncStorage.getItem(BEACON_CONNECTED).then(async (value) => {
      //     if (JSON.parse(value) != true) {
      //       const beaconInfo = await setUpBeaconInfo();
      //       beaconRegistration(beaconInfo);
      //     }
      //   });
      // }
      if (!isActive) return goTo(_screens.default.Onboarding.ActivateGPS);
      _asyncStorage.default.getItem("isLogout").then(async value => {
        if (value != null) {
          replace(_screens.default.Onboarding.SignIn);
        } else {
          _navigation.default.navigate(_screens.default.Home.Index);
        }
      });
    } else {
      //check logout param
      _asyncStorage.default.getItem("isLogout").then(async value => {
        //("value--->", value)
        if (value != null) {
          replace(_screens.default.Onboarding.SignIn);
        } else {
          goTo(nextScreen);
        }
      });
    }
    return null;
  }, []);

  // //here check token is Valid or not, based on validation next screen decide
  // const checkBeforeMoveToNexScreen = () => {

  //   // if (isValid) {
  //   //   goToNextScreen()
  //   // }
  //   // else {
  //   //   goToNextScreen()
  //   // }

  //   goToNextScreen()
  // }

  const call911 = () => (0, _device.makeCall)('911');
  const triggerDuress = (0, _react.useCallback)(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);
  const loggedIn = () => {
    if (isLogout) {
      return false;
    } else {
      return !(nextScreen in _screens.default.Onboarding) && nextScreen === 'Home';
    }
  };
  return incidentRecordData ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "light-content",
    backgroundColor: "transparent"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_styles.SafeView, null, /*#__PURE__*/_react.default.createElement(_styles.ScrollWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWhiteWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.WarningRow, null, /*#__PURE__*/_react.default.createElement(_styles.WarningText, null, formatMessage(_messages.default.message)), /*#__PURE__*/_react.default.createElement(_styles.WarningButton, {
    onPress: call911,
    text: formatMessage(_messages.default.call911)
  })), loggedIn() && /*#__PURE__*/_react.default.createElement(_styles.WarningRow, null, /*#__PURE__*/_react.default.createElement(_styles.DuressButton, {
    isPanicMode: false,
    onPress: setShowPanicInfo,
    onFill: triggerDuress,
    text: formatMessage(_messages.default.duress)
  })), /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_styles.WarningRow, null, showPanicInfo && /*#__PURE__*/_react.default.createElement(_styles.DuressInfo, null))), /*#__PURE__*/_react.default.createElement(_styles.LocationText, null, formatMessage(_messages.default.locationMessage)), /*#__PURE__*/_react.default.createElement(_styles.ContinueButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
    onPress: goToNextScreen,
    text: formatMessage(_messages.default.button)
  })))));
};
var _default = exports.default = WarningScreen;
//# sourceMappingURL=index.js.map