/**
 *
 * RequestEscortScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from '../../../../../store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the RequestEscortScreen state domain
 */

const selectOrganizationScreenStateDomain = (state: RootState) =>
  state.requestEscortScreen || initialState;

/**
 * Other specific selectors
 */
const makeSelectError = () =>
  createSelector(selectOrganizationScreenStateDomain, ({ error }) => error);

const makeSelectErrorMessage = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ errorMessage }) => errorMessage,
  );

const makeSelectRequestingEscort = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ requestingEscort }) => requestingEscort,
  );

const makeSelectShouldShowCancelEscortModal = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ shouldShowCancelEscortModal }) => shouldShowCancelEscortModal,
  );

const makeSelectPendingEscort = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ pendingEscort }) => pendingEscort,
  );

/**
 * Default selector used by RequestEscortScreen
 */

const makeSelectSelectOrganizationScreenState = () =>
  createSelector(selectOrganizationScreenStateDomain, subState => subState);

export default makeSelectSelectOrganizationScreenState;
export {
  selectOrganizationScreenStateDomain,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectRequestingEscort,
  makeSelectShouldShowCancelEscortModal,
  makeSelectPendingEscort,
};
