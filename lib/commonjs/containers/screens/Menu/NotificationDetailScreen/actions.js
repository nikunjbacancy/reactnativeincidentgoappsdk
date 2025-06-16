"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleUserNotificationSuccess = exports.toggleUserNotificationRequest = exports.toggleUserNotificationFailure = exports.resetDeleteUser = exports.deleteUserSucess = exports.deleteUserRequest = exports.deleteUserFailure = void 0;
var _constants = require("./constants");
/**
 *
 * NotificationScreen actions
 *
 */

const toggleUserNotificationRequest = toggle => ({
  type: _constants.TOGGLE_USER_NOTIFICATION_REQUEST,
  payload: toggle
});
exports.toggleUserNotificationRequest = toggleUserNotificationRequest;
const toggleUserNotificationSuccess = toggle => ({
  type: _constants.TOGGLE_USER_NOTIFICATION_SUCCESS,
  payload: toggle
});
exports.toggleUserNotificationSuccess = toggleUserNotificationSuccess;
const toggleUserNotificationFailure = error => ({
  type: _constants.TOGGLE_USER_NOTIFICATION_FAILURE,
  payload: error,
  error: true
});
exports.toggleUserNotificationFailure = toggleUserNotificationFailure;
const deleteUserRequest = phone => ({
  type: _constants.DELETE_USER_REQUEST,
  payload: phone
});
exports.deleteUserRequest = deleteUserRequest;
const deleteUserSucess = object => ({
  type: _constants.DELETE_USER_SUCCESS,
  data: object
});
exports.deleteUserSucess = deleteUserSucess;
const resetDeleteUser = object => ({
  type: _constants.RESET_DELETE_USER,
  data: object
});
exports.resetDeleteUser = resetDeleteUser;
const deleteUserFailure = error => ({
  type: _constants.DELETE_USER_FAILURE,
  error: true
});
exports.deleteUserFailure = deleteUserFailure;
//# sourceMappingURL=actions.js.map