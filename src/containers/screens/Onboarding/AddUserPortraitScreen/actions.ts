/**
 *
 * AddUserPortraitScreen actions
 *
 */
import {
  CLEAR_MESSAGE_TYPE,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';
import { AddUserPortraitActionTypes } from './types';

export const updatePortraitRequest = (
  imgString: string,
): AddUserPortraitActionTypes => ({
  type: UPDATE_PORTRAIT_REQUEST,
  payload: imgString,
});

export const updatePortraitSuccess = (): AddUserPortraitActionTypes => ({
  type: UPDATE_PORTRAIT_SUCCESS,
});

export const updatePortraitFailure = (
  error: Error,
): AddUserPortraitActionTypes => ({
  type: UPDATE_PORTRAIT_FAILURE,
  payload: { error },
  error: true,
});

export const clearMessageType = (): AddUserPortraitActionTypes => ({
  type: CLEAR_MESSAGE_TYPE,
});
