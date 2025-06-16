/* eslint-disable @typescript-eslint/camelcase */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ExpireOffset, KeyTwilioAccessToken } from '../../api/twilio/constants';
import { AccessToken } from 'incident-code-core';

const saveTwilioAccessToken = async (token: AccessToken) => {
  const tokenWithExpire = !token.expires_at
    ? {
        ...token,
        expires_at: Date.now() + (token.expires_in || 1) * 1000 - ExpireOffset,
      }
    : token;
  await AsyncStorage.setItem(
    KeyTwilioAccessToken,
    JSON.stringify(tokenWithExpire),
  );
};

export default saveTwilioAccessToken;
