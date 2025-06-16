"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _analytics = _interopRequireDefault(require("@react-native-firebase/analytics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const setUserId = async id => {
  await (0, _analytics.default)().setUserId(id);
};
var _default = exports.default = setUserId;
//# sourceMappingURL=setUserId.js.map