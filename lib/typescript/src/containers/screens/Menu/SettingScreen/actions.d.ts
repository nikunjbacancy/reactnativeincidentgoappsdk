/**
 *
 * NotificationScreen actions
 *
 */
import { NotificationActionTypes } from './types';
export declare const toggleUserNotificationRequest: (toggle: boolean) => NotificationActionTypes;
export declare const toggleUserNotificationSuccess: (toggle: boolean) => NotificationActionTypes;
export declare const toggleUserNotificationFailure: (error: Error) => NotificationActionTypes;
export declare const deleteUserRequest: (phone: string) => NotificationActionTypes;
export declare const deleteUserSucess: (object: any) => NotificationActionTypes;
export declare const resetDeleteUser: (object: any) => NotificationActionTypes;
export declare const deleteUserFailure: (error: Error) => NotificationActionTypes;
