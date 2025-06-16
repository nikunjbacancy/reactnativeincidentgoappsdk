import PushNotification from 'react-native-push-notification';
const sendLocalNotification = ({
  title,
  message,
  userInfo,
  isOnGoing
}) => {
  // console.log("userInfo==>",userInfo)
  PushNotification.localNotification({
    channelId: "ico-app",
    // (required)
    title,
    message: message || '',
    autoCancel: true,
    ongoing: isOnGoing || false,
    userInfo: userInfo || undefined,
    largeIcon: 'ic_launcher',
    smallIcon: 'ic_launcher'
  });
};
export { sendLocalNotification };
//# sourceMappingURL=sendLocalNotification.js.map