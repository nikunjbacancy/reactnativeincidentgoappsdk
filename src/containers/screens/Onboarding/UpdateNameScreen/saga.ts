/**
 *
 * UpdateNameScreen saga
 *
 */

import * as api from '../../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';

import { updateNameFailure, updateNameSuccess } from './actions';
import { UPDATE_NAME_REQUEST } from './constants';
import { UpdateNameRequestAction } from './types';

export function* updateName({ payload }: UpdateNameRequestAction) {
  try {
    //("update name request=>",payload)
    yield call(api.user.updateName, payload);
    //("update name success=>",payload)
    yield put(updateNameSuccess(payload));
  } catch (error: any) {
    //("update name error=>",error)
    yield put(updateNameFailure(handleError(error)));
  }
}

export default function* updateNameScreenSaga() {
  yield takeLatest(UPDATE_NAME_REQUEST, updateName);
}
