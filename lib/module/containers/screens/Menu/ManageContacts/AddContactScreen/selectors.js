/**
 *
 * AddContactScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the AddContactScreen state domain
 */

const selectAddContactScreenStateDomain = state => state.addContactScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectFilteredContacts = () => createSelector(selectAddContactScreenStateDomain, ({
  filteredContacts
}) => filteredContacts);
const makeSelectPermissionStatus = () => createSelector(selectAddContactScreenStateDomain, ({
  permissionStatus
}) => permissionStatus);

/**
 * Default selector used by AddContactScreen
 */

const makeSelectAddContactScreenState = () => createSelector(selectAddContactScreenStateDomain, subState => subState);
export default makeSelectAddContactScreenState;
export { makeSelectFilteredContacts, makeSelectPermissionStatus };
//# sourceMappingURL=selectors.js.map