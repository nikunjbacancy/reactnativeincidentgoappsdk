/**
 *
 * FeedbackScreen actions
 *
 */

import {
  HIDE_SUCCESS_MODAL,
  SEND_FEEDBACK_FAILURE,
  SEND_FEEDBACK_SUCCESS,
  SHOW_SUCCESS_MODAL,
  UPDATE_USER_EMAIL,
} from './constants';
import { FeedbackActionTypes } from './types';

export const sendFeedbackSuccess = (): FeedbackActionTypes => ({
  type: SEND_FEEDBACK_SUCCESS,
});

export const sendFeedbackFailure = (error: Error): FeedbackActionTypes => ({
  type: SEND_FEEDBACK_FAILURE,
  payload: error,
  error: true,
});

export const updateUserEmail = (email: string): FeedbackActionTypes => ({
  type: UPDATE_USER_EMAIL,
  payload: email,
});

export const showSuccessModal = (): FeedbackActionTypes => ({
  type: SHOW_SUCCESS_MODAL,
});

export const hideSuccessModal = (): FeedbackActionTypes => ({
  type: HIDE_SUCCESS_MODAL,
});
