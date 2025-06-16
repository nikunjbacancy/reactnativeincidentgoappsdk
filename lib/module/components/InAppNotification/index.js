import { images } from '../../assets';
import { hideIOSForegroundNotification } from '../../containers/providers/NotificationProvider/actions';
import React from 'react';
import { Notification } from 'react-native-in-app-message';
import { useAction } from '../../utils/hooks';
import styled from '../../utils/styled';
import { sdkConfigs } from '../../sdkConfigs';
const CustomComponent = ({
  title,
  message
}) => /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(AppInfoContainer, null, /*#__PURE__*/React.createElement(AppIcon, {
  source: images.icApp()
}), /*#__PURE__*/React.createElement(AppName, null, sdkConfigs.sdkName), /*#__PURE__*/React.createElement(ReceivedAt, null, "now")), /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(Message, null, message));
const InAppNotification = ({
  title,
  message,
  onPress
}) => {
  const hideIOSForegroundNotificationAction = useAction(hideIOSForegroundNotification);
  return /*#__PURE__*/React.createElement(Notification, {
    showKnob: false,
    tapticFeedback: true,
    hideStatusBar: true,
    blurType: "xlight",
    duration: 6000,
    onPress: onPress,
    onHide: hideIOSForegroundNotificationAction,
    customComponent: /*#__PURE__*/React.createElement(CustomComponent, {
      title: title,
      message: message
    })
  });
};
const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 13px;
  border: 0.5px solid ${({
  theme
}) => theme.colors.lightGrey};
  border-radius: 10px;
`;
const AppInfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
const AppIcon = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;
const AppName = styled.Text`
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
const ReceivedAt = styled.Text`
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
const Title = styled.Text`
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
const Message = styled.Text`
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
export default InAppNotification;
//# sourceMappingURL=index.js.map