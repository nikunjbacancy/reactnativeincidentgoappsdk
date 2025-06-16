import PushNotification from 'react-native-push-notification';

export interface LocalNotificationProps {
  title?: string;
  message?: string;
  group?: string;
  link?: string;
  userInfo?: object;
  isOnGoing?: boolean,
  channelId?: string;
  channelName?: string;
}

const sendLocalNotification = ({
  title,
  message,
  userInfo,
  isOnGoing
}: LocalNotificationProps) => {
  // console.log("userInfo==>",userInfo)
  PushNotification.localNotification({
    channelId: "ico-app", // (required)
    title,
    message: message || '',
    autoCancel: true,
    ongoing: isOnGoing || false,
    userInfo: userInfo || undefined,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_launcher',
  });
};
export { sendLocalNotification };
