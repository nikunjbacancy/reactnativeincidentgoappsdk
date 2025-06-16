"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _analytics = _interopRequireDefault(require("@react-native-firebase/analytics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const logEvent = (event, params) => {
  (0, _analytics.default)().logEvent(event, params);
};
var _default = exports.default = logEvent;
//# sourceMappingURL=logEvent.js.map