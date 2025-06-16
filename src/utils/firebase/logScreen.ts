import analytics from '@react-native-firebase/analytics';

const logScreen = () => {
  // Set & override the MainActivity screen name
  analytics().logAppOpen();
};

export default logScreen;
