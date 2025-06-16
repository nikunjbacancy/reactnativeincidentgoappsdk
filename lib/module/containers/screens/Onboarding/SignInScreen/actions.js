/**
 *
 * SignInScreen actions
 *
 */

import { SEND_CODE_FAILURE, SEND_CODE_SUCCESS } from './constants';
export const sendCodeSuccess = phone => ({
  type: SEND_CODE_SUCCESS,
  payload: phone
});
export const sendCodeFailure = error => ({
  type: SEND_CODE_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map