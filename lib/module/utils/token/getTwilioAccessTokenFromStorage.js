import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyTwilioAccessToken } from '../../api/twilio/constants';
const getTwilioAccessTokenFromStorage = async () => {
  const tokenStr = await AsyncStorage.getItem(KeyTwilioAccessToken);
  return JSON.parse(tokenStr || '{}');
};
export default getTwilioAccessTokenFromStorage;
//# sourceMappingURL=getTwilioAccessTokenFromStorage.js.map