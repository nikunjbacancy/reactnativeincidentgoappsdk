"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ErrorView = ({
  errorMessage
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(ErrorImage, {
    source: _assets.images.icError()
  }), /*#__PURE__*/_react.default.createElement(Heading, null, formatMessage(_messages.default.title)), /*#__PURE__*/_react.default.createElement(SubHeading, null, errorMessage));
};
const Container = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const ErrorImage = _styled.default.Image`
  width: 45px;
  height: 45px;
  margin-bottom: 20px;
`;
const Heading = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 28px;
  letter-spacing: -0.4px;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
const SubHeading = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.primary};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  line-height: 24px;
  letter-spacing: -0.24px;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  margin-top: 10px;
`;
var _default = exports.default = ErrorView;
//# sourceMappingURL=index.js.map