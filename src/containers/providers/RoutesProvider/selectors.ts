/**
 *
 * RoutesProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the RoutesProvider state domain
 */

const selectRoutesProviderStateDomain = (state: RootState) =>
  state.routesProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectScreenAction = () =>
  createSelector(
    selectRoutesProviderStateDomain,
    ({ screenAction }) => screenAction,
  );

const makeSelectShowDuressInfo = () =>
  createSelector(
    selectRoutesProviderStateDomain,
    ({ showDuressInfo }) => showDuressInfo,
  );

/**
 * Default selector used by RoutesProvider
 */

const makeSelectRoutesProviderState = () =>
  createSelector(selectRoutesProviderStateDomain, subState => subState);

export default makeSelectRoutesProviderState;
export {
  selectRoutesProviderStateDomain,
  makeSelectScreenAction,
  makeSelectShowDuressInfo,
};
