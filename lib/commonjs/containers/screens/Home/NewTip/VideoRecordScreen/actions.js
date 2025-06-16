"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideoSuccess = exports.uploadVideoRequest = exports.uploadVideoFailure = exports.showTipCreatedModal = exports.showFastAccessModal = exports.showCancelIncidentModal = exports.showCallModal = exports.hideTipCreatedModal = exports.hideFastAccessModal = exports.hideCancelIncidentModal = exports.hideCallModal = exports.getUserOrganizationsSuccess = exports.getUserOrganizationsRequest = exports.getUserOrganizationsFailure = exports.getLastTipOrganizationSuccess = exports.getLastTipOrganizationFailure = exports.getLastActiveTipOrganization = exports.deleteIncidentSuccess = exports.deleteIncidentRequest = exports.deleteIncidentFailure = exports.createTipWithChatSuccess = exports.createTipWithChatRequest = exports.createTipWithChatFailure = exports.createIncidentSuccess = exports.createIncidentFailure = exports.addIncidentVideo = void 0;
var _constants = require("./constants");
/**
 *
 * VideoRecordScreen actions
 *
 */

const uploadVideoRequest = uri => ({
  type: _constants.UPLOAD_VIDEO_REQUEST,
  payload: uri
});
exports.uploadVideoRequest = uploadVideoRequest;
const uploadVideoSuccess = () => ({
  type: _constants.UPLOAD_VIDEO_SUCCESS
});
exports.uploadVideoSuccess = uploadVideoSuccess;
const uploadVideoFailure = error => ({
  type: _constants.UPLOAD_VIDEO_FAILURE,
  payload: error,
  error: true
});
exports.uploadVideoFailure = uploadVideoFailure;
const createIncidentSuccess = incident => ({
  type: _constants.CREATE_INCIDENT_SUCCESS,
  payload: incident
});
exports.createIncidentSuccess = createIncidentSuccess;
const createIncidentFailure = error => ({
  type: _constants.CREATE_INCIDENT_FAILURE,
  payload: error,
  error: true
});
exports.createIncidentFailure = createIncidentFailure;
const deleteIncidentRequest = () => ({
  type: _constants.DELETE_INCIDENT_REQUEST
});
exports.deleteIncidentRequest = deleteIncidentRequest;
const deleteIncidentFailure = error => ({
  type: _constants.DELETE_INCIDENT_FAILURE,
  payload: error,
  error: true
});
exports.deleteIncidentFailure = deleteIncidentFailure;
const deleteIncidentSuccess = () => ({
  type: _constants.DELETE_INCIDENT_SUCCESS
});
exports.deleteIncidentSuccess = deleteIncidentSuccess;
const addIncidentVideo = video => ({
  type: _constants.ADD_INCIDENT_VIDEO,
  payload: video
});
exports.addIncidentVideo = addIncidentVideo;
const showCancelIncidentModal = () => ({
  type: _constants.SHOW_CANCEL_INCIDENT_MODAL
});
exports.showCancelIncidentModal = showCancelIncidentModal;
const hideCancelIncidentModal = () => ({
  type: _constants.HIDE_CANCEL_INCIDENT_MODAL
});
exports.hideCancelIncidentModal = hideCancelIncidentModal;
const showCallModal = () => ({
  type: _constants.SHOW_CALL_MODAL
});
exports.showCallModal = showCallModal;
const hideCallModal = () => ({
  type: _constants.HIDE_CALL_MODAL
});
exports.hideCallModal = hideCallModal;
const getUserOrganizationsRequest = () => ({
  type: _constants.GET_USER_ORGANIZATIONS_REQUEST
});
exports.getUserOrganizationsRequest = getUserOrganizationsRequest;
const getUserOrganizationsFailure = error => ({
  type: _constants.GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.getUserOrganizationsFailure = getUserOrganizationsFailure;
const getUserOrganizationsSuccess = userOrganizations => ({
  type: _constants.GET_USER_ORGANIZATIONS_SUCCESS,
  payload: userOrganizations
});
exports.getUserOrganizationsSuccess = getUserOrganizationsSuccess;
const showTipCreatedModal = tipCreatedData => ({
  type: _constants.SHOW_TIP_CREATED_MODAL,
  payload: tipCreatedData
});
exports.showTipCreatedModal = showTipCreatedModal;
const hideTipCreatedModal = () => ({
  type: _constants.HIDE_TIP_CREATED_MODAL
});
exports.hideTipCreatedModal = hideTipCreatedModal;
const createTipWithChatRequest = () => ({
  type: _constants.CREATE_TIP_WITH_CHAT_REQUEST
});
exports.createTipWithChatRequest = createTipWithChatRequest;
const createTipWithChatSuccess = () => ({
  type: _constants.CREATE_TIP_WITH_CHAT_SUCCESS
});
exports.createTipWithChatSuccess = createTipWithChatSuccess;
const createTipWithChatFailure = error => ({
  type: _constants.CREATE_TIP_WITH_CHAT_FAILURE,
  payload: error,
  error: true
});
exports.createTipWithChatFailure = createTipWithChatFailure;
const showFastAccessModal = () => ({
  type: _constants.SHOW_FAST_ACCESS_MODAL
});
exports.showFastAccessModal = showFastAccessModal;
const hideFastAccessModal = () => ({
  type: _constants.HIDE_FAST_ACCESS_MODAL
});
exports.hideFastAccessModal = hideFastAccessModal;
const getLastActiveTipOrganization = organizationId => ({
  type: _constants.GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
  payload: organizationId
});
exports.getLastActiveTipOrganization = getLastActiveTipOrganization;
const getLastTipOrganizationSuccess = organization => ({
  type: _constants.GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS,
  payload: organization
});
exports.getLastTipOrganizationSuccess = getLastTipOrganizationSuccess;
const getLastTipOrganizationFailure = error => ({
  type: _constants.GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
exports.getLastTipOrganizationFailure = getLastTipOrganizationFailure;
//# sourceMappingURL=actions.js.map