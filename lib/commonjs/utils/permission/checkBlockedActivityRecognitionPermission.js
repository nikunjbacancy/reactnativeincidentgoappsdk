"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _ = require(".");
var _device = require("../device");
const getLocationBlockedStatus = (bestLocation, lightLocation) => _device.isIos ? bestLocation === _reactNativePermissions.RESULTS.BLOCKED && lightLocation === _reactNativePermissions.RESULTS.BLOCKED : bestLocation === _reactNativePermissions.RESULTS.BLOCKED || lightLocation === _reactNativePermissions.RESULTS.BLOCKED;
const checkBlockedLocationActivityPermission = async () => {
  const permissions = (0, _.getLocationActionPermissions)();
  return Promise.all([(0, _reactNativePermissions.check)(permissions.bestLocation), (0, _reactNativePermissions.check)(permissions.lightLocation), (0, _reactNativePermissions.check)(permissions.physical)]).then(([bestLocation, lightLocation, physical]) => {
    if (physical === _reactNativePermissions.RESULTS.BLOCKED || getLocationBlockedStatus(bestLocation, lightLocation)) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
};
var _default = exports.default = checkBlockedLocationActivityPermission;
//# sourceMappingURL=checkBlockedActivityRecognitionPermission.js.map