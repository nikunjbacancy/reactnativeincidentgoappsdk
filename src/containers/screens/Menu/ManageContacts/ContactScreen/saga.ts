/**
 *
 * ContactScreen saga
 *
 */

import * as api from '../../../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';

import {
  deleteContactFailure,
  deleteContactSuccess,
  toggleContactNotificationFailure,
  toggleContactNotificationSuccess,
} from './actions';
import {
  DELETE_CONTACT_REQUEST,
  TOGGLE_CONTACT_NOTIFICATION_REQUEST,
} from './constants';
import {
  DeleteContactRequestAction,
  ToggleContactNotificationRequestAction,
} from './types';

export function* toggleContactNotification({
  payload,
}: ToggleContactNotificationRequestAction) {
  try {
    yield call(api.user.updateContact, payload);
    yield put(toggleContactNotificationSuccess(payload));
  } catch (error: any) {
    yield put(toggleContactNotificationFailure(handleError(error)));
  }
}

export function* deleteContact({ payload }: DeleteContactRequestAction) {
  try {
    yield call(api.user.deleteContact, payload);
    yield put(deleteContactSuccess(payload));
  } catch (error: any) {
    yield put(deleteContactFailure(handleError(error)));
  }
}

export default function* contactScreenSaga() {
  yield takeLatest(
    TOGGLE_CONTACT_NOTIFICATION_REQUEST,
    toggleContactNotification,
  );
  yield takeLatest(DELETE_CONTACT_REQUEST, deleteContact);
}
