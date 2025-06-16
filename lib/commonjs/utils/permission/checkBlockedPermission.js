"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _device = require("../../utils/device");
var _getPermissions = _interopRequireDefault(require("./getPermissions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getLocationBlockedStatus = (bestLocation, lightLocation) => _device.isIos ? bestLocation === _reactNativePermissions.RESULTS.BLOCKED && lightLocation === _reactNativePermissions.RESULTS.BLOCKED : bestLocation === _reactNativePermissions.RESULTS.BLOCKED || lightLocation === _reactNativePermissions.RESULTS.BLOCKED;
const checkBlockedPermission = async () => {
  const permissions = (0, _getPermissions.default)();
  return Promise.all([(0, _reactNativePermissions.check)(permissions.camera), (0, _reactNativePermissions.check)(permissions.microphone), (0, _reactNativePermissions.check)(permissions.bestLocation), (0, _reactNativePermissions.check)(permissions.lightLocation), (0, _reactNativePermissions.check)(permissions.physical), (0, _reactNativePermissions.check)(permissions.galleryWrite)]).then(([camera, microphone, bestLocation, lightLocation, physical]) => {
    if (camera === _reactNativePermissions.RESULTS.BLOCKED || microphone === _reactNativePermissions.RESULTS.BLOCKED || physical === _reactNativePermissions.RESULTS.BLOCKED || getLocationBlockedStatus(bestLocation, lightLocation)) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
};
var _default = exports.default = checkBlockedPermission;
//# sourceMappingURL=checkBlockedPermission.js.map