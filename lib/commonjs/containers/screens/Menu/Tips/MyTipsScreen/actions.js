"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasMoreData = exports.resetState = exports.getTipsSuccess = exports.getTipsRequest = exports.getTipsFailure = exports.addPageIndex = void 0;
var _constants = require("./constants");
/**
 *
 * MyTipsScreen actions
 *
 */

const getTipsRequest = payload => ({
  type: _constants.GET_TIPS_REQUEST,
  payload
});
exports.getTipsRequest = getTipsRequest;
const getTipsSuccess = payload => ({
  type: _constants.GET_TIPS_SUCCESS,
  payload
});
exports.getTipsSuccess = getTipsSuccess;
const getTipsFailure = error => ({
  type: _constants.GET_TIPS_FAILURE,
  payload: error,
  error: true
});
exports.getTipsFailure = getTipsFailure;
const addPageIndex = tipStatus => ({
  type: _constants.ADD_PAGE_INDEX,
  payload: tipStatus
});
exports.addPageIndex = addPageIndex;
const setHasMoreData = payload => ({
  type: _constants.SET_HAS_MORE_DATA,
  payload
});
exports.setHasMoreData = setHasMoreData;
const resetState = () => ({
  type: _constants.RESET_STATE
});
exports.resetState = resetState;
//# sourceMappingURL=actions.js.map