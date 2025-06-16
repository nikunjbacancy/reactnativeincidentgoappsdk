/**
 *
 * App reducer
 *
 */

import produce from 'immer';
import { HIDE_IOS_FOREGROUND_NOTIFICATION, SHOW_IOS_FOREGROUND_NOTIFICATION } from './constants';
export const initialState = {
  iosForegroundNotification: undefined
};
const notificationProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case SHOW_IOS_FOREGROUND_NOTIFICATION:
      draft.iosForegroundNotification = action.payload;
      break;
    case HIDE_IOS_FOREGROUND_NOTIFICATION:
      draft.iosForegroundNotification = undefined;
      break;
    default:
  }
}, initialState);
export default notificationProviderReducer;
//# sourceMappingURL=reducer.js.map