"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Message = void 0;
var _react = _interopRequireDefault(require("react"));
var _colors = _interopRequireDefault(require("../../assets/colors"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const LoadingIndicator = ({
  style,
  message
}) => /*#__PURE__*/_react.default.createElement(Container, {
  style: style
}, /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
  size: "small",
  color: _colors.default.grey
}), message && /*#__PURE__*/_react.default.createElement(Message, null, message));
const Container = _styled.default.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const Message = exports.Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 15px;
`;
var _default = exports.default = LoadingIndicator;
//# sourceMappingURL=index.js.map