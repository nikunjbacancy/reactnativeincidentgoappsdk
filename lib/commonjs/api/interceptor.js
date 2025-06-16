"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../containers/app/constants");
var _axios = _interopRequireDefault(require("../utils/axios"));
var _device = require("../utils/device");
var _token = require("../utils/token");
var _sdkConfigs = require("../sdkConfigs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const refreshTokenAxios = (0, _axios.default)();
const setHeaders = (config, token = undefined) => {
  const {
    headers
  } = config;
  headers['Security-Code'] = _sdkConfigs.sdkConfigs.configs.headerSecurityCode;
  headers['Client-Version'] = (0, _device.getVersion)();
  if (token) {
    headers.Authorization = `${token.token_type} ${token.access_token}`;
  }
  return config;
};
const refreshToken = config => refreshTokenAxios.post('auth').then(response => setHeaders(config, response.data));
const configInterceptors = axios => {
  axios.interceptors.request.use(async config => {
    const tokenStr = await _asyncStorage.default.getItem(_constants.TOKEN_KEY);
    if (!tokenStr) {
      return setHeaders(config);
    }
    const token = JSON.parse(tokenStr);
    if ((0, _token.isTokenExpired)(token)) {
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
var _default = exports.default = configInterceptors;
//# sourceMappingURL=interceptor.js.map