"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendCodeSuccess = exports.sendCodeFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SignInScreen actions
 *
 */

const sendCodeSuccess = phone => ({
  type: _constants.SEND_CODE_SUCCESS,
  payload: phone
});
exports.sendCodeSuccess = sendCodeSuccess;
const sendCodeFailure = error => ({
  type: _constants.SEND_CODE_FAILURE,
  payload: error,
  error: true
});
exports.sendCodeFailure = sendCodeFailure;
//# sourceMappingURL=actions.js.map