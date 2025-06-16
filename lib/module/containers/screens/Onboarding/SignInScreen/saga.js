/**
 *
 * SignInScreen saga
 *
 */

import * as api from '../../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import { sendCodeFailure, sendCodeSuccess } from './actions';
import { SEND_CODE_REQUEST } from './constants';
export function* sendCode({
  payload: {
    phone
  }
}) {
  try {
    const params = {
      phone: phone,
      isSDK: true
    };
    // //("-send code request param-->",params)
    yield call(api.auth.sendCode, params);
    // //("🚀 ~ file: saga.ts ~ line 18 ~ function*signin ~ response", JSON.stringify(response));
    yield put(sendCodeSuccess(phone));
  } catch (error) {
    yield put(sendCodeFailure(handleError(error)));
  }
}
export default function* signInScreenSaga() {
  yield takeLatest(SEND_CODE_REQUEST, sendCode);
}
//# sourceMappingURL=saga.js.map