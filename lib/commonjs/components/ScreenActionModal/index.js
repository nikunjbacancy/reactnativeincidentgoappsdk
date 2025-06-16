"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ScreenActionModalType = void 0;
var _assets = require("../../assets");
var _isString = _interopRequireDefault(require("lodash/isString"));
var _react = _interopRequireDefault(require("react"));
var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
var _reactNative = require("react-native");
var _GradientButton = _interopRequireDefault(require("../GradientButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
let ScreenActionModalType = exports.ScreenActionModalType = /*#__PURE__*/function (ScreenActionModalType) {
  ScreenActionModalType["Success"] = "Success";
  ScreenActionModalType["Error"] = "Error";
  return ScreenActionModalType;
}({});
const TipCreatedModal = ({
  type = ScreenActionModalType.Success,
  isVisible,
  title,
  message,
  actionText,
  onAction,
  onHide,
  showSuccessIcon = true
}) => {
  const icon = type === ScreenActionModalType.Success ? _assets.images.icSuccess() : _assets.images.icError();
  return /*#__PURE__*/_react.default.createElement(_reactNativeModal.default, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: onHide,
    onBackdropPress: onHide,
    style: {
      flex: 1,
      paddingVertical: 50
    }
  }, showSuccessIcon ? /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    source: _assets.images.icClose(),
    onPress: onHide
  }), /*#__PURE__*/_react.default.createElement(SuccessIcon, {
    source: icon
  }), /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(MessageRow, null, (0, _isString.default)(message) ? /*#__PURE__*/_react.default.createElement(Message, null, message) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, message)), /*#__PURE__*/_react.default.createElement(ActionButton, {
    text: actionText,
    onPress: onAction
  })) : /*#__PURE__*/_react.default.createElement(DetailContainer, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    source: _assets.images.icClose(),
    onPress: onHide
  }), /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, null, /*#__PURE__*/_react.default.createElement(TextBody, null, message))));
};
const Container = _styled.default.View`
  align-items: center;
  border-radius: 20px;
  height: 380px;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 0 30px;
`;
const DetailContainer = _styled.default.SafeAreaView`
  align-items: center;
  border-radius: 20px;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 30px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const SuccessIcon = _styled.default.Image`
  margin-top: 30px;
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 20px 0;
  text-align: center;
`;
const MessageRow = _styled.default.View`
  flex: 1;
`;
const Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const TextBody = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
  padding: 10px 10px;
  padding-top:0;
`;
const ActionButton = (0, _styled.default)(_GradientButton.default)`
  margin: 10px auto 20px;
  width: 200px;
`;
const CloseButton = (0, _styled.default)(_IconButton.default)`
  width: 50px;
  height: 50px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  right: 0px;
`;
var _default = exports.default = TipCreatedModal;
//# sourceMappingURL=index.js.map