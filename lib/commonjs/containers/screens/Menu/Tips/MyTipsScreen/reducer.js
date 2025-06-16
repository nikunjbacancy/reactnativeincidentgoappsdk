"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));
var _constants = require("./constants");
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * MyTipsScreen reducer
 *
 */

const initialState = exports.initialState = {
  tips: {
    [_types.TipStatus.Active]: {
      data: [],
      pageIndex: 0,
      hasMoreData: false
    },
    [_types.TipStatus.Closed]: {
      data: [],
      pageIndex: 0,
      hasMoreData: false
    }
  },
  isLoading: true,
  isDeleting: false
};
const myTipsScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_TIPS_REQUEST:
      draft.isLoading = true;
      break;
    case _constants.GET_TIPS_SUCCESS:
      if (action.payload.paging) {
        draft.tips[action.payload.tipStatus].data = (0, _uniqBy.default)([...draft.tips[action.payload.tipStatus].data, ...action.payload.data], 'id');
      } else {
        draft.tips[action.payload.tipStatus].data = action.payload.data;
      }
      draft.isLoading = false;
      break;
    case _constants.GET_TIPS_FAILURE:
      draft.isLoading = false;
      break;
    case _constants.ADD_PAGE_INDEX:
      if (draft.tips[action.payload].hasMoreData) {
        draft.tips[action.payload].pageIndex += 1;
      }
      break;
    case _constants.SET_HAS_MORE_DATA:
      draft.tips[action.payload.tipStatus].hasMoreData = action.payload.data;
      break;
    case _constants.RESET_STATE:
      draft.tips = initialState.tips;
      draft.isLoading = initialState.isLoading;
      draft.isDeleting = initialState.isDeleting;
      break;
    default:
  }
}, initialState);
var _default = exports.default = myTipsScreenReducer;
//# sourceMappingURL=reducer.js.map