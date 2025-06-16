/**
 *
 * NotificationScreen actions
 *
 */

import {
  TOGGLE_USER_NOTIFICATION_FAILURE,
  TOGGLE_USER_NOTIFICATION_REQUEST,
  TOGGLE_USER_NOTIFICATION_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  RESET_DELETE_USER
} from './constants';
import { NotificationActionTypes } from './types';

export const toggleUserNotificationRequest = (
  toggle: boolean,
): NotificationActionTypes => ({
  type: TOGGLE_USER_NOTIFICATION_REQUEST,
  payload: toggle,
});

export const toggleUserNotificationSuccess = (
  toggle: boolean,
): NotificationActionTypes => ({
  type: TOGGLE_USER_NOTIFICATION_SUCCESS,
  payload: toggle,
});

export const toggleUserNotificationFailure = (
  error: Error,
): NotificationActionTypes => ({
  type: TOGGLE_USER_NOTIFICATION_FAILURE,
  payload: error,
  error: true,
});

export const deleteUserRequest = (
  phone: string,
): NotificationActionTypes => ({
  type: DELETE_USER_REQUEST,
  payload: phone,
});

export const deleteUserSucess = (
  object: any,
): NotificationActionTypes => ({
  type: DELETE_USER_SUCCESS,
  data: object,
});


export const resetDeleteUser = (
  object: any,
): NotificationActionTypes => ({
  type: RESET_DELETE_USER,
  data: object,
});

export const deleteUserFailure = (
  error: Error,
): NotificationActionTypes => ({
  type: DELETE_USER_FAILURE,
  error: true,
});
