import { Linking, Platform } from 'react-native';

const makeCall = (phoneNumber?: string) => {
  // const url =
  //   Platform.OS === 'android'
  //     ? `tel:${phoneNumber}`
  //     : `telprompt:${phoneNumber}`;
  // return Linking.openURL(url);
  const url =
    Platform.OS === 'android'
      ? `tel:${phoneNumber}`
      : `tel://${phoneNumber}`;
  return Linking.openURL(url).then()
    .catch(error => {
      console.log('linking error...', error);
    });
};

export default makeCall;
