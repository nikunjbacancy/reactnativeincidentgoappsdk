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
const ScreenActionButton = ({
  onCancel,
  onPress,
  text,
  rightTextIcon,
  loading,
  disabled,
  tintColor
}) => /*#__PURE__*/_react.default.createElement(ScreenActionContainer, null, onCancel && /*#__PURE__*/_react.default.createElement(BackButton, {
  source: _assets.images.icBack(),
  tintColor: tintColor,
  onPress: onCancel,
  fill: !text
}), text && /*#__PURE__*/_react.default.createElement(ContinueButton, {
  disabled: disabled,
  loading: loading,
  onPress: onPress,
  text: text,
  rightTextIcon: rightTextIcon,
  fill: !onCancel
}));
const ScreenActionContainer = _styled.default.View`
  flex-direction: row;
  height: 50px;
`;
const BackButton = (0, _styled.default)(_IconButton.default)`
  flex: ${({
  fill
}) => fill ? 1 : 0.2};
  background-color: ${({
  theme
}) => theme.colors.lightGrey};
  border-radius: 6px;
  height: 100%;
`;
const ContinueButton = (0, _styled.default)(_GradientButton.default).attrs({
  buttonStyle: {
    height: '100%'
  }
})`
  flex: ${({
  fill
}) => fill ? 1 : 0.8};
  ${({
  fill
}) => fill ? '' : 'margin-left: 15px'};
  border-radius: 6px;
`;
var _default = exports.default = ScreenActionButton;
//# sourceMappingURL=index.js.map