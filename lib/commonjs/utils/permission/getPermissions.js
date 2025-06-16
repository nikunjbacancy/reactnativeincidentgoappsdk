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
const getPermissions = () => ({
  camera: _device.isIos ? IOS.CAMERA : ANDROID.CAMERA,
  microphone: _device.isIos ? IOS.MICROPHONE : ANDROID.RECORD_AUDIO,
  bestLocation: _device.isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_FINE_LOCATION,
  lightLocation: _device.isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_BACKGROUND_LOCATION,
  physical: _device.isIos ? IOS.MOTION : ANDROID.ACTIVITY_RECOGNITION,
  galleryWrite: _device.isIos ? IOS.PHOTO_LIBRARY : ANDROID.WRITE_EXTERNAL_STORAGE,
  postNotification: ANDROID.POST_NOTIFICATIONS,
  androidMediaPermission: ANDROID.READ_MEDIA_IMAGES
});
var _default = exports.default = getPermissions;
//# sourceMappingURL=getPermissions.js.map