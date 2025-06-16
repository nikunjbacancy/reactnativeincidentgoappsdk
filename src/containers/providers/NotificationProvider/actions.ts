/**
 *
 * NotificationProvider actions
 *
 */

import {
  HIDE_IOS_FOREGROUND_NOTIFICATION,
  SHOW_IOS_FOREGROUND_NOTIFICATION,
} from './constants';
import {
  IOSForegroundNotification,
  NotificationProviderActionTypes,
} from './types';

export const showIOSForegroundNotification = (
  notification: IOSForegroundNotification,
): NotificationProviderActionTypes => ({
  type: SHOW_IOS_FOREGROUND_NOTIFICATION,
  payload: notification,
});

export const hideIOSForegroundNotification = (): NotificationProviderActionTypes => ({
  type: HIDE_IOS_FOREGROUND_NOTIFICATION,
});
