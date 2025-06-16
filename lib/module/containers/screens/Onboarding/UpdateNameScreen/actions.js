/**
 *
 * UpdateNameScreen actions
 *
 */

import { UPDATE_NAME_FAILURE, UPDATE_NAME_SUCCESS } from './constants';
export const updateNameSuccess = user => ({
  type: UPDATE_NAME_SUCCESS,
  payload: user
});
export const updateNameFailure = error => ({
  type: UPDATE_NAME_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map