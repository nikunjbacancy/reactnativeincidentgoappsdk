"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePortraitSuccess = exports.updatePortraitRequest = exports.updatePortraitFailure = exports.clearMessageType = void 0;
var _constants = require("./constants");
/**
 *
 * AddUserPortraitScreen actions
 *
 */

const updatePortraitRequest = imgString => ({
  type: _constants.UPDATE_PORTRAIT_REQUEST,
  payload: imgString
});
exports.updatePortraitRequest = updatePortraitRequest;
const updatePortraitSuccess = () => ({
  type: _constants.UPDATE_PORTRAIT_SUCCESS
});
exports.updatePortraitSuccess = updatePortraitSuccess;
const updatePortraitFailure = error => ({
  type: _constants.UPDATE_PORTRAIT_FAILURE,
  payload: {
    error
  },
  error: true
});
exports.updatePortraitFailure = updatePortraitFailure;
const clearMessageType = () => ({
  type: _constants.CLEAR_MESSAGE_TYPE
});
exports.clearMessageType = clearMessageType;
//# sourceMappingURL=actions.js.map