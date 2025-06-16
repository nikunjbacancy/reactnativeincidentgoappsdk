"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectNewTipScreenStateDomain = exports.makeSelectUserOrganizations = exports.makeSelectUploadingVideo = exports.makeSelectTipCreatedData = exports.makeSelectShouldShowTipCreatedModal = exports.makeSelectShouldShowFastAccessModal = exports.makeSelectShouldShowCancelTipModal = exports.makeSelectShouldShowCallModal = exports.makeSelectShouldShowBottomScreenAction = exports.makeSelectLastTipOrganization = exports.makeSelectDeletingIncident = exports.makeSelectCreatingTipWithChat = exports.makeSelectCreateTipMode = exports.default = void 0;
var _selectors = require("../../../../../containers/app/selectors");
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * VideoRecordScreen selectors
 *
 */

/**
 * Direct selector to the VideoRecordScreen state domain
 */

const selectNewTipScreenStateDomain = state => state.newTipScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectNewTipScreenStateDomain = selectNewTipScreenStateDomain;
const makeSelectShouldShowBottomScreenAction = () => (0, _reselect.createSelector)((0, _selectors.makeSelectNewTipIncidentVideos)(), videos => videos.length > 0);
exports.makeSelectShouldShowBottomScreenAction = makeSelectShouldShowBottomScreenAction;
const makeSelectShouldShowCancelTipModal = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  shouldShowCancelIncidentModal
}) => shouldShowCancelIncidentModal);
exports.makeSelectShouldShowCancelTipModal = makeSelectShouldShowCancelTipModal;
const makeSelectDeletingIncident = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  deletingIncident
}) => deletingIncident);
exports.makeSelectDeletingIncident = makeSelectDeletingIncident;
const makeSelectShouldShowCallModal = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
exports.makeSelectShouldShowCallModal = makeSelectShouldShowCallModal;
const makeSelectUserOrganizations = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  userOrganizations
}) => userOrganizations);
exports.makeSelectUserOrganizations = makeSelectUserOrganizations;
const makeSelectTipCreatedData = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  tipCreatedData
}) => tipCreatedData);
exports.makeSelectTipCreatedData = makeSelectTipCreatedData;
const makeSelectShouldShowTipCreatedModal = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  shouldShowTipCreatedModal
}) => shouldShowTipCreatedModal);
exports.makeSelectShouldShowTipCreatedModal = makeSelectShouldShowTipCreatedModal;
const makeSelectCreateTipMode = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  createTipMode
}) => createTipMode);
exports.makeSelectCreateTipMode = makeSelectCreateTipMode;
const makeSelectCreatingTipWithChat = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  creatingTipWithChat
}) => creatingTipWithChat);
exports.makeSelectCreatingTipWithChat = makeSelectCreatingTipWithChat;
const makeSelectUploadingVideo = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  uploadingVideo
}) => uploadingVideo);
exports.makeSelectUploadingVideo = makeSelectUploadingVideo;
const makeSelectLastTipOrganization = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  lastTipOrganization
}) => lastTipOrganization);
exports.makeSelectLastTipOrganization = makeSelectLastTipOrganization;
const makeSelectShouldShowFastAccessModal = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, ({
  shouldShowFastAccessModal
}) => shouldShowFastAccessModal);

/**
 * Default selector used by VideoRecordScreen
 */
exports.makeSelectShouldShowFastAccessModal = makeSelectShouldShowFastAccessModal;
const makeSelectNewTipScreenState = () => (0, _reselect.createSelector)(selectNewTipScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectNewTipScreenState;
//# sourceMappingURL=selectors.js.map