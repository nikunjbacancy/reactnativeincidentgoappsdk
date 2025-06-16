/**
 *
 * NotificationProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the NotificationProvider state domain
 */

const selectNotificationProviderStateDomain = (state: RootState) =>
  state.notificationProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectIOSForegroundNotification = () =>
  createSelector(
    selectNotificationProviderStateDomain,
    ({ iosForegroundNotification }) => iosForegroundNotification,
  );

/**
 * Default selector used by NotificationProvider
 */

const makeSelectNotificationProviderState = () =>
  createSelector(selectNotificationProviderStateDomain, subState => subState);

export default makeSelectNotificationProviderState;
export {
  selectNotificationProviderStateDomain,
  makeSelectIOSForegroundNotification,
};
