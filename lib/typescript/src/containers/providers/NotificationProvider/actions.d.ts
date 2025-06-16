/**
 *
 * NotificationProvider actions
 *
 */
import { IOSForegroundNotification, NotificationProviderActionTypes } from './types';
export declare const showIOSForegroundNotification: (notification: IOSForegroundNotification) => NotificationProviderActionTypes;
export declare const hideIOSForegroundNotification: () => NotificationProviderActionTypes;
