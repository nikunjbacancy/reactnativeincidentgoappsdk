/**
 *
 * SignInCodeScreen types
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

export interface LoginData {
  phone: string;
  code: string;
  isSDK:true;
}

export interface SendCodeState {
  newUser: boolean;
  token:string;
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginData;
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: AccessToken;
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: Error;
  error: true;
}
export interface ResendCodeData {
  phone: string;
  isSDK:true;
}
export interface ResendCodeRequestAction {
  type: typeof RESEND_CODE_REQUEST;
  payload: ResendCodeData;
}

export interface ResendCodeSuccessAction {
  type: typeof RESEND_CODE_SUCCESS;
}

export interface ResendCodeFailureAction {
  type: typeof RESEND_CODE_FAILURE;
  payload: Error;
  error: true;
}

export type SignInCodeActionTypes =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | ResendCodeRequestAction
  | ResendCodeSuccessAction
  | ResendCodeFailureAction;
