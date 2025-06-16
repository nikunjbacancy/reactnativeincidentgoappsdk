/**
 *
 * SignInCodeScreen actions
 *
 */

import { AccessToken } from 'incident-code-core';

import {
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS
} from './constants';
import { RegisterUserActionTypes } from './types';

export const registerUserRequest = (params: any): RegisterUserActionTypes => ({
  type: REGISTER_USER_REQUEST,
  payload: params,
});

export const registerUserSuccess = (
  accessToken: AccessToken,
): RegisterUserActionTypes => ({
  type: REGISTER_USER_SUCCESS,
  payload: accessToken,
});

export const registerUserFailure = (error: Error): RegisterUserActionTypes => ({
  type: REGISTER_USER_FAILURE,
  payload: error,
  error: true,
});
