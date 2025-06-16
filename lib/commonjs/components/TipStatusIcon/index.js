"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TipStatusIcon = ({
  style,
  label
}) => {
  return /*#__PURE__*/_react.default.createElement(TipStatusContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }), label && /*#__PURE__*/_react.default.createElement(TabStatusLabel, null, " ", label));
};
const TipStatusContainer = _styled.default.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TabStatusLabel = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.white};
`;
var _default = exports.default = (0, _styled.default)(TipStatusIcon)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({
  active,
  theme: {
    colors
  }
}) => active ? colors.green : colors.highlight2};
`;
//# sourceMappingURL=index.js.map