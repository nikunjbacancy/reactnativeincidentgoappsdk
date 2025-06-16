"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * AddContactScreen reducer
 *
 */

const initialState = exports.initialState = {
  isLoading: true,
  listData: null,
  unreadCount: 0,
  notiReadData: null
};
const notificationListReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.NOTIFICATION_LIST_REQUEST:
      draft.isLoading = true;
      break;
    case _constants.NOTIFICATION_LIST_SUCCESS:
      draft.isLoading = false;
      draft.listData = action.payload;
      draft.unreadCount = action.payload.totalUnreadNotificationCount;
      break;
    case _constants.NOTIFICATION_LIST_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case _constants.NOTIFICATION_LIST_RESET:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case _constants.NOTIFICATION_UNREAD_COUNT:
      draft.unreadCount = action.count;
      break;
    case _constants.UPDATE_READUNREAD_STATUS_REQUEST:
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
    case _constants.UPDATE_READUNREAD_STATUS_SUCCESS:
      draft.unreadCount = action.payload.totalUnreadNotificationCount;
      if (action.payload.currentStatus.pnMessage.data.type == "Location" && action.payload.isReadFrom == "app") {
        draft.notiReadData = action.payload;
      }
      break;
    case _constants.RESET_UPDATE_READUNREAD_STATUS:
      draft.notiReadData = null;
      break;
    case _constants.UPDATE_READUNREAD_STATUS_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case _constants.UPDATE_READUNREAD_STATUS_FAILURE:
      draft.isLoading = false;
      draft.listData = null;
      break;
    case _constants.READ_ALL_NOTIFICATION_REQUEST:
      draft.unreadCount = 0;
      break;
    case _constants.READ_ALL_NOTIFICATION_SUCCESS:
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
var _default = exports.default = notificationListReducer;
//# sourceMappingURL=reducer.js.map