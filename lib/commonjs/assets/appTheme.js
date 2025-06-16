"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
var _device = require("../utils/device");
var _colors = _interopRequireDefault(require("./colors"));
var _fonts = _interopRequireDefault(require("./fonts"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const hasNotch = _reactNativeDeviceInfo.default.hasNotch();
const appTheme = {
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
  device: {
    isIos: _device.isIos,
    isAndroid: _device.isAndroid,
    hasNotch
  }
};

// export type Theme = typeof theme;
var _default = exports.default = appTheme;
//# sourceMappingURL=appTheme.js.map