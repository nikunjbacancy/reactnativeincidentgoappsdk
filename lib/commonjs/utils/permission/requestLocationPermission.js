"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _ = require(".");
const requestLocationPermissions = async () => {
  const permissions = (0, _.getLocationActionPermissions)();
  await (0, _reactNativePermissions.request)(permissions.bestLocation);
  await (0, _reactNativePermissions.request)(permissions.lightLocation);
  await (0, _reactNativePermissions.request)(permissions.physical);
  return (0, _.checkBlockedActivityRecognitionPermission)();
};
var _default = exports.default = requestLocationPermissions;
//# sourceMappingURL=requestLocationPermission.js.map