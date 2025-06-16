/**
 *
 * UpdateNameScreen actions
 *
 */

import { AppUser } from 'incident-code-core';

import { UPDATE_NAME_FAILURE, UPDATE_NAME_SUCCESS } from './constants';
import { UpdateNameActionTypes } from './types';

export const updateNameSuccess = (user: AppUser): UpdateNameActionTypes => ({
  type: UPDATE_NAME_SUCCESS,
  payload: user,
});

export const updateNameFailure = (error: Error): UpdateNameActionTypes => ({
  type: UPDATE_NAME_FAILURE,
  payload: error,
  error: true,
});
