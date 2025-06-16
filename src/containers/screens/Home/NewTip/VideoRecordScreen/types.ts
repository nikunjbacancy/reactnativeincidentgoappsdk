/* eslint-disable import/prefer-default-export */
/**
 *
 * VideoRecordScreen types
 *
 */

import { Id, Incident, IncidentVideo, Organization } from 'incident-code-core';

import {
  ADD_INCIDENT_VIDEO,
  CREATE_INCIDENT_FAILURE,
  CREATE_INCIDENT_REQUEST,
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

export type TipCreatedData = {
  incident: Incident;
  organizationName?: string;
};

export enum CreateTipMode {
  Chat = 'Chat',
  Video = 'Video',
}

export interface NewTipState {
  shouldShowCancelIncidentModal: boolean;
  shouldShowCallModal: boolean;
  deletingIncident: boolean;
  userOrganizations: Organization[];
  shouldShowTipCreatedModal: boolean;
  tipCreatedData: TipCreatedData;
  createTipMode: CreateTipMode;
  creatingTipWithChat: boolean;
  uploadingVideo: boolean;
  shouldShowFastAccessModal: boolean;
  lastTipOrganization?: Organization;
}

export interface UploadVideoRequestAction {
  type: typeof UPLOAD_VIDEO_REQUEST;
  payload: string;
}

export interface UploadVideoSuccessAction {
  type: typeof UPLOAD_VIDEO_SUCCESS;
}

export interface UploadVideoFailureAction {
  type: typeof UPLOAD_VIDEO_FAILURE;
  payload: Error;
  error: boolean;
}

export interface CreateIncidentRequestAction {
  type: typeof CREATE_INCIDENT_REQUEST;
}

export interface CreateIncidentSuccessAction {
  type: typeof CREATE_INCIDENT_SUCCESS;
  payload: Incident;
}

export interface CreateIncidentFailureAction {
  type: typeof CREATE_INCIDENT_FAILURE;
  payload: Error;
  error: boolean;
}

export interface DeleteIncidentRequestAction {
  type: typeof DELETE_INCIDENT_REQUEST;
}

export interface DeleteIncidentSuccessAction {
  type: typeof DELETE_INCIDENT_SUCCESS;
}

export interface DeleteIncidentFailureAction {
  type: typeof DELETE_INCIDENT_FAILURE;
  payload: Error;
  error: boolean;
}

export interface AddIncidentVideoAction {
  type: typeof ADD_INCIDENT_VIDEO;
  payload: IncidentVideo;
}

export interface ShowCancelIncidentModalAction {
  type: typeof SHOW_CANCEL_INCIDENT_MODAL;
}

export interface HideCancelIncidentModalAction {
  type: typeof HIDE_CANCEL_INCIDENT_MODAL;
}

export interface ShowCallModalAction {
  type: typeof SHOW_CALL_MODAL;
}

export interface HideCallModalAction {
  type: typeof HIDE_CALL_MODAL;
}

export interface GetUserOrganizationsRequestAction {
  type: typeof GET_USER_ORGANIZATIONS_REQUEST;
}

export interface GetUserOrganizationsSuccessAction {
  type: typeof GET_USER_ORGANIZATIONS_SUCCESS;
  payload: Organization[];
}

export interface GetUserOrganizationsFailureAction {
  type: typeof GET_USER_ORGANIZATIONS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ShowTipCreatedModalAction {
  type: typeof SHOW_TIP_CREATED_MODAL;
  payload: TipCreatedData;
}

export interface HideTipCreatedModalAction {
  type: typeof HIDE_TIP_CREATED_MODAL;
}

export interface CreateTipWithChatRequestAction {
  type: typeof CREATE_TIP_WITH_CHAT_REQUEST;
}

export interface CreateTipWithChatSuccessAction {
  type: typeof CREATE_TIP_WITH_CHAT_SUCCESS;
}

export interface CreateTipWithChatFailureAction {
  type: typeof CREATE_TIP_WITH_CHAT_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ShowFastAccessModalAction {
  type: typeof SHOW_FAST_ACCESS_MODAL;
}

export interface HideFastAccessModalAction {
  type: typeof HIDE_FAST_ACCESS_MODAL;
}

export interface GetLastActiveTipOrganizationRequestAction {
  type: typeof GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST;
  payload: Id;
}

export interface GetLastActiveTipOrganizationSuccessAction {
  type: typeof GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS;
  payload: Organization;
}

export interface GetLastActiveTipOrganizationFailureAction {
  type: typeof GET_LAST_ACTIVE_TIP_ORGANIZATION_FAILURE;
  payload: Error;
  error: boolean;
}

export type NewTipActionTypes =
  | UploadVideoRequestAction
  | UploadVideoSuccessAction
  | UploadVideoFailureAction
  | CreateIncidentRequestAction
  | CreateIncidentSuccessAction
  | CreateIncidentFailureAction
  | DeleteIncidentRequestAction
  | DeleteIncidentSuccessAction
  | DeleteIncidentFailureAction
  | AddIncidentVideoAction
  | ShowCancelIncidentModalAction
  | HideCancelIncidentModalAction
  | ShowCallModalAction
  | HideCallModalAction
  | GetUserOrganizationsRequestAction
  | GetUserOrganizationsSuccessAction
  | GetUserOrganizationsFailureAction
  | CreateTipWithChatRequestAction
  | CreateTipWithChatSuccessAction
  | CreateTipWithChatFailureAction
  | ShowTipCreatedModalAction
  | HideTipCreatedModalAction
  | ShowFastAccessModalAction
  | HideFastAccessModalAction
  | GetLastActiveTipOrganizationRequestAction
  | GetLastActiveTipOrganizationSuccessAction
  | GetLastActiveTipOrganizationFailureAction;
