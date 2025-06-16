/**
 *
 * UpdateNameScreen types
 *
 */

import { AppUser } from 'incident-code-core';

import {
  UPDATE_NAME_FAILURE,
  UPDATE_NAME_REQUEST,
  UPDATE_NAME_SUCCESS,
} from './constants';

export interface UpdateNameRequestAction {
  type: typeof UPDATE_NAME_REQUEST;
  payload: AppUser;
}

export interface UpdateNameSuccessAction {
  type: typeof UPDATE_NAME_SUCCESS;
  payload: AppUser;
}

export interface UpdateNameFailureAction {
  type: typeof UPDATE_NAME_FAILURE;
  payload: Error;
  error: boolean;
}

export type UpdateNameActionTypes =
  | UpdateNameRequestAction
  | UpdateNameSuccessAction
  | UpdateNameFailureAction;
