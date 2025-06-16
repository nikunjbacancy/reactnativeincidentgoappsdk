"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _analytics = _interopRequireDefault(require("@react-native-firebase/analytics"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const logScreen = () => {
  // Set & override the MainActivity screen name
  (0, _analytics.default)().logAppOpen();
};
var _default = exports.default = logScreen;
//# sourceMappingURL=logScreen.js.map