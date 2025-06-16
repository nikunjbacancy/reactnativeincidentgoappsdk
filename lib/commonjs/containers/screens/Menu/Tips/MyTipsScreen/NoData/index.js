"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NoData = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  return /*#__PURE__*/_react.default.createElement(Box, null, /*#__PURE__*/_react.default.createElement(BoxImage, {
    source: _assets.images.icNotFound()
  }), /*#__PURE__*/_react.default.createElement(BoxTitle, null, formatMessage(_messages.default.noIncidentsTitle)), /*#__PURE__*/_react.default.createElement(BoxMessage, null, formatMessage(_messages.default.noIncidentsMessage)));
};
const Box = _styled.default.View`
  flex: 1;
  align-items: center;
  margin: 40px 15px 10px;
`;
const BoxImage = _styled.default.Image`
  margin-bottom: 20px;
`;
const BoxTitle = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
`;
const BoxMessage = _styled.default.Text`
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 26px;
  text-align: center;
  color: ${({
  theme
}) => theme.colors.light};
`;
var _default = exports.default = NoData;
//# sourceMappingURL=index.js.map