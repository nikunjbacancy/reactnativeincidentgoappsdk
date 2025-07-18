/**
 *
 * MyAccountScreen selectors
 *
 */
import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the MyAccountScreen state domain
 */

const selectMyAccountScreenStateDomain = (state: RootState) =>
  state.myAccountScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectSelectedIsUpdating = () =>
  createSelector(
    selectMyAccountScreenStateDomain,
    ({ isUpdating }) => isUpdating,
  );

const makeSelectUploadMessageType = () =>
  createSelector(
    selectMyAccountScreenStateDomain,
    ({ uploadMessageType }) => uploadMessageType,
  );

/**
 * Default selector used by MyAccountScreen
 */

const makeSelectMyAccountScreenState = () =>
  createSelector(selectMyAccountScreenStateDomain, subState => subState);

export default makeSelectMyAccountScreenState;
export { makeSelectSelectedIsUpdating, makeSelectUploadMessageType };
