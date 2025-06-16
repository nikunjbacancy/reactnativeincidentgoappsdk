"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _actions = require("../../containers/providers/NotificationProvider/actions");
var _react = _interopRequireDefault(require("react"));
var _reactNativeInAppMessage = require("react-native-in-app-message");
var _hooks = require("../../utils/hooks");
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _sdkConfigs = require("../../sdkConfigs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const CustomComponent = ({
  title,
  message
}) => /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(AppInfoContainer, null, /*#__PURE__*/_react.default.createElement(AppIcon, {
  source: _assets.images.icApp()
}), /*#__PURE__*/_react.default.createElement(AppName, null, _sdkConfigs.sdkConfigs.sdkName), /*#__PURE__*/_react.default.createElement(ReceivedAt, null, "now")), /*#__PURE__*/_react.default.createElement(Title, null, title), /*#__PURE__*/_react.default.createElement(Message, null, message));
const InAppNotification = ({
  title,
  message,
  onPress
}) => {
  const hideIOSForegroundNotificationAction = (0, _hooks.useAction)(_actions.hideIOSForegroundNotification);
  return /*#__PURE__*/_react.default.createElement(_reactNativeInAppMessage.Notification, {
    showKnob: false,
    tapticFeedback: true,
    hideStatusBar: true,
    blurType: "xlight",
    duration: 6000,
    onPress: onPress,
    onHide: hideIOSForegroundNotificationAction,
    customComponent: /*#__PURE__*/_react.default.createElement(CustomComponent, {
      title: title,
      message: message
    })
  });
};
const Container = _styled.default.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 13px;
  border: 0.5px solid ${({
  theme
}) => theme.colors.lightGrey};
  border-radius: 10px;
`;
const AppInfoContainer = _styled.default.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const AppIcon = _styled.default.Image`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;
const AppName = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin-left: 10px;
`;
const ReceivedAt = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin-left: auto;
  margin-right: 10px;
`;
const Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  font-weight: bold;
`;
const Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
`;
var _default = exports.default = InAppNotification;
//# sourceMappingURL=index.js.map