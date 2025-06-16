import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

const notificationListStateDomain = (state: RootState) =>
    state.notificationListState || initialState;

const makeSelectIsLoading = () =>
    createSelector( notificationListStateDomain,({ isLoading }) => isLoading);

const makeSelectNotificatioons = () =>
    createSelector(notificationListStateDomain, ({ listData }) => listData);

const makeSelectNotificationListState = () =>
    createSelector(notificationListStateDomain, object => object);


export default makeSelectNotificationListState;
export { makeSelectIsLoading , makeSelectNotificatioons};
