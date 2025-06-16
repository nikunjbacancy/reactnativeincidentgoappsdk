/**
 *
 * OrganizationScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the OrganizationScreen state domain
 */

const selectOrganizationScreenStateDomain = state => state.organizationScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIsLoading = () => createSelector(selectOrganizationScreenStateDomain, ({
  isLoading
}) => isLoading);
const makeSelectUserOrganizations = () => createSelector(selectOrganizationScreenStateDomain, ({
  organizations
}) => organizations);

/**
 * Default selector used by OrganizationScreen
 */

const makeSelectOrganizationScreenState = () => createSelector(selectOrganizationScreenStateDomain, subState => subState);
export default makeSelectOrganizationScreenState;
export { makeSelectIsLoading, makeSelectUserOrganizations };
//# sourceMappingURL=selectors.js.map