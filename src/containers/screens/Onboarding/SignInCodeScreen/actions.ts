/**
 *
 * SignInCodeScreen actions
 *
 */

import { AccessToken } from 'incident-code-core';

import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RESEND_CODE_FAILURE,
  RESEND_CODE_REQUEST,
  RESEND_CODE_SUCCESS,
} from './constants';
import { LoginData, SignInCodeActionTypes, ResendCodeData } from './types';

export const loginRequest = (loginData: LoginData): SignInCodeActionTypes => ({
  type: LOGIN_REQUEST,
  payload: loginData,
});

export const loginSuccess = (
  accessToken: AccessToken,
): SignInCodeActionTypes => ({
  type: LOGIN_SUCCESS,
  payload: accessToken,
});

export const loginFailure = (error: Error): SignInCodeActionTypes => ({
  type: LOGIN_FAILURE,
  payload: error,
  error: true,
});

export const resendCode = (resendCodeData: ResendCodeData): SignInCodeActionTypes => ({
  type: RESEND_CODE_REQUEST,
  payload: resendCodeData,
});

export const resendCodeSuccess = (): SignInCodeActionTypes => ({
  type: RESEND_CODE_SUCCESS,
});

export const resendCodeFailure = (error: Error): SignInCodeActionTypes => ({
  type: RESEND_CODE_FAILURE,
  payload: error,
  error: true,
});
