/**
 *
 * NotificationProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the NotificationProvider state domain
 */

const selectNotificationProviderStateDomain = state => state.notificationProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectIOSForegroundNotification = () => createSelector(selectNotificationProviderStateDomain, ({
  iosForegroundNotification
}) => iosForegroundNotification);

/**
 * Default selector used by NotificationProvider
 */

const makeSelectNotificationProviderState = () => createSelector(selectNotificationProviderStateDomain, subState => subState);
export default makeSelectNotificationProviderState;
export { selectNotificationProviderStateDomain, makeSelectIOSForegroundNotification };
//# sourceMappingURL=selectors.js.map