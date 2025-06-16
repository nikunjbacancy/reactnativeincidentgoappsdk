"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOrganizationScreenStateDomain = exports.makeSelectShouldShowCancelEscortModal = exports.makeSelectRequestingEscort = exports.makeSelectPendingEscort = exports.makeSelectErrorMessage = exports.makeSelectError = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * RequestEscortScreen selectors
 *
 */

/**
 * Direct selector to the RequestEscortScreen state domain
 */

const selectOrganizationScreenStateDomain = state => state.requestEscortScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectOrganizationScreenStateDomain = selectOrganizationScreenStateDomain;
const makeSelectError = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  error
}) => error);
exports.makeSelectError = makeSelectError;
const makeSelectErrorMessage = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  errorMessage
}) => errorMessage);
exports.makeSelectErrorMessage = makeSelectErrorMessage;
const makeSelectRequestingEscort = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  requestingEscort
}) => requestingEscort);
exports.makeSelectRequestingEscort = makeSelectRequestingEscort;
const makeSelectShouldShowCancelEscortModal = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  shouldShowCancelEscortModal
}) => shouldShowCancelEscortModal);
exports.makeSelectShouldShowCancelEscortModal = makeSelectShouldShowCancelEscortModal;
const makeSelectPendingEscort = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, ({
  pendingEscort
}) => pendingEscort);

/**
 * Default selector used by RequestEscortScreen
 */
exports.makeSelectPendingEscort = makeSelectPendingEscort;
const makeSelectSelectOrganizationScreenState = () => (0, _reselect.createSelector)(selectOrganizationScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectSelectOrganizationScreenState;
//# sourceMappingURL=selectors.js.map