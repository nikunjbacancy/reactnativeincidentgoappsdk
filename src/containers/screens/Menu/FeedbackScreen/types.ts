/**
 *
 * FeedbackScreen types
 *
 */

import {
  HIDE_SUCCESS_MODAL,
  SEND_FEEDBACK_FAILURE,
  SEND_FEEDBACK_REQUEST,
  SEND_FEEDBACK_SUCCESS,
  SHOW_SUCCESS_MODAL,
  UPDATE_USER_EMAIL,
} from './constants';

export type FeedbackRequest = {
  comment: string;
  email: string;
};

export interface FeedbackState {
  isSending: boolean;
  showSuccessModal: boolean;
}

export interface SendFeedbackRequestAction {
  type: typeof SEND_FEEDBACK_REQUEST;
  payload: FeedbackRequest;
}

export interface SendFeedbackSuccessAction {
  type: typeof SEND_FEEDBACK_SUCCESS;
}

export interface SendFeedbackFailureAction {
  type: typeof SEND_FEEDBACK_FAILURE;
  payload: Error;
  error: boolean;
}

export interface UpdateUserEmailAction {
  type: typeof UPDATE_USER_EMAIL;
  payload: string;
}

export interface ShowSuccessModalAction {
  type: typeof SHOW_SUCCESS_MODAL;
}

export interface HideSuccessModalAction {
  type: typeof HIDE_SUCCESS_MODAL;
}

export type FeedbackActionTypes =
  | SendFeedbackRequestAction
  | SendFeedbackSuccessAction
  | SendFeedbackFailureAction
  | UpdateUserEmailAction
  | ShowSuccessModalAction
  | HideSuccessModalAction;
