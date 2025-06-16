/**
 *
 * AddCommentScreen actions
 *
 */

import { ADD_INCIDENT_COMMENT, CREATE_TIP_FAILURE, CREATE_TIP_REQUEST, CREATE_TIP_SUCCESS } from './constants';
export const addComment = comment => ({
  type: ADD_INCIDENT_COMMENT,
  payload: comment
});
export const createTipRequest = payload => ({
  type: CREATE_TIP_REQUEST,
  payload
});
export const createTipSuccess = () => ({
  type: CREATE_TIP_SUCCESS
});
export const createTipFailure = error => ({
  type: CREATE_TIP_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map