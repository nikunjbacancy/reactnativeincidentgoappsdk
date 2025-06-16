"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAppStateDomain = exports.makeSelectUser = exports.makeSelectTwilioInitialized = exports.makeSelectTwilioAccessToken = exports.makeSelectTipVideoIndex = exports.makeSelectTipCameraMode = exports.makeSelectPassiveEscortData = exports.makeSelectNextOnboardingScreen = exports.makeSelectNewTipOrganizationName = exports.makeSelectNewTipOrganization = exports.makeSelectNewTipIncidentVideos = exports.makeSelectNewTipIncidentLocation = exports.makeSelectNewTipIncidentExpired = exports.makeSelectNewTipIncidentActionRequest = exports.makeSelectNewTipIncident = exports.makeSelectNewTipCategoryName = exports.makeSelectIsLoading = exports.makeSelectIncidentEscortData = exports.makeSelectGiftedChatUser = exports.makeSelectConfigs = exports.makeSelectAppUserContacts = exports.makeSelectAppLocation = exports.default = void 0;
var _incidentCodeCore = require("incident-code-core");
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * App selectors
 *
 */

// //("-initialState->",initialState)
/**
 * Direct selector to the App state domain
 */
const selectAppStateDomain = state => state.app || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectAppStateDomain = selectAppStateDomain;
const makeSelectIsLoading = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  isLoadingConfigs,
  isLoadingProfile,
  isLoadingTwilioToken
}) => isLoadingConfigs || isLoadingProfile || isLoadingTwilioToken);
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectUser = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  user
}) => user);
exports.makeSelectUser = makeSelectUser;
const makeSelectAppUserContacts = () => (0, _reselect.createSelector)(makeSelectUser(), ({
  contacts
}) => contacts || []);
exports.makeSelectAppUserContacts = makeSelectAppUserContacts;
const makeSelectNextOnboardingScreen = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  nextOnboardingScreen
}) => nextOnboardingScreen);
exports.makeSelectNextOnboardingScreen = makeSelectNextOnboardingScreen;
const makeSelectConfigs = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  configs
}) => configs);
exports.makeSelectConfigs = makeSelectConfigs;
const makeSelectNewTipIncident = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  newTip: {
    incident
  }
}) => incident);
exports.makeSelectNewTipIncident = makeSelectNewTipIncident;
const makeSelectNewTipIncidentVideos = () => (0, _reselect.createSelector)(makeSelectNewTipIncident(), incident => incident && incident.videos ? incident.videos : []);
exports.makeSelectNewTipIncidentVideos = makeSelectNewTipIncidentVideos;
const makeSelectNewTipIncidentLocation = () => (0, _reselect.createSelector)(makeSelectNewTipIncident(), incident => incident && incident.location ? incident.location : undefined);
exports.makeSelectNewTipIncidentLocation = makeSelectNewTipIncidentLocation;
const makeSelectNewTipIncidentExpired = () => (0, _reselect.createSelector)(makeSelectNewTipIncident(), incident => !incident);
exports.makeSelectNewTipIncidentExpired = makeSelectNewTipIncidentExpired;
const makeSelectNewTipOrganization = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  newTip
}) => newTip.organization ? newTip.organization : {});
exports.makeSelectNewTipOrganization = makeSelectNewTipOrganization;
const makeSelectNewTipOrganizationName = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  newTip
}) => newTip.organization && newTip.organization.name ? newTip.organization.name : '');
exports.makeSelectNewTipOrganizationName = makeSelectNewTipOrganizationName;
const makeSelectNewTipCategoryName = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  newTip
}) => newTip.category && newTip.category.display ? newTip.category.display : '');
exports.makeSelectNewTipCategoryName = makeSelectNewTipCategoryName;
const makeSelectNewTipIncidentActionRequest = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  newTip
}) => {
  var _newTip$organization, _newTip$organization2;
  if (!newTip.incident || !newTip.category) return;
  const incidentActionRequest = {
    id: newTip.incident.id,
    action: _incidentCodeCore.IncidentAction.AlertOrganization,
    args: {
      organization: (_newTip$organization = newTip.organization) === null || _newTip$organization === void 0 ? void 0 : _newTip$organization.id,
      organizationArea: (_newTip$organization2 = newTip.organization) === null || _newTip$organization2 === void 0 ? void 0 : _newTip$organization2.area,
      category: newTip.category.name,
      comment: newTip.comment
    }
  };
  return incidentActionRequest;
});
exports.makeSelectNewTipIncidentActionRequest = makeSelectNewTipIncidentActionRequest;
const makeSelectTipCameraMode = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  tipCamera: {
    mode
  }
}) => mode);
exports.makeSelectTipCameraMode = makeSelectTipCameraMode;
const makeSelectTipVideoIndex = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  tipCamera: {
    videoIndex
  }
}) => videoIndex);
exports.makeSelectTipVideoIndex = makeSelectTipVideoIndex;
const makeSelectGiftedChatUser = () => (0, _reselect.createSelector)(makeSelectUser(), user => ({
  _id: `U:${user.id}`,
  name: `${user.firstName} ${user.lastName}`,
  avatar: user.portraitUrl
}));
exports.makeSelectGiftedChatUser = makeSelectGiftedChatUser;
const makeSelectTwilioInitialized = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  twilio: {
    initialized
  }
}) => initialized);
exports.makeSelectTwilioInitialized = makeSelectTwilioInitialized;
const makeSelectIncidentEscortData = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  incidentEscortData
}) => incidentEscortData);
exports.makeSelectIncidentEscortData = makeSelectIncidentEscortData;
const makeSelectTwilioAccessToken = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  twilio: {
    accessToken
  }
}) => accessToken);
exports.makeSelectTwilioAccessToken = makeSelectTwilioAccessToken;
const makeSelectPassiveEscortData = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  incidentPassiveEscortData
}) => incidentPassiveEscortData);
exports.makeSelectPassiveEscortData = makeSelectPassiveEscortData;
const makeSelectAppLocation = () => (0, _reselect.createSelector)(selectAppStateDomain, ({
  location
}) => location);
/**
 * Default selector used by App
 */
exports.makeSelectAppLocation = makeSelectAppLocation;
const makeSelectAppState = () => (0, _reselect.createSelector)(selectAppStateDomain, subState => subState);
var _default = exports.default = makeSelectAppState;
//# sourceMappingURL=selectors.js.map