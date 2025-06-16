/**
 *
 * MyAccountScreen actions
 *
 */

import { CLEAR_MESSAGE_TYPE, DELETE_PORTRAIT, DELETE_PORTRAIT_FAILURE, DELETE_PORTRAIT_SUCCESS, UPDATE_MY_ACCOUNT_NAME_FAILURE, UPDATE_MY_ACCOUNT_NAME_SUCCESS, UPDATE_PORTRAIT_FAILURE, UPDATE_PORTRAIT_REQUEST, UPDATE_PORTRAIT_SUCCESS } from './constants';
export const updateNameSuccess = user => ({
  type: UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  payload: user
});
export const updateNameFailure = error => ({
  type: UPDATE_MY_ACCOUNT_NAME_FAILURE,
  payload: error,
  error: true
});
export const updatePortraitRequest = imgString => ({
  type: UPDATE_PORTRAIT_REQUEST,
  payload: imgString
});
export const updatePortraitSuccess = () => ({
  type: UPDATE_PORTRAIT_SUCCESS
});
export const updatePortraitFailure = error => ({
  type: UPDATE_PORTRAIT_FAILURE,
  payload: {
    error
  },
  error: true
});
export const deletePortraitRequest = () => ({
  type: DELETE_PORTRAIT
});
export const deletePortraitSuccess = () => ({
  type: DELETE_PORTRAIT_SUCCESS
});
export const deletePortraitFailure = error => ({
  type: DELETE_PORTRAIT_FAILURE,
  payload: {
    error
  },
  error: true
});
export const clearMessageType = () => ({
  type: CLEAR_MESSAGE_TYPE
});
//# sourceMappingURL=actions.js.map