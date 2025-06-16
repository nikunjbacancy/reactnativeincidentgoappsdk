/**
 *
 * NotificationProvider types
 *
 */
import { HIDE_IOS_FOREGROUND_NOTIFICATION, SHOW_IOS_FOREGROUND_NOTIFICATION } from './constants';
export type IOSForegroundNotification = {
    title: string;
    message: string;
    action(): void;
};
export interface NotificationProviderState {
    iosForegroundNotification?: IOSForegroundNotification;
}
export interface ShowIOSForegroundNotificationAction {
    type: typeof SHOW_IOS_FOREGROUND_NOTIFICATION;
    payload: IOSForegroundNotification;
}
export interface HideIOSForegroundNotificationAction {
    type: typeof HIDE_IOS_FOREGROUND_NOTIFICATION;
}
export type NotificationProviderActionTypes = ShowIOSForegroundNotificationAction | HideIOSForegroundNotificationAction;
