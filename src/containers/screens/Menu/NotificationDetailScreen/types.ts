/**
 *
 * NotificationScreen types
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

export interface ToggleUserNotificationRequestAction {
  type: typeof TOGGLE_USER_NOTIFICATION_REQUEST;
  payload: boolean;
}

export interface ToggleUserNotificationSuccessAction {
  type: typeof TOGGLE_USER_NOTIFICATION_SUCCESS;
  payload: boolean;
}

export interface ToggleUserNotificationFailureAction {
  type: typeof TOGGLE_USER_NOTIFICATION_FAILURE;
  payload: Error;
  error: boolean;
}

export interface DeleteAccountState {
  isLoading: boolean,
  userData: null
}


export interface DeleteUserRequest {
  type: typeof DELETE_USER_REQUEST;
  payload: string;
}

export interface DeleteUserSuccessAction {
  type: typeof DELETE_USER_SUCCESS;
  data: any;
}

export interface ResetDeleteUserAction {
  type: typeof RESET_DELETE_USER;
  data: any;
}

export interface DeleteUserFailureAction {
  type: typeof DELETE_USER_FAILURE;
  error: boolean;
}

export type NotificationActionTypes =
  | ToggleUserNotificationRequestAction
  | ToggleUserNotificationSuccessAction
  | ToggleUserNotificationFailureAction
  | DeleteUserRequest
  | DeleteUserSuccessAction
  | DeleteUserFailureAction
  | ResetDeleteUserAction;

