/**
 *
 * MyAccountScreen actions
 *
 */

import { AppUser } from 'incident-code-core';

import {
  CLEAR_MESSAGE_TYPE,
  DELETE_PORTRAIT,
  DELETE_PORTRAIT_FAILURE,
  DELETE_PORTRAIT_SUCCESS,
  UPDATE_MY_ACCOUNT_NAME_FAILURE,
  UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';
import { MyAccountActionTypes } from './types';

export const updateNameSuccess = (user: AppUser): MyAccountActionTypes => ({
  type: UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  payload: user,
});

export const updateNameFailure = (error: Error): MyAccountActionTypes => ({
  type: UPDATE_MY_ACCOUNT_NAME_FAILURE,
  payload: error,
  error: true,
});

export const updatePortraitRequest = (
  imgString: string,
): MyAccountActionTypes => ({
  type: UPDATE_PORTRAIT_REQUEST,
  payload: imgString,
});

export const updatePortraitSuccess = (): MyAccountActionTypes => ({
  type: UPDATE_PORTRAIT_SUCCESS,
});

export const updatePortraitFailure = (error: Error): MyAccountActionTypes => ({
  type: UPDATE_PORTRAIT_FAILURE,
  payload: { error },
  error: true,
});

export const deletePortraitRequest = (): MyAccountActionTypes => ({
  type: DELETE_PORTRAIT,
});

export const deletePortraitSuccess = (): MyAccountActionTypes => ({
  type: DELETE_PORTRAIT_SUCCESS,
});

export const deletePortraitFailure = (error: Error): MyAccountActionTypes => ({
  type: DELETE_PORTRAIT_FAILURE,
  payload: { error },
  error: true,
});

export const clearMessageType = (): MyAccountActionTypes => ({
  type: CLEAR_MESSAGE_TYPE,
});
