"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _reactNativeDeviceInfo = _interopRequireDefault(require("react-native-device-info"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getInfo = () => {
  return {
    system: _reactNative.Platform.OS,
    brand: _reactNativeDeviceInfo.default.getBrand(),
    model: _reactNativeDeviceInfo.default.getDeviceId(),
    version: _reactNative.Platform.Version.toString()
  };
};
var _default = exports.default = getInfo;
//# sourceMappingURL=getInfo.js.map