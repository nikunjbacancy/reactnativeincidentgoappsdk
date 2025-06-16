"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _location = require("../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ActivateGPSScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [gpsEnabled, setGpsEnabled] = (0, _react.useState)(false);
  const goToNextScreen = (0, _react.useCallback)(async () => {
    // const isEnabled = await checkBluetoothStatus();
    // // //("checkBluetoothStatus -->",isEnabled)
    // // //("nextScreen -->",nextScreen)
    // if (isEnabled) {
    //   const beaconInfo = await setUpBeaconInfo();
    //   beaconRegistration(beaconInfo);
    // }
    // navigate(nextScreen);
    //("navigate to home screen")
    _navigation.default.navigate(_screens.default.Home.Index);
  }, []);
  const handleActivateGPS = (0, _react.useCallback)(async () => {
    const isEnabled = await (0, _location.activateGPS)(formatMessage(_messages.default.gpsEnabled), formatMessage(_messages.default.gpsDisabled));
    // //("isEnabled=>",isEnabled)
    setGpsEnabled(isEnabled);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_styles.ActivateGPSRow, null, /*#__PURE__*/_react.default.createElement(_styles.ActivateGPSButton, {
    onPress: handleActivateGPS,
    text: formatMessage(_messages.default.activateGPS)
  })), /*#__PURE__*/_react.default.createElement(_styles.ContinueButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
    disabled: !gpsEnabled,
    onPress: goToNextScreen,
    text: formatMessage(_messages.default.continue)
  }))));
};
var _default = exports.default = ActivateGPSScreen;
//# sourceMappingURL=index.js.map