/**
 *
 * SignInCodeScreen actions
 *
 */

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, RESEND_CODE_FAILURE, RESEND_CODE_REQUEST, RESEND_CODE_SUCCESS } from './constants';
export const loginRequest = loginData => ({
  type: LOGIN_REQUEST,
  payload: loginData
});
export const loginSuccess = accessToken => ({
  type: LOGIN_SUCCESS,
  payload: accessToken
});
export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error,
  error: true
});
export const resendCode = resendCodeData => ({
  type: RESEND_CODE_REQUEST,
  payload: resendCodeData
});
export const resendCodeSuccess = () => ({
  type: RESEND_CODE_SUCCESS
});
export const resendCodeFailure = error => ({
  type: RESEND_CODE_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map