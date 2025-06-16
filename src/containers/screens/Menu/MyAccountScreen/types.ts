/**
 *
 * MyAccountScreen types
 *
 */

import { PortraitMessageType } from '../../../../components/ImageUpload';
import { AppUser } from 'incident-code-core';

import {
  CLEAR_MESSAGE_TYPE,
  DELETE_PORTRAIT,
  DELETE_PORTRAIT_FAILURE,
  DELETE_PORTRAIT_SUCCESS,
  UPDATE_MY_ACCOUNT_NAME_FAILURE,
  UPDATE_MY_ACCOUNT_NAME_REQUEST,
  UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';

export interface MyAccountState {
  isUpdating: boolean;
  uploadMessageType: PortraitMessageType | undefined;
}

export interface UpdateMyAccountNameRequestAction {
  type: typeof UPDATE_MY_ACCOUNT_NAME_REQUEST;
  payload: AppUser;
}

export interface UpdateMyAccountNameSuccessAction {
  type: typeof UPDATE_MY_ACCOUNT_NAME_SUCCESS;
  payload: AppUser;
}

export interface UpdateMyAccountNameFailureAction {
  type: typeof UPDATE_MY_ACCOUNT_NAME_FAILURE;
  payload: Error;
  error: boolean;
}

export interface UpdatePortraitRequestAction {
  type: typeof UPDATE_PORTRAIT_REQUEST;
  payload: string;
}

export interface UpdatePortraitSuccessAction {
  type: typeof UPDATE_PORTRAIT_SUCCESS;
}

export interface UpdatePortraitFailureAction {
  type: typeof UPDATE_PORTRAIT_FAILURE;
  payload: { error: Error };
  error: boolean;
}

export interface DeletePortraitAction {
  type: typeof DELETE_PORTRAIT;
}

export interface DeletePortraitSuccessAction {
  type: typeof DELETE_PORTRAIT_SUCCESS;
}

export interface DeletePortraitFailureAction {
  type: typeof DELETE_PORTRAIT_FAILURE;
  payload: { error: Error };
  error: boolean;
}

export interface ClearMessageTypeAction {
  type: typeof CLEAR_MESSAGE_TYPE;
}

export type MyAccountActionTypes =
  | UpdateMyAccountNameRequestAction
  | UpdateMyAccountNameSuccessAction
  | UpdateMyAccountNameFailureAction
  | UpdatePortraitRequestAction
  | UpdatePortraitSuccessAction
  | UpdatePortraitFailureAction
  | DeletePortraitAction
  | DeletePortraitSuccessAction
  | DeletePortraitFailureAction
  | ClearMessageTypeAction;
