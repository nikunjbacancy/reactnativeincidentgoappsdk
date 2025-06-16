/**
 *
 * NotificationScreen actions
 *
 */
import { NotificationListActionTypes } from './types';
export declare const notificationListRequest: (object: any) => NotificationListActionTypes;
export declare const notificationListSuccess: (object: any) => NotificationListActionTypes;
export declare const notificationUnreadCount: (count: any) => NotificationListActionTypes;
export declare const notificationListFailure: (error: Error) => NotificationListActionTypes;
export declare const resetNotificationList: (object: any) => NotificationListActionTypes;
export declare const notificationReadUnreadStatusRequest: (object: any) => NotificationListActionTypes;
export declare const notificationReadUnreadStatusSuccess: (object: any) => NotificationListActionTypes;
export declare const resetNotificationReadUnreadStatus: () => NotificationListActionTypes;
export declare const notificationReadUnreadStatusFailure: (error: Error) => NotificationListActionTypes;
export declare const readAllNotificationRequest: (object: any) => NotificationListActionTypes;
export declare const readAllNotificationSuccess: (object: any) => NotificationListActionTypes;
export declare const readAllNotificationStatusFailure: (error: Error) => NotificationListActionTypes;
