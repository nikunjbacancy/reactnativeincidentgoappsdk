/**
 *
 * TipDetailScreen actions
 *
 */

import { ADD_INCIDENT_VIDEO, ADD_MESSAGE, GET_INCIDENT_FAILURE, GET_INCIDENT_REQUEST, GET_INCIDENT_SUCCESS, GET_INCIDENT_VIDEOS_FAILURE, GET_INCIDENT_VIDEOS_REQUEST, GET_INCIDENT_VIDEOS_SUCCESS, GET_MESSAGES_FAILURE, GET_MESSAGES_REQUEST, GET_MESSAGES_SUCCESS, HIDE_CALL_MODAL, HIDE_CHAT_MODAL, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SHOW_CALL_MODAL, SHOW_CHAT_MODAL, UPLOAD_VIDEO_FAILURE, UPLOAD_VIDEO_REQUEST, UPLOAD_VIDEO_SUCCESS } from './constants';
export const getIncidentVideosRequest = payload => ({
  type: GET_INCIDENT_VIDEOS_REQUEST,
  payload
});
export const getIncidentVideosSuccess = payload => ({
  type: GET_INCIDENT_VIDEOS_SUCCESS,
  payload
});
export const getIncidentVideosFailure = error => ({
  type: GET_INCIDENT_VIDEOS_FAILURE,
  payload: error,
  error: true
});
export const showCallModal = () => ({
  type: SHOW_CALL_MODAL
});
export const hideCallModal = () => ({
  type: HIDE_CALL_MODAL
});
export const showChatModal = () => ({
  type: SHOW_CHAT_MODAL
});
export const hideChatModal = () => ({
  type: HIDE_CHAT_MODAL
});
export const uploadVideoRequest = payload => ({
  type: UPLOAD_VIDEO_REQUEST,
  payload
});
export const uploadVideoSuccess = () => ({
  type: UPLOAD_VIDEO_SUCCESS
});
export const uploadVideoFailure = error => ({
  type: UPLOAD_VIDEO_FAILURE,
  payload: error,
  error: true
});
export const addIncidentVideo = video => ({
  type: ADD_INCIDENT_VIDEO,
  payload: video
});
export const getMessagesRequest = payload => ({
  type: GET_MESSAGES_REQUEST,
  payload
});
export const getMessagesSuccess = messages => ({
  type: GET_MESSAGES_SUCCESS,
  payload: messages
});
export const getMessagesFailure = error => ({
  type: GET_MESSAGES_FAILURE,
  payload: error,
  error: true
});
export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message
});
export const sendMessageRequest = payload => ({
  type: SEND_MESSAGE_REQUEST,
  payload
});
export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS
});
export const sendMessageFailure = error => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
  error: true
});
export const getIncidentRequest = incidentId => ({
  type: GET_INCIDENT_REQUEST,
  payload: incidentId
});
export const getIncidentSuccess = incident => ({
  type: GET_INCIDENT_SUCCESS,
  payload: incident
});
export const getIncidentFailure = error => ({
  type: GET_INCIDENT_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map