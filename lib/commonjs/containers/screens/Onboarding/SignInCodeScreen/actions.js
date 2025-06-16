"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resendCodeSuccess = exports.resendCodeFailure = exports.resendCode = exports.loginSuccess = exports.loginRequest = exports.loginFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SignInCodeScreen actions
 *
 */

const loginRequest = loginData => ({
  type: _constants.LOGIN_REQUEST,
  payload: loginData
});
exports.loginRequest = loginRequest;
const loginSuccess = accessToken => ({
  type: _constants.LOGIN_SUCCESS,
  payload: accessToken
});
exports.loginSuccess = loginSuccess;
const loginFailure = error => ({
  type: _constants.LOGIN_FAILURE,
  payload: error,
  error: true
});
exports.loginFailure = loginFailure;
const resendCode = resendCodeData => ({
  type: _constants.RESEND_CODE_REQUEST,
  payload: resendCodeData
});
exports.resendCode = resendCode;
const resendCodeSuccess = () => ({
  type: _constants.RESEND_CODE_SUCCESS
});
exports.resendCodeSuccess = resendCodeSuccess;
const resendCodeFailure = error => ({
  type: _constants.RESEND_CODE_FAILURE,
  payload: error,
  error: true
});
exports.resendCodeFailure = resendCodeFailure;
//# sourceMappingURL=actions.js.map