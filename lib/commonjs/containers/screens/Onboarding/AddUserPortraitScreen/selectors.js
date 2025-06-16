"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectUploadMessageType = exports.makeSelectIsUpdating = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * AddUserPortrait selectors
 *
 */

/**
 * Direct selector to the AddUserPortrait state domain
 */

const selectAddUserPortraitStateDomain = state => state.addUserPortraitScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectIsUpdating = () => (0, _reselect.createSelector)(selectAddUserPortraitStateDomain, ({
  isUpdating
}) => isUpdating);
exports.makeSelectIsUpdating = makeSelectIsUpdating;
const makeSelectUploadMessageType = () => (0, _reselect.createSelector)(selectAddUserPortraitStateDomain, ({
  uploadMessageType
}) => uploadMessageType);

/**
 * Default selector used by AddUserPortrait
 */
exports.makeSelectUploadMessageType = makeSelectUploadMessageType;
const makeSelectAddUserPortraitState = () => (0, _reselect.createSelector)(selectAddUserPortraitStateDomain, subState => subState);
var _default = exports.default = makeSelectAddUserPortraitState;
//# sourceMappingURL=selectors.js.map