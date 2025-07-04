/**
 *
 * AddUserPortrait selectors
 *
 */
import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the AddUserPortrait state domain
 */

const selectAddUserPortraitStateDomain = (state: RootState) =>
  state.addUserPortraitScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIsUpdating = () =>
  createSelector(
    selectAddUserPortraitStateDomain,
    ({ isUpdating }) => isUpdating,
  );

const makeSelectUploadMessageType = () =>
  createSelector(
    selectAddUserPortraitStateDomain,
    ({ uploadMessageType }) => uploadMessageType,
  );

/**
 * Default selector used by AddUserPortrait
 */

const makeSelectAddUserPortraitState = () =>
  createSelector(selectAddUserPortraitStateDomain, subState => subState);

export default makeSelectAddUserPortraitState;
export { makeSelectIsUpdating, makeSelectUploadMessageType };
