/**
 *
 * RecordScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

const escortTypeScreenStateDomain = (state: RootState) =>
  state.escortTypeScreen || initialState;

const makeSelectShouldShowSiteKeyModal = () =>
  createSelector(
    escortTypeScreenStateDomain,
    ({ showSiteKeyModel }) => showSiteKeyModel,
  );
  

/**
 * Default selector used by countdownScreen
 */

const makeSelectSelectEscortTypeScreenState = () =>
  createSelector(escortTypeScreenStateDomain, subState => subState);

export default makeSelectSelectEscortTypeScreenState;
export { makeSelectShouldShowSiteKeyModal }



