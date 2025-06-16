/**
 *
 * FeedbackScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  HIDE_SUCCESS_MODAL,
  SEND_FEEDBACK_FAILURE,
  SEND_FEEDBACK_REQUEST,
  SEND_FEEDBACK_SUCCESS,
} from './constants';
import { FeedbackActionTypes, FeedbackState } from './types';

export const initialState: FeedbackState = {
  isSending: false,
  showSuccessModal: false,
};

const feedbackScreenReducer = produce(
  (draft: Draft<FeedbackState>, action: FeedbackActionTypes) => {
    switch (action.type) {
      case SEND_FEEDBACK_REQUEST:
        draft.isSending = true;
        break;
      case SEND_FEEDBACK_SUCCESS:
        draft.isSending = false;
        draft.showSuccessModal = true;
        break;
      case SEND_FEEDBACK_FAILURE:
        draft.isSending = false;
        break;
      case HIDE_SUCCESS_MODAL:
        draft.showSuccessModal = false;
        break;
      default:
    }
  },
  initialState,
);

export default feedbackScreenReducer;
