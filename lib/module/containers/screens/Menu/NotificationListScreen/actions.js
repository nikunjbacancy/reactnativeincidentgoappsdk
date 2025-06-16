/**
 *
 * NotificationScreen actions
 *
 */

import { NOTIFICATION_LIST_REQUEST, NOTIFICATION_LIST_FAILURE, NOTIFICATION_LIST_SUCCESS, UPDATE_READUNREAD_STATUS_FAILURE, UPDATE_READUNREAD_STATUS_REQUEST, UPDATE_READUNREAD_STATUS_SUCCESS, NOTIFICATION_LIST_RESET, NOTIFICATION_UNREAD_COUNT, RESET_UPDATE_READUNREAD_STATUS, READ_ALL_NOTIFICATION_REQUEST, READ_ALL_NOTIFICATION_SUCCESS } from './constants';
export const notificationListRequest = object => ({
  type: NOTIFICATION_LIST_REQUEST,
  payload: object
});
export const notificationListSuccess = object => ({
  type: NOTIFICATION_LIST_SUCCESS,
  payload: object
});
export const notificationUnreadCount = count => ({
  type: NOTIFICATION_UNREAD_COUNT,
  count: count
});
export const notificationListFailure = error => ({
  type: NOTIFICATION_LIST_FAILURE,
  payload: error,
  error: true
});
export const resetNotificationList = object => ({
  type: NOTIFICATION_LIST_RESET,
  payload: object
});
export const notificationReadUnreadStatusRequest = object => ({
  type: UPDATE_READUNREAD_STATUS_REQUEST,
  payload: object
});
export const notificationReadUnreadStatusSuccess = object => ({
  type: UPDATE_READUNREAD_STATUS_SUCCESS,
  payload: object
});
export const resetNotificationReadUnreadStatus = () => ({
  type: RESET_UPDATE_READUNREAD_STATUS
});
export const notificationReadUnreadStatusFailure = error => ({
  type: UPDATE_READUNREAD_STATUS_FAILURE,
  payload: error,
  error: true
});
export const readAllNotificationRequest = object => ({
  type: READ_ALL_NOTIFICATION_REQUEST,
  payload: object
});
export const readAllNotificationSuccess = object => ({
  type: READ_ALL_NOTIFICATION_SUCCESS,
  payload: object
});
export const readAllNotificationStatusFailure = error => ({
  type: UPDATE_READUNREAD_STATUS_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map