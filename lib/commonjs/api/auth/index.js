"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  refreshToken: 'auth',
  sendCode: 'auth/phone',
  login: 'auth/phone',
  registerUser: 'sdk-apis/registerUser'
};
var _default = exports.default = {
  refreshToken: () => _axios.default.post(endpoints.refreshToken),
  sendCode: params => _axios.default.post(endpoints.sendCode, params),
  login: loginData => _axios.default.post(endpoints.login, loginData),
  userRegister: params => _axios.default.post(endpoints.registerUser, params)
};
//# sourceMappingURL=index.js.map