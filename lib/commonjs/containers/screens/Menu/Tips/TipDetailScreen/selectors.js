"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectTipDetailScreenStateDomain = exports.makeSelectShouldShowChatModal = exports.makeSelectShouldShowCallModal = exports.makeSelectOrganization = exports.makeSelectMessages = exports.makeSelectIsLoading = exports.makeSelectIncidentVideos = exports.makeSelectIncident = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * TipDetailScreen selectors
 *
 */

/**
 * Direct selector to the TipDetailScreen state domain
 */

const selectTipDetailScreenStateDomain = state => state.tipDetailScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectTipDetailScreenStateDomain = selectTipDetailScreenStateDomain;
const makeSelectIncidentVideos = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  incidentVideos
}) => incidentVideos);
exports.makeSelectIncidentVideos = makeSelectIncidentVideos;
const makeSelectOrganization = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  organization
}) => organization);
exports.makeSelectOrganization = makeSelectOrganization;
const makeSelectIsLoading = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  isLoadingVideos,
  isLoadingIncident
}) => isLoadingVideos || isLoadingIncident);
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectShouldShowCallModal = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
exports.makeSelectShouldShowCallModal = makeSelectShouldShowCallModal;
const makeSelectShouldShowChatModal = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  shouldShowChatModal
}) => shouldShowChatModal);
exports.makeSelectShouldShowChatModal = makeSelectShouldShowChatModal;
const makeSelectMessages = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  messages
}) => messages);
exports.makeSelectMessages = makeSelectMessages;
const makeSelectIncident = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, ({
  incident
}) => incident);

/**
 * Default selector used by TipDetailScreen
 */
exports.makeSelectIncident = makeSelectIncident;
const makeSelectTipDetailScreenState = () => (0, _reselect.createSelector)(selectTipDetailScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectTipDetailScreenState;
//# sourceMappingURL=selectors.js.map