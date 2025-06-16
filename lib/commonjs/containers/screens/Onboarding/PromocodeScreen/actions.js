"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUserSuccess = exports.registerUserRequest = exports.registerUserFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SignInCodeScreen actions
 *
 */

const registerUserRequest = params => ({
  type: _constants.REGISTER_USER_REQUEST,
  payload: params
});
exports.registerUserRequest = registerUserRequest;
const registerUserSuccess = accessToken => ({
  type: _constants.REGISTER_USER_SUCCESS,
  payload: accessToken
});
exports.registerUserSuccess = registerUserSuccess;
const registerUserFailure = error => ({
  type: _constants.REGISTER_USER_FAILURE,
  payload: error,
  error: true
});
exports.registerUserFailure = registerUserFailure;
//# sourceMappingURL=actions.js.map