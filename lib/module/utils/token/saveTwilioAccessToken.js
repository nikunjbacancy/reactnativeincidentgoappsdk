/* eslint-disable @typescript-eslint/camelcase */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExpireOffset, KeyTwilioAccessToken } from '../../api/twilio/constants';
const saveTwilioAccessToken = async token => {
  const tokenWithExpire = !token.expires_at ? {
    ...token,
    expires_at: Date.now() + (token.expires_in || 1) * 1000 - ExpireOffset
  } : token;
  await AsyncStorage.setItem(KeyTwilioAccessToken, JSON.stringify(tokenWithExpire));
};
export default saveTwilioAccessToken;
//# sourceMappingURL=saveTwilioAccessToken.js.map