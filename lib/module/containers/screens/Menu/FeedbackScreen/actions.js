/**
 *
 * FeedbackScreen actions
 *
 */

import { HIDE_SUCCESS_MODAL, SEND_FEEDBACK_FAILURE, SEND_FEEDBACK_SUCCESS, SHOW_SUCCESS_MODAL, UPDATE_USER_EMAIL } from './constants';
export const sendFeedbackSuccess = () => ({
  type: SEND_FEEDBACK_SUCCESS
});
export const sendFeedbackFailure = error => ({
  type: SEND_FEEDBACK_FAILURE,
  payload: error,
  error: true
});
export const updateUserEmail = email => ({
  type: UPDATE_USER_EMAIL,
  payload: email
});
export const showSuccessModal = () => ({
  type: SHOW_SUCCESS_MODAL
});
export const hideSuccessModal = () => ({
  type: HIDE_SUCCESS_MODAL
});
//# sourceMappingURL=actions.js.map