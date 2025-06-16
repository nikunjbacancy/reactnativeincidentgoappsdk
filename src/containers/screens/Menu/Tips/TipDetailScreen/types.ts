/**
 *
 * TipDetailScreen types
 *
 */

import { Id, Incident, IncidentVideo, Organization } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';

import {
  ADD_INCIDENT_VIDEO,
  ADD_MESSAGE,
  GET_INCIDENT_FAILURE,
  GET_INCIDENT_REQUEST,
  GET_INCIDENT_SUCCESS,
  GET_INCIDENT_VIDEOS_FAILURE,
  GET_INCIDENT_VIDEOS_REQUEST,
  GET_INCIDENT_VIDEOS_SUCCESS,
  GET_MESSAGES_FAILURE,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  HIDE_CALL_MODAL,
  HIDE_CHAT_MODAL,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SHOW_CALL_MODAL,
  SHOW_CHAT_MODAL,
  UPLOAD_VIDEO_FAILURE,
  UPLOAD_VIDEO_REQUEST,
  UPLOAD_VIDEO_SUCCESS,
} from './constants';

export type GetIncidentVideosRequestPayload = {
  incident: Incident;
  organizationId: Id;
};

export type GetIncidentVideosSuccessPayload = {
  videos: IncidentVideo[];
  organization: Organization;
};

export type UploadVideoRequestPayload = {
  videoUri: string;
  incident: Incident;
};

export type GetMessagesRequestPayload = {
  incident: Incident;
  organization: Organization;
};

export type SendMessageRequestPayload = {
  incident: Incident;
  message: GiftedChatMessage;
};

export interface TipDetailState {
  incident?: Incident;
  incidentVideos: IncidentVideo[];
  isLoadingIncident: boolean;
  isLoadingVideos: boolean;
  organization: Organization;
  shouldShowCallModal: boolean;
  shouldShowChatModal: boolean;
  messages: GiftedChatMessage[];
}

export interface GetIncidentVideosRequestAction {
  type: typeof GET_INCIDENT_VIDEOS_REQUEST;
  payload: GetIncidentVideosRequestPayload;
}

export interface GetIncidentVideosSuccessAction {
  type: typeof GET_INCIDENT_VIDEOS_SUCCESS;
  payload: GetIncidentVideosSuccessPayload;
}

export interface GetIncidentVideosFailureAction {
  type: typeof GET_INCIDENT_VIDEOS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ShowCallModalAction {
  type: typeof SHOW_CALL_MODAL;
}

export interface HideCallModalAction {
  type: typeof HIDE_CALL_MODAL;
}

export interface ShowChatModalAction {
  type: typeof SHOW_CHAT_MODAL;
}

export interface HideChatModalAction {
  type: typeof HIDE_CHAT_MODAL;
}

export interface UploadVideoRequestAction {
  type: typeof UPLOAD_VIDEO_REQUEST;
  payload: UploadVideoRequestPayload;
}

export interface UploadVideoSuccessAction {
  type: typeof UPLOAD_VIDEO_SUCCESS;
}

export interface UploadVideoFailureAction {
  type: typeof UPLOAD_VIDEO_FAILURE;
  payload: Error;
  error: boolean;
}

export interface AddIncidentVideoAction {
  type: typeof ADD_INCIDENT_VIDEO;
  payload: IncidentVideo;
}

export interface GetMessagesRequestAction {
  type: typeof GET_MESSAGES_REQUEST;
  payload: GetMessagesRequestPayload;
}

export interface GetMessagesSuccessAction {
  type: typeof GET_MESSAGES_SUCCESS;
  payload: GiftedChatMessage[];
}

export interface GetMessagesFailureAction {
  type: typeof GET_MESSAGES_FAILURE;
  payload: Error;
  error: boolean;
}

export interface SendMessageRequestAction {
  type: typeof SEND_MESSAGE_REQUEST;
  payload: SendMessageRequestPayload;
}

export interface SendMessageSuccessAction {
  type: typeof SEND_MESSAGE_SUCCESS;
}

export interface SendMessageFailureAction {
  type: typeof SEND_MESSAGE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: GiftedChatMessage;
}

export interface GetIncidentRequestAction {
  type: typeof GET_INCIDENT_REQUEST;
  payload: Id | undefined;
}

export interface GetIncidentSuccessAction {
  type: typeof GET_INCIDENT_SUCCESS;
  payload: Incident;
}

export interface GetIncidentFailureAction {
  type: typeof GET_INCIDENT_FAILURE;
  payload: Error;
  error: boolean;
}

export type TipDetailActionTypes =
  | GetIncidentVideosRequestAction
  | GetIncidentVideosSuccessAction
  | GetIncidentVideosFailureAction
  | ShowCallModalAction
  | HideCallModalAction
  | ShowChatModalAction
  | HideChatModalAction
  | UploadVideoRequestAction
  | UploadVideoSuccessAction
  | UploadVideoFailureAction
  | AddIncidentVideoAction
  | GetMessagesRequestAction
  | GetMessagesSuccessAction
  | GetMessagesFailureAction
  | SendMessageRequestAction
  | SendMessageSuccessAction
  | SendMessageFailureAction
  | GetIncidentRequestAction
  | GetIncidentSuccessAction
  | GetIncidentFailureAction
  | AddMessageAction;
