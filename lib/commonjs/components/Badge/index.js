"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Badge = ({
  style,
  length
}) => {
  return /*#__PURE__*/_react.default.createElement(Container, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(Content, null, length || '!'));
};
const Container = _styled.default.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: ${({
  theme
}) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = _styled.default.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.white};
  font-size: 10px;
`;
var _default = exports.default = Badge;
//# sourceMappingURL=index.js.map