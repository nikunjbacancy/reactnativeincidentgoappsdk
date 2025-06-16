/**
 *
 * FeedbackScreen saga
 *
 */

import * as api from '../../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getInfo, getVersion } from '../../../../utils/device';
import { handleError } from '../../../../utils/error';
import { sendFeedbackFailure, sendFeedbackSuccess, updateUserEmail } from './actions';
import { SEND_FEEDBACK_REQUEST } from './constants';
export function* sendFeedback({
  payload
}) {
  const feedback = {
    message: payload.comment,
    extra: {
      email: payload.email
    },
    device: getInfo(),
    version: getVersion()
  };
  try {
    yield call(api.feedback.send, feedback);
    yield put(updateUserEmail(payload.email));
    yield put(sendFeedbackSuccess());
  } catch (error) {
    yield put(sendFeedbackFailure(handleError(error)));
  }
}
export default function* feedbackScreenSaga() {
  yield takeLatest(SEND_FEEDBACK_REQUEST, sendFeedback);
}
//# sourceMappingURL=saga.js.map