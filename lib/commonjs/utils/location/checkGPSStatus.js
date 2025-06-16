"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeAndroidLocationServicesDialogBox = _interopRequireDefault(require("react-native-android-location-services-dialog-box"));
var _device = require("../device");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const isGPSActive = async () => {
  if (_device.isIos) return;
  try {
    await _reactNativeAndroidLocationServicesDialogBox.default.checkLocationServicesIsEnabled({
      enableHighAccuracy: true,
      showDialog: false,
      openLocationServices: false
    });
    return true;
  } catch (error) {
    return false;
  }
};
var _default = exports.default = isGPSActive;
//# sourceMappingURL=checkGPSStatus.js.map