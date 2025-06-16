"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * Send code screen selectors
 *
 */

/**
 * Direct selector to the send code state domain
 */

const registerUserScreenStateDomain = state => state.registerUserState || _reducer.initialState;

/**
 * Default selector used by send code
 */

const sendCodeScreenState = () => (0, _reselect.createSelector)(registerUserScreenStateDomain, subState => subState);
var _default = exports.default = sendCodeScreenState;
//# sourceMappingURL=selectors.js.map