/**
 *
 * SignInScreen types
 *
 */

import {
  SEND_CODE_FAILURE,
  SEND_CODE_REQUEST,
  SEND_CODE_SUCCESS,
} from './constants';

export interface SendCodeData {
  phone: string;
  isSDK:boolean,
  agreeTos: boolean;
}

export type SendCodeState = {
  access_token: string;
};

export interface SendCodeRequestAction {
  type: typeof SEND_CODE_REQUEST;
  payload: SendCodeData;
}

export interface SendCodeSuccessAction {
  type: typeof SEND_CODE_SUCCESS;
  payload: string;
}

export interface SendCodeFailureAction {
  type: typeof SEND_CODE_FAILURE;
  payload: Error;
  error: true;
}

export type SignInActionTypes =
  | SendCodeRequestAction
  | SendCodeSuccessAction
  | SendCodeFailureAction;
