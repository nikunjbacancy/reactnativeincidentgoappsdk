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
import { SendCodeRequestAction } from './types';

export function* sendCode({ payload: { phone } }: SendCodeRequestAction):any {
  try {
    const params = {
      phone: phone,
      isSDK: true,
    };
    // //("-send code request param-->",params)
    yield call(api.auth.sendCode, params);
    // //("🚀 ~ file: saga.ts ~ line 18 ~ function*signin ~ response", JSON.stringify(response));
    yield put(sendCodeSuccess(phone));
  } catch (error: any) {
    yield put(sendCodeFailure(handleError(error)));
  }
}

export default function* signInScreenSaga() {
  yield takeLatest(SEND_CODE_REQUEST, sendCode);
}
