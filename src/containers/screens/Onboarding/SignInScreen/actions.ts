/**
 *
 * SignInScreen actions
 *
 */

import { SEND_CODE_FAILURE, SEND_CODE_SUCCESS } from './constants';
import { SignInActionTypes } from './types';

export const sendCodeSuccess = (phone: string): SignInActionTypes => ({
  type: SEND_CODE_SUCCESS,
  payload: phone,
});

export const sendCodeFailure = (error: Error): SignInActionTypes => ({
  type: SEND_CODE_FAILURE,
  payload: error,
  error: true,
});
