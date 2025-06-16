/**
 *
 * NotificationScreen types
 *
 */

import {
  NOTIFICATION_LIST_REQUEST,
  NOTIFICATION_LIST_FAILURE,
  NOTIFICATION_LIST_SUCCESS,
  UPDATE_READUNREAD_STATUS_FAILURE,
  UPDATE_READUNREAD_STATUS_REQUEST,
  UPDATE_READUNREAD_STATUS_SUCCESS,
  NOTIFICATION_LIST_RESET,
  NOTIFICATION_UNREAD_COUNT,
  RESET_UPDATE_READUNREAD_STATUS,
  READ_ALL_NOTIFICATION_FAILURE,
  READ_ALL_NOTIFICATION_REQUEST,
  READ_ALL_NOTIFICATION_SUCCESS
} from './constants';



export interface NotificationListRequestAction {
  type: typeof NOTIFICATION_LIST_REQUEST;
  payload: any;
}

export interface NotificationListSuccessAction {
  type: typeof NOTIFICATION_LIST_SUCCESS;
  payload: any;
}

export interface NotificationListFailureAction {
  type: typeof NOTIFICATION_LIST_FAILURE;
  payload: Error;
  error: any;
}

export interface NotificationListResetAction {
  type: typeof NOTIFICATION_LIST_RESET;
  payload: any;
}

export interface NotificationUnreadCountAction {
  type: typeof NOTIFICATION_UNREAD_COUNT;
  count: number;
}

export interface NotificationListState {
  isLoading: boolean,
  listData: any,
  unreadCount: number,
  notiReadData: any
}

export interface NotificationReadUnreadRequestAction {
  type: typeof UPDATE_READUNREAD_STATUS_REQUEST;
  payload: any;
}

export interface NotificationReadUnreadSuccessAction {
  type: typeof UPDATE_READUNREAD_STATUS_SUCCESS;
  payload: any;
}

export interface ResetNotificationReadUnreadAction {
  type: typeof RESET_UPDATE_READUNREAD_STATUS;
}

export interface NotificationReadUnreadFailureAction {
  type: typeof UPDATE_READUNREAD_STATUS_FAILURE;
  payload: Error;
  error: any;
}

export interface ReadAllNotificationRequestAction {
  type: typeof READ_ALL_NOTIFICATION_REQUEST;
  payload: any;
}

export interface ReadAllNotificationSuccessAction {
  type: typeof READ_ALL_NOTIFICATION_SUCCESS;
  payload: any;
}

export interface ReadAllNotificationFailureAction {
  type: typeof READ_ALL_NOTIFICATION_FAILURE;
  payload: Error;
  error: any;
}


export type NotificationListActionTypes =
  | NotificationListRequestAction
  | NotificationListSuccessAction
  | NotificationListFailureAction
  | NotificationListResetAction
  | NotificationReadUnreadRequestAction
  | NotificationReadUnreadSuccessAction
  | NotificationReadUnreadFailureAction
  | ResetNotificationReadUnreadAction
  | NotificationUnreadCountAction
  | ReadAllNotificationRequestAction
  | ReadAllNotificationSuccessAction
  | ReadAllNotificationFailureAction
  
