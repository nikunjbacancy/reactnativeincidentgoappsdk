"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativePermissions = require("react-native-permissions");
var _getPermissions = _interopRequireDefault(require("./getPermissions"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const requestCameraPermissions = async () => {
  const permissions = (0, _getPermissions.default)();
  //("requestCameraPermissions==>",permissions)
  const camera = await (0, _reactNativePermissions.request)(permissions.camera);
  const microphone = await (0, _reactNativePermissions.request)(permissions.microphone);
  if (camera === _reactNativePermissions.RESULTS.GRANTED && microphone === _reactNativePermissions.RESULTS.GRANTED) {
    return Promise.resolve();
  }
  return Promise.reject();
};
var _default = exports.default = requestCameraPermissions;
//# sourceMappingURL=requestCameraPermissions.js.map