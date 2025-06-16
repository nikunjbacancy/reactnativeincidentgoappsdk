"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const showOpenConfigMessage = message => new Promise(resolve => {
  _reactNativeRootToast.default.show(message, {
    position: _reactNativeRootToast.default.positions.BOTTOM - 100,
    duration: 2000,
    onHidden: () => resolve()
  });
});
var _default = exports.default = showOpenConfigMessage;
//# sourceMappingURL=showOpenConfigMessage.js.map