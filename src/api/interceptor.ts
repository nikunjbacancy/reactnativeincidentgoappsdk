import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TOKEN_KEY } from '../containers/app/constants';
import { AccessToken } from 'incident-code-core';
import createAxiosInstance from '../utils/axios';
import { getVersion } from '../utils/device';
import { isTokenExpired } from '../utils/token';
import { sdkConfigs } from '../sdkConfigs'

const refreshTokenAxios = createAxiosInstance();

const setHeaders = (
  config: AxiosRequestConfig,
  token: AccessToken | undefined = undefined,
): AxiosRequestConfig => {
  const { headers } = config;
  headers['Security-Code'] = "10mPPEDvove5XvDcSyVM";
  headers['Client-Version'] = getVersion();

  if (token) {
    headers.Authorization = `${token.token_type} ${token.access_token}`;
  }

  return config;
};

const refreshToken = (config: AxiosRequestConfig) =>
  refreshTokenAxios
    .post('auth')
    .then((response: AxiosResponse<AccessToken>) =>
      setHeaders(config, response.data),
    );

const configInterceptors = (axios: AxiosInstance) => {
  
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

  axios.interceptors.response.use(
    response =>
      // Do something with response data
      response,
    error =>
      // Do something with response error
      Promise.reject(error),
  );
};

export default configInterceptors;
