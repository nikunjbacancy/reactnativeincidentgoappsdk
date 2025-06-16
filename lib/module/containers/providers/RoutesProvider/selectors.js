/**
 *
 * RoutesProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the RoutesProvider state domain
 */

const selectRoutesProviderStateDomain = state => state.routesProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectScreenAction = () => createSelector(selectRoutesProviderStateDomain, ({
  screenAction
}) => screenAction);
const makeSelectShowDuressInfo = () => createSelector(selectRoutesProviderStateDomain, ({
  showDuressInfo
}) => showDuressInfo);

/**
 * Default selector used by RoutesProvider
 */

const makeSelectRoutesProviderState = () => createSelector(selectRoutesProviderStateDomain, subState => subState);
export default makeSelectRoutesProviderState;
export { selectRoutesProviderStateDomain, makeSelectScreenAction, makeSelectShowDuressInfo };
//# sourceMappingURL=selectors.js.map