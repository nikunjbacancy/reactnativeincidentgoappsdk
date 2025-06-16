import messaging from '@react-native-firebase/messaging';

const subscribeToTopic = async (topic: string) => {
  //("Topic==>",topic)
  await messaging().subscribeToTopic(topic);
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    // await messaging().registerForRemoteNotifications();
    await messaging().registerDeviceForRemoteMessages();
    // await messaging().re

  }
};

export default subscribeToTopic;
