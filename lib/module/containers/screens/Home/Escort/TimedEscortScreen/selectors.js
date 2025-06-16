/**
 *
 * SelectOrganizationScreen selectors
 *
 */

import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the SelectOrganizationScreen state domain
 */

const timedEscortScreenStateDomain = state => state.escortTimedEscortScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIntersectOrganizations = () => createSelector(timedEscortScreenStateDomain, ({
  organizations
}) => organizations);
const makeSelectOrgGroups = () => createSelector(timedEscortScreenStateDomain, state => {
  return state.organizationGroups;
});
const makeSelectSelectedOrganization = () => createSelector(timedEscortScreenStateDomain, ({
  organizations
}) => find(organizations, {
  isSelected: true
}));
const makeSelectEnableContinueButton = () => createSelector(timedEscortScreenStateDomain, ({
  organizations,
  error
}) => isEmpty(organizations) || some(organizations, {
  isSelected: true
}) && !error);
const makeSelectEnableNextButton = () => createSelector(timedEscortScreenStateDomain, ({
  procedures,
  error
}) => !isEmpty(procedures) && some(procedures, {
  isSelected: true
}) && !error);
const makeSelectRequestingOrganizations = () => createSelector(timedEscortScreenStateDomain, ({
  requestingOrganizations
}) => requestingOrganizations);
const makeSelectError = () => createSelector(timedEscortScreenStateDomain, ({
  error
}) => error);
const makeSelectErrorMessage = () => createSelector(timedEscortScreenStateDomain, ({
  errorMessage
}) => errorMessage);
const makeSelectOrganizationProcedures = () => createSelector(timedEscortScreenStateDomain, ({
  procedures
}) => procedures);
const makeSelectSelectedProcedure = () => createSelector(timedEscortScreenStateDomain, ({
  procedures
}) => find(procedures, {
  isSelected: true
}));

/**
 * Default selector used by SelectOrganizationScreen
 */

const makeSelectSelectOrganizationScreenState = () => createSelector(timedEscortScreenStateDomain, subState => subState);
export default makeSelectSelectOrganizationScreenState;
export { timedEscortScreenStateDomain, makeSelectIntersectOrganizations, makeSelectSelectedOrganization, makeSelectRequestingOrganizations, makeSelectEnableContinueButton, makeSelectOrganizationProcedures, makeSelectError, makeSelectErrorMessage, makeSelectEnableNextButton, makeSelectSelectedProcedure, makeSelectOrgGroups };
//# sourceMappingURL=selectors.js.map