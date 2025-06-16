"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetNotificationReadUnreadStatus = exports.resetNotificationList = exports.readAllNotificationSuccess = exports.readAllNotificationStatusFailure = exports.readAllNotificationRequest = exports.notificationUnreadCount = exports.notificationReadUnreadStatusSuccess = exports.notificationReadUnreadStatusRequest = exports.notificationReadUnreadStatusFailure = exports.notificationListSuccess = exports.notificationListRequest = exports.notificationListFailure = void 0;
var _constants = require("./constants");
/**
 *
 * NotificationScreen actions
 *
 */

const notificationListRequest = object => ({
  type: _constants.NOTIFICATION_LIST_REQUEST,
  payload: object
});
exports.notificationListRequest = notificationListRequest;
const notificationListSuccess = object => ({
  type: _constants.NOTIFICATION_LIST_SUCCESS,
  payload: object
});
exports.notificationListSuccess = notificationListSuccess;
const notificationUnreadCount = count => ({
  type: _constants.NOTIFICATION_UNREAD_COUNT,
  count: count
});
exports.notificationUnreadCount = notificationUnreadCount;
const notificationListFailure = error => ({
  type: _constants.NOTIFICATION_LIST_FAILURE,
  payload: error,
  error: true
});
exports.notificationListFailure = notificationListFailure;
const resetNotificationList = object => ({
  type: _constants.NOTIFICATION_LIST_RESET,
  payload: object
});
exports.resetNotificationList = resetNotificationList;
const notificationReadUnreadStatusRequest = object => ({
  type: _constants.UPDATE_READUNREAD_STATUS_REQUEST,
  payload: object
});
exports.notificationReadUnreadStatusRequest = notificationReadUnreadStatusRequest;
const notificationReadUnreadStatusSuccess = object => ({
  type: _constants.UPDATE_READUNREAD_STATUS_SUCCESS,
  payload: object
});
exports.notificationReadUnreadStatusSuccess = notificationReadUnreadStatusSuccess;
const resetNotificationReadUnreadStatus = () => ({
  type: _constants.RESET_UPDATE_READUNREAD_STATUS
});
exports.resetNotificationReadUnreadStatus = resetNotificationReadUnreadStatus;
const notificationReadUnreadStatusFailure = error => ({
  type: _constants.UPDATE_READUNREAD_STATUS_FAILURE,
  payload: error,
  error: true
});
exports.notificationReadUnreadStatusFailure = notificationReadUnreadStatusFailure;
const readAllNotificationRequest = object => ({
  type: _constants.READ_ALL_NOTIFICATION_REQUEST,
  payload: object
});
exports.readAllNotificationRequest = readAllNotificationRequest;
const readAllNotificationSuccess = object => ({
  type: _constants.READ_ALL_NOTIFICATION_SUCCESS,
  payload: object
});
exports.readAllNotificationSuccess = readAllNotificationSuccess;
const readAllNotificationStatusFailure = error => ({
  type: _constants.UPDATE_READUNREAD_STATUS_FAILURE,
  payload: error,
  error: true
});
exports.readAllNotificationStatusFailure = readAllNotificationStatusFailure;
//# sourceMappingURL=actions.js.map