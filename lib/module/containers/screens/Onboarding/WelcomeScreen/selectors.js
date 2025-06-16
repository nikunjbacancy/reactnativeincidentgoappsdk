/**
 *
 * WelcomeScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the WelcomeScreen state domain
 */

const selectWelcomeScreenStateDomain = state => state.welcomeScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectCurrentPage = () => createSelector(selectWelcomeScreenStateDomain, ({
  currentPage
}) => currentPage);
const makeSelectLastIndex = () => createSelector(selectWelcomeScreenStateDomain, ({
  welcomeItems
}) => welcomeItems.length);
const makeSelectWelcomeItems = () => createSelector(selectWelcomeScreenStateDomain, ({
  welcomeItems
}) => welcomeItems);

/**
 * Default selector used by WelcomeScreen
 */

const makeSelectWelcomeScreenState = () => createSelector(selectWelcomeScreenStateDomain, subState => subState);
export default makeSelectWelcomeScreenState;
export { selectWelcomeScreenStateDomain, makeSelectCurrentPage, makeSelectLastIndex, makeSelectWelcomeItems };
//# sourceMappingURL=selectors.js.map