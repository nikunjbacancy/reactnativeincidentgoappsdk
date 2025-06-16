"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTipSuccess = exports.createTipRequest = exports.createTipFailure = exports.addComment = void 0;
var _constants = require("./constants");
/**
 *
 * AddCommentScreen actions
 *
 */

const addComment = comment => ({
  type: _constants.ADD_INCIDENT_COMMENT,
  payload: comment
});
exports.addComment = addComment;
const createTipRequest = payload => ({
  type: _constants.CREATE_TIP_REQUEST,
  payload
});
exports.createTipRequest = createTipRequest;
const createTipSuccess = () => ({
  type: _constants.CREATE_TIP_SUCCESS
});
exports.createTipSuccess = createTipSuccess;
const createTipFailure = error => ({
  type: _constants.CREATE_TIP_FAILURE,
  payload: error,
  error: true
});
exports.createTipFailure = createTipFailure;
//# sourceMappingURL=actions.js.map