/**
 *
 * MyTipsScreen actions
 *
 */

import { ADD_PAGE_INDEX, GET_TIPS_FAILURE, GET_TIPS_REQUEST, GET_TIPS_SUCCESS, RESET_STATE, SET_HAS_MORE_DATA } from './constants';
export const getTipsRequest = payload => ({
  type: GET_TIPS_REQUEST,
  payload
});
export const getTipsSuccess = payload => ({
  type: GET_TIPS_SUCCESS,
  payload
});
export const getTipsFailure = error => ({
  type: GET_TIPS_FAILURE,
  payload: error,
  error: true
});
export const addPageIndex = tipStatus => ({
  type: ADD_PAGE_INDEX,
  payload: tipStatus
});
export const setHasMoreData = payload => ({
  type: SET_HAS_MORE_DATA,
  payload
});
export const resetState = () => ({
  type: RESET_STATE
});
//# sourceMappingURL=actions.js.map