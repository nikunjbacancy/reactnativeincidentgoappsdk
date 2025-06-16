"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _device = require("../../utils/device");
const {
  IOS,
  ANDROID
} = _reactNativePermissions.PERMISSIONS;
const getLocationActionPermissions = () => ({
  bestLocation: _device.isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_FINE_LOCATION,
  lightLocation: _device.isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_BACKGROUND_LOCATION,
  physical: _device.isIos ? IOS.MOTION : ANDROID.ACTIVITY_RECOGNITION
});
var _default = exports.default = getLocationActionPermissions;
//# sourceMappingURL=getLocationPermissions.js.map