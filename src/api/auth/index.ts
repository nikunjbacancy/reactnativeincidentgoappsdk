import { LoginData } from 'containers/screens/Onboarding/SignInCodeScreen/types';

import axios from '../axios';

export const endpoints = {
  refreshToken: 'auth',
  sendCode: 'auth/phone',
  login: 'auth/phone',
  registerUser: 'sdk-apis/registerUser',
};

export default {
  refreshToken: () => axios.post(endpoints.refreshToken),
  sendCode: (params: any) => axios.post(endpoints.sendCode, params),
  login: (loginData: LoginData) => axios.post(endpoints.login, loginData),
  userRegister: (params: any) => axios.post(endpoints.registerUser, params),
};
