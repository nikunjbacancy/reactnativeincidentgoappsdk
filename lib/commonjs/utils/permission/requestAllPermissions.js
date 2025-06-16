"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _checkBlockedPermission = _interopRequireDefault(require("./checkBlockedPermission"));
var _getPermissions = _interopRequireDefault(require("./getPermissions"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const requestAllPermissions = async () => {
  const permissions = (0, _getPermissions.default)();
  await (0, _reactNativePermissions.request)(permissions.camera);
  await (0, _reactNativePermissions.request)(permissions.microphone);
  await (0, _reactNativePermissions.request)(permissions.physical);
  await (0, _reactNativePermissions.request)(permissions.galleryWrite);
  await (0, _reactNativePermissions.request)(permissions.androidMediaPermission);
  await (0, _reactNativePermissions.request)(permissions.postNotification);
  if (_reactNative.Platform.OS === 'ios') {
    await (0, _reactNativePermissions.request)(permissions.bestLocation);
    await (0, _reactNativePermissions.request)(permissions.lightLocation);
  }
  return (0, _checkBlockedPermission.default)();
};
var _default = exports.default = requestAllPermissions;
//# sourceMappingURL=requestAllPermissions.js.map