import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyTwilioAccessToken } from '../../api/twilio/constants';
import { AccessToken } from 'incident-code-core';

const getTwilioAccessTokenFromStorage = async (): Promise<AccessToken> => {
  const tokenStr = await AsyncStorage.getItem(KeyTwilioAccessToken);
  return JSON.parse(tokenStr || '{}');
};

export default getTwilioAccessTokenFromStorage;
