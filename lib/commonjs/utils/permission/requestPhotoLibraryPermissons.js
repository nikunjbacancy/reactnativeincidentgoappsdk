"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _getPermissions = _interopRequireDefault(require("./getPermissions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const requestPhotoLibraryPermissions = async () => {
  const permissions = (0, _getPermissions.default)();
  //("requestPhotoLibraryPermissions==>",permissions)
  const gallery = await (0, _reactNativePermissions.request)(permissions.galleryWrite);
  //("gallery==>",gallery)
  if (gallery === _reactNativePermissions.RESULTS.GRANTED) {
    return Promise.resolve(_reactNativePermissions.RESULTS.GRANTED);
  }
  return Promise.reject(_reactNativePermissions.RESULTS.BLOCKED);
};
var _default = exports.default = requestPhotoLibraryPermissions;
//# sourceMappingURL=requestPhotoLibraryPermissons.js.map