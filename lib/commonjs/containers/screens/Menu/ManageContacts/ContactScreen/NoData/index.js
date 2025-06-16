"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NoData = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/_react.default.createElement(NoContactsText, null, formatMessage(_messages.default.noContacts));
};
const NoContactsText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  margin-top: 30px;
`;
var _default = exports.default = NoData;
//# sourceMappingURL=index.js.map