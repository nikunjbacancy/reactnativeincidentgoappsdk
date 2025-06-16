"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectUserOrganizations = exports.makeSelectIsLoading = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * OrganizationScreen selectors
 *
 */

/**
 * Direct selector to the OrganizationScreen state domain
 */

const selectOrganizationScreenStateDomain = state => state.organizationScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectIsLoading = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  isLoading
}) => isLoading);
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectUserOrganizations = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => organizations);

/**
 * Default selector used by OrganizationScreen
 */
exports.makeSelectUserOrganizations = makeSelectUserOrganizations;
const makeSelectOrganizationScreenState = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectOrganizationScreenState;
//# sourceMappingURL=selectors.js.map