"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectUploadMessageType = exports.makeSelectSelectedIsUpdating = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * MyAccountScreen selectors
 *
 */

/**
 * Direct selector to the MyAccountScreen state domain
 */

const selectMyAccountScreenStateDomain = state => state.myAccountScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectSelectedIsUpdating = () => (0, _reselect.createSelector)(selectMyAccountScreenStateDomain, ({
  isUpdating
}) => isUpdating);
exports.makeSelectSelectedIsUpdating = makeSelectSelectedIsUpdating;
const makeSelectUploadMessageType = () => (0, _reselect.createSelector)(selectMyAccountScreenStateDomain, ({
  uploadMessageType
}) => uploadMessageType);

/**
 * Default selector used by MyAccountScreen
 */
exports.makeSelectUploadMessageType = makeSelectUploadMessageType;
const makeSelectMyAccountScreenState = () => (0, _reselect.createSelector)(selectMyAccountScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectMyAccountScreenState;
//# sourceMappingURL=selectors.js.map