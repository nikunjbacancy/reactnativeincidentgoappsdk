/**
 *
 * TipDetailScreen actions
 *
 */

import { Id, Incident, IncidentVideo } from 'incident-code-core';
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
import {
  GetIncidentVideosRequestPayload,
  GetIncidentVideosSuccessPayload,
  GetMessagesRequestPayload,
  SendMessageRequestPayload,
  TipDetailActionTypes,
  UploadVideoRequestPayload,
} from './types';

export const getIncidentVideosRequest = (
  payload: GetIncidentVideosRequestPayload,
): TipDetailActionTypes => ({
  type: GET_INCIDENT_VIDEOS_REQUEST,
  payload,
});

export const getIncidentVideosSuccess = (
  payload: GetIncidentVideosSuccessPayload,
): TipDetailActionTypes => ({
  type: GET_INCIDENT_VIDEOS_SUCCESS,
  payload,
});

export const getIncidentVideosFailure = (
  error: Error,
): TipDetailActionTypes => ({
  type: GET_INCIDENT_VIDEOS_FAILURE,
  payload: error,
  error: true,
});

export const showCallModal = (): TipDetailActionTypes => ({
  type: SHOW_CALL_MODAL,
});

export const hideCallModal = (): TipDetailActionTypes => ({
  type: HIDE_CALL_MODAL,
});

export const showChatModal = (): TipDetailActionTypes => ({
  type: SHOW_CHAT_MODAL,
});

export const hideChatModal = (): TipDetailActionTypes => ({
  type: HIDE_CHAT_MODAL,
});

export const uploadVideoRequest = (
  payload: UploadVideoRequestPayload,
): TipDetailActionTypes => ({
  type: UPLOAD_VIDEO_REQUEST,
  payload,
});

export const uploadVideoSuccess = (): TipDetailActionTypes => ({
  type: UPLOAD_VIDEO_SUCCESS,
});

export const uploadVideoFailure = (error: Error): TipDetailActionTypes => ({
  type: UPLOAD_VIDEO_FAILURE,
  payload: error,
  error: true,
});

export const addIncidentVideo = (
  video: IncidentVideo,
): TipDetailActionTypes => ({
  type: ADD_INCIDENT_VIDEO,
  payload: video,
});

export const getMessagesRequest = (
  payload: GetMessagesRequestPayload,
): TipDetailActionTypes => ({
  type: GET_MESSAGES_REQUEST,
  payload,
});

export const getMessagesSuccess = (
  messages: GiftedChatMessage[],
): TipDetailActionTypes => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages,
});

export const getMessagesFailure = (error: Error): TipDetailActionTypes => ({
  type: GET_MESSAGES_FAILURE,
  payload: error,
  error: true,
});

export const addMessage = (
  message: GiftedChatMessage,
): TipDetailActionTypes => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const sendMessageRequest = (
  payload: SendMessageRequestPayload,
): TipDetailActionTypes => ({
  type: SEND_MESSAGE_REQUEST,
  payload,
});

export const sendMessageSuccess = (): TipDetailActionTypes => ({
  type: SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = (error: Error): TipDetailActionTypes => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
  error: true,
});

export const getIncidentRequest = (
  incidentId: Id | undefined,
): TipDetailActionTypes => ({
  type: GET_INCIDENT_REQUEST,
  payload: incidentId,
});

export const getIncidentSuccess = (
  incident: Incident,
): TipDetailActionTypes => ({
  type: GET_INCIDENT_SUCCESS,
  payload: incident,
});

export const getIncidentFailure = (error: Error): TipDetailActionTypes => ({
  type: GET_INCIDENT_FAILURE,
  payload: error,
  error: true,
});
