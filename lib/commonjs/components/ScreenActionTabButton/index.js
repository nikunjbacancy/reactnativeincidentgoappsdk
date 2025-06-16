"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _GradientButton = _interopRequireDefault(require("../GradientButton"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ScreenActionTabButton = ({
  style,
  cancelButtonStyle,
  continueButtonStyle,
  continueButtonTextStyle,
  onCancel,
  onPress,
  text,
  rightTextIcon,
  loading,
  disabled,
  tintColor,
  iconImage
}) => /*#__PURE__*/_react.default.createElement(ScreenActionContainer, {
  style: style
}, onCancel && /*#__PURE__*/_react.default.createElement(CancelButton, {
  style: cancelButtonStyle,
  source: iconImage || _assets.images.icClose(),
  tintColor: tintColor,
  onPress: onCancel,
  fill: !text
}), text && /*#__PURE__*/_react.default.createElement(ContinueButton, {
  style: continueButtonStyle,
  textStyle: continueButtonTextStyle,
  disabled: disabled,
  loading: loading,
  onPress: onPress,
  text: text,
  rightTextIcon: rightTextIcon,
  fill: !onCancel
}));
const ScreenActionContainer = _styled.default.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-top-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelButton = (0, _styled.default)(_IconButton.default)`
  flex: ${({
  fill
}) => fill ? 1 : 0.25};
  background-color: ${({
  theme
}) => theme.colors.nearWhite};
  height: 100%;
`;
const ContinueButton = (0, _styled.default)(_GradientButton.default).attrs(({
  theme,
  ...rest
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  },
  ...rest
}))`
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
  flex: ${({
  fill
}) => fill ? 1 : 0.75};
  height: 100%;
  border-radius: 0;
`;
var _default = exports.default = ScreenActionTabButton;
//# sourceMappingURL=index.js.map