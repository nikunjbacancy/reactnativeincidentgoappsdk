"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOrganizationScreenStateDomain = exports.makeSelectSelectedOrganization = exports.makeSelectRequestingOrganizations = exports.makeSelectOrgGroups = exports.makeSelectIntersectOrganizations = exports.makeSelectErrorMessage = exports.makeSelectError = exports.makeSelectEnableContinueButton = exports.default = void 0;
var _find = _interopRequireDefault(require("lodash/find"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _some = _interopRequireDefault(require("lodash/some"));
var _reselect = require("reselect");
var _reducer = require("./reducer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * SelectOrganizationScreen selectors
 *
 */

/**
 * Direct selector to the SelectOrganizationScreen state domain
 */

const selectOrganizationScreenStateDomain = state => state.escortSelectOrganizationScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectOrganizationScreenStateDomain = selectOrganizationScreenStateDomain;
const makeSelectIntersectOrganizations = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => organizations);
exports.makeSelectIntersectOrganizations = makeSelectIntersectOrganizations;
const makeSelectOrgGroups = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, state => {
  return state.organizationGroups;
});
exports.makeSelectOrgGroups = makeSelectOrgGroups;
const makeSelectSelectedOrganization = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => (0, _find.default)(organizations, {
  isSelected: true
}));

// const makeSelectSelectedOrgGroup = () =>
//   createSelector(
//     selectOrganizationScreenStateDomain,
//     ({ organizationGroups }) => find(organizationGroups, { isSelected: true }),
//   );
exports.makeSelectSelectedOrganization = makeSelectSelectedOrganization;
const makeSelectEnableContinueButton = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations,
  error
}) => (0, _isEmpty.default)(organizations) || (0, _some.default)(organizations, {
  isSelected: true
}) && !error);
exports.makeSelectEnableContinueButton = makeSelectEnableContinueButton;
const makeSelectRequestingOrganizations = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  requestingOrganizations
}) => requestingOrganizations);
exports.makeSelectRequestingOrganizations = makeSelectRequestingOrganizations;
const makeSelectError = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  error
}) => error);
exports.makeSelectError = makeSelectError;
const makeSelectErrorMessage = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  errorMessage
}) => errorMessage);

/**
 * Default selector used by SelectOrganizationScreen
 */
exports.makeSelectErrorMessage = makeSelectErrorMessage;
const makeSelectSelectOrganizationScreenState = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectSelectOrganizationScreenState;
//# sourceMappingURL=selectors.js.map