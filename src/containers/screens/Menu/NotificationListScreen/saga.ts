/**
 *
 * NotificationScreen saga
 *
 */

import * as api from '../../../../api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';

import {
  notificationListFailure,
  notificationListSuccess,
  notificationReadUnreadStatusSuccess,
  notificationReadUnreadStatusFailure,
  readAllNotificationSuccess,
  readAllNotificationStatusFailure
} from './actions';
import { NOTIFICATION_LIST_REQUEST, READ_ALL_NOTIFICATION_REQUEST, UPDATE_READUNREAD_STATUS_REQUEST } from './constants';
import { NotificationListRequestAction } from './types';
import Toast from 'react-native-root-toast';

export function* getNotificationList({
  payload,
}: NotificationListRequestAction) {
  try {
    console.log("getNotificationList request===>",payload)
    const response = yield call(api.user.getNotificationList, payload);
    // console.log("notification list response ===>",JSON.stringify(response))
    yield put(notificationListSuccess(response.data));
  } catch (error) {
    Toast.show((error as Error).message, {
      position: Toast.positions.CENTER,
      duration: 3000
    });
    yield put(notificationListFailure(error as Error));
  }
}

export function* readAllNotification({
  payload,
}: NotificationListRequestAction) {
  try {
    console.log("readall payload=>",payload)
    const response = yield call(api.user.readAllNotification, payload);
    // console.log("readAllNotification response ===>",JSON.stringify(response))
    yield put(readAllNotificationSuccess(response.data));
  } catch (error) {
    Toast.show((error as Error).message, {
      position: Toast.positions.CENTER,
      duration: 3000
    });
    yield put(readAllNotificationStatusFailure(error as Error));
  }
}


export function* updateReadUnreadStatus({
  payload,
}: NotificationListRequestAction) {
  try {
    let isReadUnreadFrom = payload.readFrom
    delete payload.readFrom
    let response = yield call(api.user.updateReadUnreadNotificationStatus, payload);
    const updatedResponse = {...response.data, isReadFrom: isReadUnreadFrom };
    // console.log('*****update Read Unread Status API call successful:',JSON.stringify(updatedResponse));
    yield put(notificationReadUnreadStatusSuccess(updatedResponse));
  } catch (error) {
    // console.log("updateReadUnreadStatus error===>",error)
    yield put(notificationReadUnreadStatusFailure(error as Error));
  }
}

export default function* notificationListScreenSaga() {
  yield takeLatest(NOTIFICATION_LIST_REQUEST, getNotificationList);
  yield takeLatest(UPDATE_READUNREAD_STATUS_REQUEST, updateReadUnreadStatus);
  yield takeLatest(READ_ALL_NOTIFICATION_REQUEST, readAllNotification);
}
