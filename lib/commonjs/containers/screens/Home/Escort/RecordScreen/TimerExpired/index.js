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
const TimerExpiredBanner = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/_react.default.createElement(BannerContainer, null, /*#__PURE__*/_react.default.createElement(BannerText, null, formatMessage(_messages.default.timerExpired)));
};
const BannerText = _styled.default.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.white};
  font-size: 18px;
`;
const BannerContainer = _styled.default.View`
  width: 60%;
  background-color: ${({
  theme
}) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: absolute;
  top: 60px;
  left: 20%;
  border-radius: 10px;
`;
var _default = exports.default = TimerExpiredBanner;
//# sourceMappingURL=index.js.map