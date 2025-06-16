/**
 *
 * VideoRecordScreen selectors
 *
 */

import { makeSelectNewTipIncidentVideos } from '../../../../../containers/app/selectors';
import { createSelector } from 'reselect';
import { RootState } from '../../../../../store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the VideoRecordScreen state domain
 */

const selectNewTipScreenStateDomain = (state: RootState) =>
  state.newTipScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectShouldShowBottomScreenAction = () =>
  createSelector(makeSelectNewTipIncidentVideos(), videos => videos.length > 0);

const makeSelectShouldShowCancelTipModal = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ shouldShowCancelIncidentModal }) => shouldShowCancelIncidentModal,
  );

const makeSelectDeletingIncident = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ deletingIncident }) => deletingIncident,
  );

const makeSelectShouldShowCallModal = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ shouldShowCallModal }) => shouldShowCallModal,
  );

const makeSelectUserOrganizations = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ userOrganizations }) => userOrganizations,
  );

const makeSelectTipCreatedData = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ tipCreatedData }) => tipCreatedData,
  );

const makeSelectShouldShowTipCreatedModal = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ shouldShowTipCreatedModal }) => shouldShowTipCreatedModal,
  );

const makeSelectCreateTipMode = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ createTipMode }) => createTipMode,
  );

const makeSelectCreatingTipWithChat = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ creatingTipWithChat }) => creatingTipWithChat,
  );

const makeSelectUploadingVideo = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ uploadingVideo }) => uploadingVideo,
  );

const makeSelectLastTipOrganization = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ lastTipOrganization }) => lastTipOrganization,
  );

const makeSelectShouldShowFastAccessModal = () =>
  createSelector(
    selectNewTipScreenStateDomain,
    ({ shouldShowFastAccessModal }) => shouldShowFastAccessModal,
  );

/**
 * Default selector used by VideoRecordScreen
 */

const makeSelectNewTipScreenState = () =>
  createSelector(selectNewTipScreenStateDomain, subState => subState);

export default makeSelectNewTipScreenState;
export {
  selectNewTipScreenStateDomain,
  makeSelectShouldShowBottomScreenAction,
  makeSelectShouldShowCancelTipModal,
  makeSelectDeletingIncident,
  makeSelectShouldShowCallModal,
  makeSelectUserOrganizations,
  makeSelectTipCreatedData,
  makeSelectShouldShowTipCreatedModal,
  makeSelectCreateTipMode,
  makeSelectCreatingTipWithChat,
  makeSelectUploadingVideo,
  makeSelectLastTipOrganization,
  makeSelectShouldShowFastAccessModal,
};
