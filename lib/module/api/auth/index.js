import axios from '../axios';
export const endpoints = {
  refreshToken: 'auth',
  sendCode: 'auth/phone',
  login: 'auth/phone',
  registerUser: 'sdk-apis/registerUser'
};
export default {
  refreshToken: () => axios.post(endpoints.refreshToken),
  sendCode: params => axios.post(endpoints.sendCode, params),
  login: loginData => axios.post(endpoints.login, loginData),
  userRegister: params => axios.post(endpoints.registerUser, params)
};
//# sourceMappingURL=index.js.map