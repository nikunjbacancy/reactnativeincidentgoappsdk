/**
 *
 * MyTipsScreen selectors
 *
 */

import filter from 'lodash/filter';
import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';
import { TipStatus } from './types';

/**
 * Direct selector to the MyTipsScreen state domain
 */

const selectMyTipsScreenStateDomain = (state: RootState) =>
  state.myTipsScreen || initialState;

/**
 * Other specific selectors
 */
const makeSelectTips = () =>
  createSelector(selectMyTipsScreenStateDomain, ({ tips }) => tips);

const makeSelectLastActiveTip = () =>
  createSelector(selectMyTipsScreenStateDomain, ({ tips }) => {
    const activeTips = filter(tips[TipStatus.Active].data, 'organization');
    return activeTips[0];
  });

const makeSelectIsLoading = () =>
  createSelector(selectMyTipsScreenStateDomain, ({ isLoading }) => isLoading);

/**
 * Default selector used by MyTipsScreen
 */

const makeSelectMyTipsScreenState = () =>
  createSelector(selectMyTipsScreenStateDomain, subState => subState);

export default makeSelectMyTipsScreenState;
export {
  selectMyTipsScreenStateDomain,
  makeSelectTips,
  makeSelectIsLoading,
  makeSelectLastActiveTip,
};
