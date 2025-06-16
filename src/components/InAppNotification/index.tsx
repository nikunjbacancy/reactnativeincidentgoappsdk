import { images } from '../../assets';
import { hideIOSForegroundNotification } from '../../containers/providers/NotificationProvider/actions';
import React, { FC } from 'react';
import { Notification } from 'react-native-in-app-message';
import { useAction } from '../../utils/hooks';
import styled from '../../utils/styled';
import { sdkConfigs } from '../../sdkConfigs'

interface InAppNotificationProps {
  title?: string;
  message?: string;
}

interface WrapperProps {
  onPress?(): void;
  title?: string;
  message?: string;
}

const CustomComponent: FC<InAppNotificationProps> = ({ title, message }) => (
  <Container>
    <AppInfoContainer>
      <AppIcon source={images.icApp()} />
      <AppName>{sdkConfigs.sdkName}</AppName>
      <ReceivedAt>now</ReceivedAt>
    </AppInfoContainer>
    <Title>{title}</Title>
    <Message>{message}</Message>
  </Container>
);

const InAppNotification: FC<WrapperProps> = ({ title, message, onPress }) => {
  const hideIOSForegroundNotificationAction = useAction(
    hideIOSForegroundNotification,
  );
  return (
    <Notification
      showKnob={false}
      tapticFeedback
      hideStatusBar
      blurType="xlight"
      duration={6000}
      onPress={onPress}
      onHide={hideIOSForegroundNotificationAction}
      customComponent={<CustomComponent title={title} message={message} />}
    />
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 13px;
  border: 0.5px solid ${({ theme }) => theme.colors.lightGrey};
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
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
  margin-left: 10px;
`;

const ReceivedAt = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
  margin-left: auto;
  margin-right: 10px;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: bold;
`;

const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
`;

export default InAppNotification;
