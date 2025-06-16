/**
 *
 * NotificationScreen saga
 *
 */

import * as api from 'api';
import { UserSettingKey } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { toggleUserNotificationFailure, toggleUserNotificationSuccess } from './actions';
import { TOGGLE_USER_NOTIFICATION_REQUEST } from './constants';
// import Toast from 'react-native-root-toast';

export function* toggleUserNotification({
  payload
}) {
  console.log("api.user.setSetting,:" + api.user.setSetting);
  console.log("UserSettingKey.NotificationEnabled,:" + UserSettingKey.NotificationEnabled);
  console.log("payload:" + payload);
  try {
    yield call(api.user.setSetting, UserSettingKey.NotificationEnabled, payload);
    yield put(toggleUserNotificationSuccess(payload));
  } catch (error) {
    yield put(toggleUserNotificationFailure(error));
  }
}

// export function* accountDelete({
//   payload,
// }: DeleteUserRequest) {
//   // console.log("payload:" + payload);
//   try {
//     // console.log("payload 2:" + payload);
//     const response = yield call(api.user.accountDelete, payload);
//     yield put(deleteUserSucess(response.data));
//   } catch (error) {
//     Toast.show(error.message, {
//       position: Toast.positions.CENTER,
//       duration: 3000
//     });
//     yield put(deleteUserFailure(handleError(error)));
//   }
// }

export default function* notificationScreenSaga() {
  yield takeLatest(TOGGLE_USER_NOTIFICATION_REQUEST, toggleUserNotification);
  // yield takeLatest(DELETE_USER_REQUEST, accountDelete);
}
//# sourceMappingURL=saga.js.map