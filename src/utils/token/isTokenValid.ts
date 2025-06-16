import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY } from '../../containers/app/constants';

import isTokenExpired from './isTokenExpired';

const isTokenValid = async () => {
  const tokenStr = await AsyncStorage.getItem(TOKEN_KEY);
  //("-tokenStr->", tokenStr)
  if (!tokenStr) return false;
  const token = JSON.parse(tokenStr);
  return !isTokenExpired(token);
};

export { isTokenValid };
