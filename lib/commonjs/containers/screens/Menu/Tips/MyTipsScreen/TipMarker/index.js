"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const TipMarker = ({
  style,
  colors
}) => /*#__PURE__*/_react.default.createElement(Container, {
  style: style
}, /*#__PURE__*/_react.default.createElement(GradientContainer, {
  colors: colors
}, /*#__PURE__*/_react.default.createElement(Border, null)));
const Container = _styled.default.View`
  position: absolute;
`;
const GradientContainer = (0, _styled.default)(_reactNativeLinearGradient.default)`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
const Border = _styled.default.View`
  height: 100%;
  width: 100%;
  background-color: ${({
  theme
}) => theme.colors.transparent};
  border-color: rgba(27, 27, 35, 0.4);
  border-width: 5px;
  border-radius: 24px;
`;
var _default = exports.default = TipMarker;
//# sourceMappingURL=index.js.map