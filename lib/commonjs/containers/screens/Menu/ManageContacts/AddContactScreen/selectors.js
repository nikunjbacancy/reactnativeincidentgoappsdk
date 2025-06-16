"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectPermissionStatus = exports.makeSelectFilteredContacts = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * AddContactScreen selectors
 *
 */

/**
 * Direct selector to the AddContactScreen state domain
 */

const selectAddContactScreenStateDomain = state => state.addContactScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectFilteredContacts = () => (0, _reselect.createSelector)(selectAddContactScreenStateDomain, ({
  filteredContacts
}) => filteredContacts);
exports.makeSelectFilteredContacts = makeSelectFilteredContacts;
const makeSelectPermissionStatus = () => (0, _reselect.createSelector)(selectAddContactScreenStateDomain, ({
  permissionStatus
}) => permissionStatus);

/**
 * Default selector used by AddContactScreen
 */
exports.makeSelectPermissionStatus = makeSelectPermissionStatus;
const makeSelectAddContactScreenState = () => (0, _reselect.createSelector)(selectAddContactScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectAddContactScreenState;
//# sourceMappingURL=selectors.js.map