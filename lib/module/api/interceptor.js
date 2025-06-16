import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY } from '../containers/app/constants';
import createAxiosInstance from '../utils/axios';
import { getVersion } from '../utils/device';
import { isTokenExpired } from '../utils/token';
import { sdkConfigs } from '../sdkConfigs';
const refreshTokenAxios = createAxiosInstance();
const setHeaders = (config, token = undefined) => {
  const {
    headers
  } = config;
  headers['Security-Code'] = sdkConfigs.configs.headerSecurityCode;
  headers['Client-Version'] = getVersion();
  if (token) {
    headers.Authorization = `${token.token_type} ${token.access_token}`;
  }
  return config;
};
const refreshToken = config => refreshTokenAxios.post('auth').then(response => setHeaders(config, response.data));
const configInterceptors = axios => {
  axios.interceptors.request.use(async config => {
    const tokenStr = await AsyncStorage.getItem(TOKEN_KEY);
    if (!tokenStr) {
      return setHeaders(config);
    }
    const token = JSON.parse(tokenStr);
    if (isTokenExpired(token)) {
      return refreshToken(config);
    }
    return setHeaders(config, token);
  });
  axios.interceptors.response.use(response =>
  // Do something with response data
  response, error =>
  // Do something with response error
  Promise.reject(error));
};
export default configInterceptors;
//# sourceMappingURL=interceptor.js.map