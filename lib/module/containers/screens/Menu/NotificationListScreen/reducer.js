/**
 *
 * AddContactScreen reducer
 *
 */

import produce from 'immer';
import { NOTIFICATION_LIST_REQUEST, NOTIFICATION_LIST_SUCCESS, NOTIFICATION_LIST_FAILURE, NOTIFICATION_LIST_RESET, UPDATE_READUNREAD_STATUS_FAILURE, UPDATE_READUNREAD_STATUS_REQUEST, UPDATE_READUNREAD_STATUS_SUCCESS, NOTIFICATION_UNREAD_COUNT, RESET_UPDATE_READUNREAD_STATUS, READ_ALL_NOTIFICATION_REQUEST, READ_ALL_NOTIFICATION_SUCCESS } from './constants';
export const initialState = {
  isLoading: true,
  listData: null,
  unreadCount: 0,
  notiReadData: null
};
const notificationListReducer = produce((draft, action) => {
  switch (action.type) {
    case NOTIFICATION_LIST_REQUEST:
      draft.isLoading = true;
      break;
    case NOTIFICATION_LIST_SUCCESS:
      draft.isLoading = false;
      draft.listData = action.payload;
      draft.unreadCount = action.payload.totalUnreadNotificationCount;
      break;
    case NOTIFICATION_LIST_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case NOTIFICATION_LIST_RESET:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case NOTIFICATION_UNREAD_COUNT:
      draft.unreadCount = action.count;
      break;
    case UPDATE_READUNREAD_STATUS_REQUEST:
      if (draft.listData) {
        const updatedListData = draft.listData.records.map(item => {
          if (item.id === action.payload.notiId) {
            item.isRead = true;
          }
          return item;
        });
        draft.listData.records = updatedListData;
      }
      draft.isLoading = false;
      break;
    case UPDATE_READUNREAD_STATUS_SUCCESS:
      draft.unreadCount = action.payload.totalUnreadNotificationCount;
      if (action.payload.currentStatus.pnMessage.data.type == "Location" && action.payload.isReadFrom == "app") {
        draft.notiReadData = action.payload;
      }
      break;
    case RESET_UPDATE_READUNREAD_STATUS:
      draft.notiReadData = null;
      break;
    case UPDATE_READUNREAD_STATUS_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case UPDATE_READUNREAD_STATUS_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case READ_ALL_NOTIFICATION_REQUEST:
      draft.unreadCount = 0;
      break;
    case READ_ALL_NOTIFICATION_SUCCESS:
      if (draft.listData) {
        const updatedListData = draft.listData.records.map(item => {
          item.isRead = true;
          return item;
        });
        draft.listData.records = updatedListData;
      }
      draft.isLoading = false;
      draft.unreadCount = 0;
      break;
    default:
  }
}, initialState);
export default notificationListReducer;
//# sourceMappingURL=reducer.js.map