/**
 *
 * SignInCodeScreen actions
 *
 */

import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from './constants';
export const registerUserRequest = params => ({
  type: REGISTER_USER_REQUEST,
  payload: params
});
export const registerUserSuccess = accessToken => ({
  type: REGISTER_USER_SUCCESS,
  payload: accessToken
});
export const registerUserFailure = error => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map