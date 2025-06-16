import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

const warningScreenStateDomain = (state: RootState) =>
  state.warningScreen || initialState;

const makeSelectShowPanicInfo = () =>
  createSelector(
    warningScreenStateDomain,
    ({ showPanicInfo }) => showPanicInfo,
  );

const makeSelectWarningScreenState = () =>
  createSelector(warningScreenStateDomain, subState => subState);

export default makeSelectWarningScreenState;
export { makeSelectShowPanicInfo };
