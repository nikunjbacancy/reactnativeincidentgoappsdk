/**
 *
 * VideoRecordScreen actions
 *
 */

import { Id, Incident, IncidentVideo, Organization } from 'incident-code-core';

import {
  ADD_INCIDENT_VIDEO,
  CREATE_INCIDENT_FAILURE,
  CREATE_INCIDENT_SUCCESS,
  CREATE_TIP_WITH_CHAT_FAILURE,
  CREATE_TIP_WITH_CHAT_REQUEST,
  CREATE_TIP_WITH_CHAT_SUCCESS,
  DELETE_INCIDENT_FAILURE,
  DELETE_INCIDENT_REQUEST,
  DELETE_INCIDENT_SUCCESS,
  GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE,
  GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
  GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS,
  GET_USER_ORGANIZATIONS_FAILURE,
  GET_USER_ORGANIZATIONS_REQUEST,
  GET_USER_ORGANIZATIONS_SUCCESS,
  HIDE_CALL_MODAL,
  HIDE_CANCEL_INCIDENT_MODAL,
  HIDE_FAST_ACCESS_MODAL,
  HIDE_TIP_CREATED_MODAL,
  SHOW_CALL_MODAL,
  SHOW_CANCEL_INCIDENT_MODAL,
  SHOW_FAST_ACCESS_MODAL,
  SHOW_TIP_CREATED_MODAL,
  UPLOAD_VIDEO_FAILURE,
  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
} from './constants';
import { NewTipActionTypes, TipCreatedData } from './types';

export const uploadVideoRequest = (uri: string): NewTipActionTypes => ({
  type: UPLOAD_VIDEO_REQUEST,
  payload: uri,
});

export const uploadVideoSuccess = (): NewTipActionTypes => ({
  type: UPLOAD_VIDEO_SUCCESS,
});

export const uploadVideoFailure = (error: Error): NewTipActionTypes => ({
  type: UPLOAD_VIDEO_FAILURE,
  payload: error,
  error: true,
});

export const createIncidentSuccess = (
  incident: Incident,
): NewTipActionTypes => ({
  type: CREATE_INCIDENT_SUCCESS,
  payload: incident,
});

export const createIncidentFailure = (error: Error): NewTipActionTypes => ({
  type: CREATE_INCIDENT_FAILURE,
  payload: error,
  error: true,
});

export const deleteIncidentRequest = (): NewTipActionTypes => ({
  type: DELETE_INCIDENT_REQUEST,
});

export const deleteIncidentFailure = (error: Error): NewTipActionTypes => ({
  type: DELETE_INCIDENT_FAILURE,
  payload: error,
  error: true,
});

export const deleteIncidentSuccess = (): NewTipActionTypes => ({
  type: DELETE_INCIDENT_SUCCESS,
});

export const addIncidentVideo = (video: IncidentVideo): NewTipActionTypes => ({
  type: ADD_INCIDENT_VIDEO,
  payload: video,
});

export const showCancelIncidentModal = (): NewTipActionTypes => ({
  type: SHOW_CANCEL_INCIDENT_MODAL,
});

export const hideCancelIncidentModal = (): NewTipActionTypes => ({
  type: HIDE_CANCEL_INCIDENT_MODAL,
});

export const showCallModal = (): NewTipActionTypes => ({
  type: SHOW_CALL_MODAL,
});

export const hideCallModal = (): NewTipActionTypes => ({
  type: HIDE_CALL_MODAL,
});

export const getUserOrganizationsRequest = (): NewTipActionTypes => ({
  type: GET_USER_ORGANIZATIONS_REQUEST,
});

export const getUserOrganizationsFailure = (
  error: Error,
): NewTipActionTypes => ({
  type: GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});

export const getUserOrganizationsSuccess = (
  userOrganizations: Organization[],
): NewTipActionTypes => ({
  type: GET_USER_ORGANIZATIONS_SUCCESS,
  payload: userOrganizations,
});

export const showTipCreatedModal = (
  tipCreatedData: TipCreatedData,
): NewTipActionTypes => ({
  type: SHOW_TIP_CREATED_MODAL,
  payload: tipCreatedData,
});

export const hideTipCreatedModal = (): NewTipActionTypes => ({
  type: HIDE_TIP_CREATED_MODAL,
});

export const createTipWithChatRequest = (): NewTipActionTypes => ({
  type: CREATE_TIP_WITH_CHAT_REQUEST,
});

export const createTipWithChatSuccess = (): NewTipActionTypes => ({
  type: CREATE_TIP_WITH_CHAT_SUCCESS,
});

export const createTipWithChatFailure = (error: Error): NewTipActionTypes => ({
  type: CREATE_TIP_WITH_CHAT_FAILURE,
  payload: error,
  error: true,
});

export const showFastAccessModal = (): NewTipActionTypes => ({
  type: SHOW_FAST_ACCESS_MODAL,
});

export const hideFastAccessModal = (): NewTipActionTypes => ({
  type: HIDE_FAST_ACCESS_MODAL,
});

export const getLastActiveTipOrganization = (
  organizationId: Id,
): NewTipActionTypes => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
  payload: organizationId,
});

export const getLastTipOrganizationSuccess = (
  organization: Organization,
): NewTipActionTypes => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS,
  payload: organization,
});

export const getLastTipOrganizationFailure = (
  error: Error,
): NewTipActionTypes => ({
  type: GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE,
  payload: error,
  error: true,
});
