"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePortraitSuccess = exports.updatePortraitRequest = exports.updatePortraitFailure = exports.updateNameSuccess = exports.updateNameFailure = exports.deletePortraitSuccess = exports.deletePortraitRequest = exports.deletePortraitFailure = exports.clearMessageType = void 0;
var _constants = require("./constants");
/**
 *
 * MyAccountScreen actions
 *
 */

const updateNameSuccess = user => ({
  type: _constants.UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  payload: user
});
exports.updateNameSuccess = updateNameSuccess;
const updateNameFailure = error => ({
  type: _constants.UPDATE_MY_ACCOUNT_NAME_FAILURE,
  payload: error,
  error: true
});
exports.updateNameFailure = updateNameFailure;
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
const deletePortraitRequest = () => ({
  type: _constants.DELETE_PORTRAIT
});
exports.deletePortraitRequest = deletePortraitRequest;
const deletePortraitSuccess = () => ({
  type: _constants.DELETE_PORTRAIT_SUCCESS
});
exports.deletePortraitSuccess = deletePortraitSuccess;
const deletePortraitFailure = error => ({
  type: _constants.DELETE_PORTRAIT_FAILURE,
  payload: {
    error
  },
  error: true
});
exports.deletePortraitFailure = deletePortraitFailure;
const clearMessageType = () => ({
  type: _constants.CLEAR_MESSAGE_TYPE
});
exports.clearMessageType = clearMessageType;
//# sourceMappingURL=actions.js.map