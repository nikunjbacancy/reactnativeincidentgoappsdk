/**
 *
 * App selectors
 *
 */

import { Id, IncidentAction, IncidentActionRequest } from 'incident-code-core';
import { User } from 'react-native-gifted-chat';
import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

// //("-initialState->",initialState)
/**
 * Direct selector to the App state domain
 */
const selectAppStateDomain = (state: RootState) => state.app || initialState;

/**
 * Other specific selectors
 */

const makeSelectIsLoading = () =>
  createSelector(
    selectAppStateDomain,
    ({ isLoadingConfigs, isLoadingProfile, isLoadingTwilioToken }) =>
      isLoadingConfigs || isLoadingProfile || isLoadingTwilioToken,
  );

const makeSelectUser = () =>
  createSelector(selectAppStateDomain, ({ user }) => user);

const makeSelectAppUserContacts = () =>
  createSelector(makeSelectUser(), ({ contacts }) => contacts || []);

const makeSelectNextOnboardingScreen = () =>
  createSelector(
    selectAppStateDomain,
    ({ nextOnboardingScreen }) => nextOnboardingScreen,
  );

const makeSelectConfigs = () =>
  createSelector(selectAppStateDomain, ({ configs }) => configs);

const makeSelectNewTipIncident = () =>
  createSelector(selectAppStateDomain, ({ newTip: { incident } }) => incident);

const makeSelectNewTipIncidentVideos = () =>
  createSelector(makeSelectNewTipIncident(), incident =>
    incident && incident.videos ? incident.videos : [],
  );

const makeSelectNewTipIncidentLocation = () =>
  createSelector(makeSelectNewTipIncident(), incident =>
    incident && incident.location ? incident.location : undefined,
  );

const makeSelectNewTipIncidentExpired = () =>
  createSelector(makeSelectNewTipIncident(), incident => !incident);

const makeSelectNewTipOrganization = () =>
  createSelector(selectAppStateDomain, ({ newTip }) =>
    newTip.organization ? newTip.organization : {},
  );

const makeSelectNewTipOrganizationName = () =>
  createSelector(selectAppStateDomain, ({ newTip }) =>
    newTip.organization && newTip.organization.name
      ? newTip.organization.name
      : '',
  );

const makeSelectNewTipCategoryName = () =>
  createSelector(selectAppStateDomain, ({ newTip }) =>
    newTip.category && newTip.category.display ? newTip.category.display : '',
  );

const makeSelectNewTipIncidentActionRequest = () =>
  createSelector(selectAppStateDomain, ({ newTip }) => {
    if (!newTip.incident || !newTip.category) return;
    const incidentActionRequest: IncidentActionRequest = {
      id: newTip.incident.id,
      action: IncidentAction.AlertOrganization,
      args: {
        organization: newTip.organization?.id,
        organizationArea: newTip.organization?.area as Id,
        category: newTip.category.name,
        comment: newTip.comment,
      },
    };
    return incidentActionRequest;
  });

const makeSelectTipCameraMode = () =>
  createSelector(selectAppStateDomain, ({ tipCamera: { mode } }) => mode);

const makeSelectTipVideoIndex = () =>
  createSelector(
    selectAppStateDomain,
    ({ tipCamera: { videoIndex } }) => videoIndex,
  );

const makeSelectGiftedChatUser = () =>
  createSelector(
    makeSelectUser(),
    user =>
      ({
        _id: `U:${user.id}`,
        name: `${user.firstName} ${user.lastName}`,
        avatar: user.portraitUrl,
      } as User),
  );

const makeSelectTwilioInitialized = () =>
  createSelector(
    selectAppStateDomain,
    ({ twilio: { initialized } }) => initialized,
  );

const makeSelectIncidentEscortData = () =>
  createSelector(
    selectAppStateDomain,
    ({ incidentEscortData }) => incidentEscortData,
  );

const makeSelectTwilioAccessToken = () =>
  createSelector(
    selectAppStateDomain,
    ({ twilio: { accessToken } }) => accessToken,
  );

const makeSelectPassiveEscortData = () =>
  createSelector(
    selectAppStateDomain,
    ({ incidentPassiveEscortData }) => incidentPassiveEscortData,
  );

const makeSelectAppLocation = () =>
  createSelector(selectAppStateDomain, ({ location }) => location);
/**
 * Default selector used by App
 */

const makeSelectAppState = () =>
  createSelector(selectAppStateDomain, subState => subState);

export default makeSelectAppState;
export {
  makeSelectIsLoading,
  selectAppStateDomain,
  makeSelectUser,
  makeSelectAppUserContacts,
  makeSelectNextOnboardingScreen,
  makeSelectConfigs,
  makeSelectNewTipIncident,
  makeSelectNewTipIncidentVideos,
  makeSelectNewTipIncidentLocation,
  makeSelectNewTipIncidentExpired,
  makeSelectNewTipOrganization,
  makeSelectNewTipOrganizationName,
  makeSelectNewTipCategoryName,
  makeSelectNewTipIncidentActionRequest,
  makeSelectTipCameraMode,
  makeSelectTipVideoIndex,
  makeSelectGiftedChatUser,
  makeSelectTwilioInitialized,
  makeSelectIncidentEscortData,
  makeSelectTwilioAccessToken,
  makeSelectPassiveEscortData,
  makeSelectAppLocation,
};
