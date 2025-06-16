"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
var _isAndroid = require("../utils/device/isAndroid");
var _isIos = _interopRequireDefault(require("../utils/device/isIos"));
var _colors = _interopRequireDefault(require("./colors"));
var _fonts = _interopRequireDefault(require("./fonts"));
var _sdkConfigs = require("../sdkConfigs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { isAndroid, isIos } from '../utils/device';

// import fonts from './fonts';

const hasNotch = _reactNativeDeviceInfo.default.hasNotch();
const theme = {
  text: {
    color: _colors.default.primary,
    fontSize: _fonts.default.normalSize,
    fontFamily: _fonts.default.defaultFamily
  },
  highlightText: {
    color: _colors.default.highlight,
    fontSize: _fonts.default.normalSize,
    fontFamily: _fonts.default.defaultFamily
  },
  lightText: {
    color: _colors.default.light,
    fontSize: _fonts.default.normalSize,
    fontFamily: _fonts.default.defaultFamily
  },
  greyText: {
    color: _colors.default.light,
    fontSize: _fonts.default.normalSize,
    fontFamily: _fonts.default.defaultFamily
  },
  fonts: _fonts.default,
  colors: _colors.default,
  sdkBackgroundColor: _sdkConfigs.sdkConfigs.colors.backgroundColor == '' ? _colors.default.white : _sdkConfigs.sdkConfigs.colors.backgroundColor,
  sdkServiceBackgroundColor: _sdkConfigs.sdkConfigs.colors.homeServiceBackgrondColor == '' ? _colors.default.lightGrey : _sdkConfigs.sdkConfigs.colors.homeServiceBackgrondColor,
  device: {
    isIos: _isIos.default,
    isAndroid: _isAndroid.isAndroid,
    hasNotch
  }
};
var _default = exports.default = theme;
//# sourceMappingURL=theme.js.map