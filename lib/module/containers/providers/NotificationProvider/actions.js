/**
 *
 * NotificationProvider actions
 *
 */

import { HIDE_IOS_FOREGROUND_NOTIFICATION, SHOW_IOS_FOREGROUND_NOTIFICATION } from './constants';
export const showIOSForegroundNotification = notification => ({
  type: SHOW_IOS_FOREGROUND_NOTIFICATION,
  payload: notification
});
export const hideIOSForegroundNotification = () => ({
  type: HIDE_IOS_FOREGROUND_NOTIFICATION
});
//# sourceMappingURL=actions.js.map