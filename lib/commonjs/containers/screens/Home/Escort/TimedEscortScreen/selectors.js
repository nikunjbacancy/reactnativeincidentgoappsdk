"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timedEscortScreenStateDomain = exports.makeSelectSelectedProcedure = exports.makeSelectSelectedOrganization = exports.makeSelectRequestingOrganizations = exports.makeSelectOrganizationProcedures = exports.makeSelectOrgGroups = exports.makeSelectIntersectOrganizations = exports.makeSelectErrorMessage = exports.makeSelectError = exports.makeSelectEnableNextButton = exports.makeSelectEnableContinueButton = exports.default = void 0;
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

const timedEscortScreenStateDomain = state => state.escortTimedEscortScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.timedEscortScreenStateDomain = timedEscortScreenStateDomain;
const makeSelectIntersectOrganizations = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  organizations
}) => organizations);
exports.makeSelectIntersectOrganizations = makeSelectIntersectOrganizations;
const makeSelectOrgGroups = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, state => {
  return state.organizationGroups;
});
exports.makeSelectOrgGroups = makeSelectOrgGroups;
const makeSelectSelectedOrganization = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  organizations
}) => (0, _find.default)(organizations, {
  isSelected: true
}));
exports.makeSelectSelectedOrganization = makeSelectSelectedOrganization;
const makeSelectEnableContinueButton = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  organizations,
  error
}) => (0, _isEmpty.default)(organizations) || (0, _some.default)(organizations, {
  isSelected: true
}) && !error);
exports.makeSelectEnableContinueButton = makeSelectEnableContinueButton;
const makeSelectEnableNextButton = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  procedures,
  error
}) => !(0, _isEmpty.default)(procedures) && (0, _some.default)(procedures, {
  isSelected: true
}) && !error);
exports.makeSelectEnableNextButton = makeSelectEnableNextButton;
const makeSelectRequestingOrganizations = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  requestingOrganizations
}) => requestingOrganizations);
exports.makeSelectRequestingOrganizations = makeSelectRequestingOrganizations;
const makeSelectError = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  error
}) => error);
exports.makeSelectError = makeSelectError;
const makeSelectErrorMessage = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  errorMessage
}) => errorMessage);
exports.makeSelectErrorMessage = makeSelectErrorMessage;
const makeSelectOrganizationProcedures = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  procedures
}) => procedures);
exports.makeSelectOrganizationProcedures = makeSelectOrganizationProcedures;
const makeSelectSelectedProcedure = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, ({
  procedures
}) => (0, _find.default)(procedures, {
  isSelected: true
}));

/**
 * Default selector used by SelectOrganizationScreen
 */
exports.makeSelectSelectedProcedure = makeSelectSelectedProcedure;
const makeSelectSelectOrganizationScreenState = () => (0, _reselect.createSelector)(timedEscortScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectSelectOrganizationScreenState;
//# sourceMappingURL=selectors.js.map