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

const selectOrganizationScreenStateDomain = state => state.organizationNotifyScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIntersectOrganizations = () => createSelector(selectOrganizationScreenStateDomain, ({
  organizations
}) => organizations);
const makeSelectSelectedOrganization = () => createSelector(selectOrganizationScreenStateDomain, ({
  organizations
}) => find(organizations, {
  isSelected: true
}));
const makeSelectEnableContinueButton = () => createSelector(selectOrganizationScreenStateDomain, ({
  organizations,
  error
}) => isEmpty(organizations) || some(organizations, {
  isSelected: true
}) && !error);
const makeSelectRequestingOrganizations = () => createSelector(selectOrganizationScreenStateDomain, ({
  requestingOrganizations
}) => requestingOrganizations);
const makeSelectError = () => createSelector(selectOrganizationScreenStateDomain, ({
  error
}) => error);
const makeSelectErrorMessage = () => createSelector(selectOrganizationScreenStateDomain, ({
  errorMessage
}) => errorMessage);

/**
 * Default selector used by SelectOrganizationScreen
 */

const makeSelectSelectOrganizationScreenState = () => createSelector(selectOrganizationScreenStateDomain, subState => subState);
export default makeSelectSelectOrganizationScreenState;
export { selectOrganizationScreenStateDomain, makeSelectIntersectOrganizations, makeSelectSelectedOrganization, makeSelectRequestingOrganizations, makeSelectEnableContinueButton, makeSelectError, makeSelectErrorMessage };
//# sourceMappingURL=selectors.js.map