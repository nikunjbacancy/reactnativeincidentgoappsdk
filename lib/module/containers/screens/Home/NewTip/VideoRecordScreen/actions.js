/**
 *
 * VideoRecordScreen actions
 *
 */

import { ADD_INCIDENT_VIDEO, CREATE_INCIDENT_FAILURE, CREATE_INCIDENT_SUCCESS, CREATE_TIP_WITH_CHAT_FAILURE, CREATE_TIP_WITH_CHAT_REQUEST, CREATE_TIP_WITH_CHAT_SUCCESS, DELETE_INCIDENT_FAILURE, DELETE_INCIDENT_REQUEST, DELETE_INCIDENT_SUCCESS, GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE, GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST, GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS, GET_USER_ORGANIZATIONS_FAILURE, GET_USER_ORGANIZATIONS_REQUEST, GET_USER_ORGANIZATIONS_SUCCESS, HIDE_CALL_MODAL, HIDE_CANCEL_INCIDENT_MODAL, HIDE_FAST_ACCESS_MODAL, HIDE_TIP_CREATED_MODAL, SHOW_CALL_MODAL, SHOW_CANCEL_INCIDENT_MODAL, SHOW_FAST_ACCESS_MODAL, SHOW_TIP_CREATED_MODAL, UPLOAD_VIDEO_FAILURE, UPLOAD_VIDEO_REQUEST, UPLOAD_VIDEO_SUCCESS } from './constants';
export const uploadVideoRequest = uri => ({
  type: UPLOAD_VIDEO_REQUEST,
  payload: uri
});
export const uploadVideoSuccess = () => ({
  type: UPLOAD_VIDEO_SUCCESS
});
export const uploadVideoFailure = error => ({
  type: UPLOAD_VIDEO_FAILURE,
  payload: error,
  error: true
});
export const createIncidentSuccess = incident => ({
  type: CREATE_INCIDENT_SUCCESS,
  payload: incident
});
export const createIncidentFailure = error => ({
  type: CREATE_INCIDENT_FAILURE,
  payload: error,
  error: true
});
export const deleteIncidentRequest = () => ({
  type: DELETE_INCIDENT_REQUEST
});
export const deleteIncidentFailure = error => ({
  type: DELETE_INCIDENT_FAILURE,
  payload: error,
  error: true
});
export const deleteIncidentSuccess = () => ({
  type: DELETE_INCIDENT_SUCCESS
});
export const addIncidentVideo = video => ({
  type: ADD_INCIDENT_VIDEO,
  payload: video
});
export const showCancelIncidentModal = () => ({
  type: SHOW_CANCEL_INCIDENT_MODAL
});
export const hideCancelIncidentModal = () => ({
  type: HIDE_CANCEL_INCIDENT_MODAL
});
export const showCallModal = () => ({
  type: SHOW_CALL_MODAL
});
export const hideCallModal = () => ({
  type: HIDE_CALL_MODAL
});
export const getUserOrganizationsRequest = () => ({
  type: GET_USER_ORGANIZATIONS_REQUEST
});
export const getUserOrganizationsFailure = error => ({
  type: GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
export const getUserOrganizationsSuccess = userOrganizations => ({
  type: GET_USER_ORGANIZATIONS_SUCCESS,
  payload: userOrganizations
});
export const showTipCreatedModal = tipCreatedData => ({
  type: SHOW_TIP_CREATED_MODAL,
  payload: tipCreatedData
});
export const hideTipCreatedModal = () => ({
  type: HIDE_TIP_CREATED_MODAL
});
export const createTipWithChatRequest = () => ({
  type: CREATE_TIP_WITH_CHAT_REQUEST
});
export const createTipWithChatSuccess = () => ({
  type: CREATE_TIP_WITH_CHAT_SUCCESS
});
export const createTipWithChatFailure = error => ({
  type: CREATE_TIP_WITH_CHAT_FAILURE,
  payload: error,
  error: true
});
export const showFastAccessModal = () => ({
  type: SHOW_FAST_ACCESS_MODAL
});
export const hideFastAccessModal = () => ({
  type: HIDE_FAST_ACCESS_MODAL
});
export const getLastActiveTipOrganization = organizationId => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
  payload: organizationId
});
export const getLastTipOrganizationSuccess = organization => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS,
  payload: organization
});
export const getLastTipOrganizationFailure = error => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map