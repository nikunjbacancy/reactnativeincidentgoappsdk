/**
 *
 * App reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  HIDE_IOS_FOREGROUND_NOTIFICATION,
  SHOW_IOS_FOREGROUND_NOTIFICATION,
} from './constants';
import {
  NotificationProviderActionTypes,
  NotificationProviderState,
} from './types';

export const initialState: NotificationProviderState = {
  iosForegroundNotification: undefined,
};

const notificationProviderReducer = produce(
  (
    draft: Draft<NotificationProviderState>,
    action: NotificationProviderActionTypes,
  ) => {
    switch (action.type) {
      case SHOW_IOS_FOREGROUND_NOTIFICATION:
        draft.iosForegroundNotification = action.payload;
        break;
      case HIDE_IOS_FOREGROUND_NOTIFICATION:
        draft.iosForegroundNotification = undefined;
        break;
      default:
    }
  },
  initialState,
);

export default notificationProviderReducer;
