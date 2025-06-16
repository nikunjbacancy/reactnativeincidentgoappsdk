/**
 *
 * TipDetailScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the TipDetailScreen state domain
 */

const selectTipDetailScreenStateDomain = (state: RootState) =>
  state.tipDetailScreen || initialState;

/**
 * Other specific selectors
 */
const makeSelectIncidentVideos = () =>
  createSelector(
    selectTipDetailScreenStateDomain,
    ({ incidentVideos }) => incidentVideos,
  );

const makeSelectOrganization = () =>
  createSelector(
    selectTipDetailScreenStateDomain,
    ({ organization }) => organization,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectTipDetailScreenStateDomain,
    ({ isLoadingVideos, isLoadingIncident }) =>
      isLoadingVideos || isLoadingIncident,
  );

const makeSelectShouldShowCallModal = () =>
  createSelector(
    selectTipDetailScreenStateDomain,
    ({ shouldShowCallModal }) => shouldShowCallModal,
  );

const makeSelectShouldShowChatModal = () =>
  createSelector(
    selectTipDetailScreenStateDomain,
    ({ shouldShowChatModal }) => shouldShowChatModal,
  );

const makeSelectMessages = () =>
  createSelector(selectTipDetailScreenStateDomain, ({ messages }) => messages);

const makeSelectIncident = () =>
  createSelector(selectTipDetailScreenStateDomain, ({ incident }) => incident);

/**
 * Default selector used by TipDetailScreen
 */

const makeSelectTipDetailScreenState = () =>
  createSelector(selectTipDetailScreenStateDomain, subState => subState);

export default makeSelectTipDetailScreenState;
export {
  selectTipDetailScreenStateDomain,
  makeSelectIncidentVideos,
  makeSelectOrganization,
  makeSelectIsLoading,
  makeSelectShouldShowCallModal,
  makeSelectShouldShowChatModal,
  makeSelectMessages,
  makeSelectIncident,
};
