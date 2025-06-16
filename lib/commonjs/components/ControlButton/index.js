"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ControlButton = ({
  style,
  image,
  imageStyle,
  isDisabled,
  onPress
}) => /*#__PURE__*/_react.default.createElement(Container, {
  style: style,
  disabled: isDisabled,
  onPress: onPress
}, /*#__PURE__*/_react.default.createElement(ControlImage, {
  style: imageStyle,
  source: image,
  isDisabled: isDisabled
}));
const Container = _styled.default.TouchableOpacity`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;
const ControlImage = _styled.default.Image`
  opacity: ${({
  isDisabled
}) => isDisabled ? 0.5 : 1};
`;
var _default = exports.default = ControlButton;
//# sourceMappingURL=index.js.map