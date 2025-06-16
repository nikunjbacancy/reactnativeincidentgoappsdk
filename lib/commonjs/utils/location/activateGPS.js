"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeAndroidLocationServicesDialogBox = _interopRequireDefault(require("react-native-android-location-services-dialog-box"));
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _device = require("../device");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// @ts-ignore

const activateGPS = async (successMessage, errorMessage) => {
  if (_device.isIos) return false;
  try {
    await _reactNativeAndroidLocationServicesDialogBox.default.checkLocationServicesIsEnabled({
      enableHighAccuracy: true,
      showDialog: false,
      openLocationServices: true
    });
    _reactNativeRootToast.default.show(successMessage, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    return true;
  } catch (error) {
    //("activate gps error===>",error)
    _reactNativeRootToast.default.show(errorMessage, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    return false;
  }
};
var _default = exports.default = activateGPS;
//# sourceMappingURL=activateGPS.js.map