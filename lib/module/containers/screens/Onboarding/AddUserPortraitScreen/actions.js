/**
 *
 * AddUserPortraitScreen actions
 *
 */
import { CLEAR_MESSAGE_TYPE, UPDATE_PORTRAIT_FAILURE, UPDATE_PORTRAIT_REQUEST, UPDATE_PORTRAIT_SUCCESS } from './constants';
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
export const clearMessageType = () => ({
  type: CLEAR_MESSAGE_TYPE
});
//# sourceMappingURL=actions.js.map