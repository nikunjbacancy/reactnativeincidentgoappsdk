"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanicText = exports.PanicInfoContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PanicInfo = ({
  style,
  text
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const createText = () => {
    return text || formatMessage(_messages.default.panicInfo);
  };
  return /*#__PURE__*/_react.default.createElement(PanicInfoContainer, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(PanicText, null, createText()));
};
const PanicInfoContainer = exports.PanicInfoContainer = _styled.default.View`
  position: absolute;
  bottom: 55px;
  right: 30px;
  padding: 8px 10px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.4);
`;
const PanicText = exports.PanicText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  text-align: center;
`;
var _default = exports.default = PanicInfo;
//# sourceMappingURL=index.js.map