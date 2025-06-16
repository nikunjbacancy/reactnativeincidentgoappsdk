"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOrganizationScreenStateDomain = exports.makeSelectSelectedOrganizations = exports.makeSelectOrganizations = exports.makeSelectErrorMessage = exports.makeSelectError = exports.makeSelectEnableNextButton = exports.default = void 0;
var _filter = _interopRequireDefault(require("lodash/filter"));
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

const selectOrganizationScreenStateDomain = state => state.selectOrganizationScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectOrganizationScreenStateDomain = selectOrganizationScreenStateDomain;
const makeSelectOrganizations = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => organizations);
exports.makeSelectOrganizations = makeSelectOrganizations;
const makeSelectSelectedOrganizations = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => (0, _filter.default)(organizations, {
  isSelected: true
}));
exports.makeSelectSelectedOrganizations = makeSelectSelectedOrganizations;
const makeSelectEnableNextButton = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  organizations
}) => (0, _some.default)(organizations, {
  isSelected: true
}));
exports.makeSelectEnableNextButton = makeSelectEnableNextButton;
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