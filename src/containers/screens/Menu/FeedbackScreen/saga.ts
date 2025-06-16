/**
 *
 * FeedbackScreen saga
 *
 */

import * as api from '../../../../api';
import { Feedback } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getInfo, getVersion } from '../../../../utils/device';
import { handleError } from '../../../../utils/error';

import {
  sendFeedbackFailure,
  sendFeedbackSuccess,
  updateUserEmail,
} from './actions';
import { SEND_FEEDBACK_REQUEST } from './constants';
import { SendFeedbackRequestAction } from './types';

export function* sendFeedback({ payload }: SendFeedbackRequestAction) {
  const feedback: Feedback = {
    message: payload.comment,
    extra: { email: payload.email },
    device: getInfo(),
    version: getVersion(),
  };
  try {
    yield call(api.feedback.send, feedback);
    yield put(updateUserEmail(payload.email));
    yield put(sendFeedbackSuccess());
  } catch (error: any) {
    yield put(sendFeedbackFailure(handleError(error)));
  }
}

export default function* feedbackScreenSaga() {
  yield takeLatest(SEND_FEEDBACK_REQUEST, sendFeedback);
}
