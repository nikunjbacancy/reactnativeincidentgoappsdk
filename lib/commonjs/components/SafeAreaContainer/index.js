"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNavigation = require("react-navigation");
var _device = require("../../utils/device");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SafeAreaContainer = ({
  style,
  keyboardStyle,
  children
}) => /*#__PURE__*/_react.default.createElement(_reactNavigation.SafeAreaView, {
  style: style
}, _device.isIos ? /*#__PURE__*/_react.default.createElement(KeyboardFixView, {
  style: keyboardStyle,
  behavior: "padding"
}, children) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children));
const KeyboardFixView = (0, _styled.default)(_reactNative.KeyboardAvoidingView)`
  flex: 1;
`;
var _default = exports.default = (0, _styled.default)(SafeAreaContainer)`
  flex: 1;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
//# sourceMappingURL=index.js.map