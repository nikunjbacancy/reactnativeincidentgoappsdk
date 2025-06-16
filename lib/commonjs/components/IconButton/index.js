"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const IconButton = ({
  style,
  imageStyle,
  source,
  tintColor,
  onPress
}) => /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
  style: style,
  onPress: onPress
}, /*#__PURE__*/_react.default.createElement(IconImage, {
  source: source,
  tintColor: tintColor,
  style: imageStyle
}));
const IconImage = _styled.default.Image`
  tint-color: ${({
  tintColor,
  theme
}) => tintColor || theme.colors.grey};
`;
var _default = exports.default = (0, _styled.default)(IconButton)`
  flex: 1;
  width: 60px;
  justify-content: center;
  align-items: center;
`;
//# sourceMappingURL=index.js.map