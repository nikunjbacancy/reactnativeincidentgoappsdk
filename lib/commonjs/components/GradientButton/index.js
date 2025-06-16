"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeProgress = require("react-native-progress");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import IconButton from '../IconButton';

const GradientButton = ({
  style,
  textStyle,
  disabled,
  onPress,
  image,
  text,
  rightTextIcon,
  loading
}) => /*#__PURE__*/_react.default.createElement(Container, {
  style: style,
  onPress: onPress,
  disabled: disabled
}, loading && /*#__PURE__*/_react.default.createElement(Loading, null), !loading && image && /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
  source: image
}), !loading && text && /*#__PURE__*/_react.default.createElement(GradientText, {
  style: textStyle
}, text), !loading && rightTextIcon && onPress && /*#__PURE__*/_react.default.createElement(RightTextIcon, {
  source: rightTextIcon,
  onPress: onPress
}));
const Container = _styled.default.TouchableOpacity`
  height: 50px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.lightGrey : colors.highlight};
  width: 100%;
`;
const Loading = (0, _styled.default)(_reactNativeProgress.CircleSnail).attrs(({
  theme
}) => ({
  color: theme.colors.grey,
  marginLeft: 'auto',
  marginRight: 'auto'
}))``;
const GradientText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const RightTextIcon = (0, _styled.default)(_IconButton.default).attrs(({
  theme
}) => ({
  tintColor: theme.colors.white
}))`
  max-width: 24px;
  max-height: 24px;
`;
var _default = exports.default = GradientButton;
//# sourceMappingURL=index.js.map