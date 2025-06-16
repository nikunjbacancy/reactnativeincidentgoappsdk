"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateNameSuccess = exports.updateNameFailure = void 0;
var _constants = require("./constants");
/**
 *
 * UpdateNameScreen actions
 *
 */

const updateNameSuccess = user => ({
  type: _constants.UPDATE_NAME_SUCCESS,
  payload: user
});
exports.updateNameSuccess = updateNameSuccess;
const updateNameFailure = error => ({
  type: _constants.UPDATE_NAME_FAILURE,
  payload: error,
  error: true
});
exports.updateNameFailure = updateNameFailure;
//# sourceMappingURL=actions.js.map