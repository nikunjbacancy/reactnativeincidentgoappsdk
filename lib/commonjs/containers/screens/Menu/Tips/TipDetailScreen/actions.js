"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideoSuccess = exports.uploadVideoRequest = exports.uploadVideoFailure = exports.showChatModal = exports.showCallModal = exports.sendMessageSuccess = exports.sendMessageRequest = exports.sendMessageFailure = exports.hideChatModal = exports.hideCallModal = exports.getMessagesSuccess = exports.getMessagesRequest = exports.getMessagesFailure = exports.getIncidentVideosSuccess = exports.getIncidentVideosRequest = exports.getIncidentVideosFailure = exports.getIncidentSuccess = exports.getIncidentRequest = exports.getIncidentFailure = exports.addMessage = exports.addIncidentVideo = void 0;
var _constants = require("./constants");
/**
 *
 * TipDetailScreen actions
 *
 */

const getIncidentVideosRequest = payload => ({
  type: _constants.GET_INCIDENT_VIDEOS_REQUEST,
  payload
});
exports.getIncidentVideosRequest = getIncidentVideosRequest;
const getIncidentVideosSuccess = payload => ({
  type: _constants.GET_INCIDENT_VIDEOS_SUCCESS,
  payload
});
exports.getIncidentVideosSuccess = getIncidentVideosSuccess;
const getIncidentVideosFailure = error => ({
  type: _constants.GET_INCIDENT_VIDEOS_FAILURE,
  payload: error,
  error: true
});
exports.getIncidentVideosFailure = getIncidentVideosFailure;
const showCallModal = () => ({
  type: _constants.SHOW_CALL_MODAL
});
exports.showCallModal = showCallModal;
const hideCallModal = () => ({
  type: _constants.HIDE_CALL_MODAL
});
exports.hideCallModal = hideCallModal;
const showChatModal = () => ({
  type: _constants.SHOW_CHAT_MODAL
});
exports.showChatModal = showChatModal;
const hideChatModal = () => ({
  type: _constants.HIDE_CHAT_MODAL
});
exports.hideChatModal = hideChatModal;
const uploadVideoRequest = payload => ({
  type: _constants.UPLOAD_VIDEO_REQUEST,
  payload
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
const addIncidentVideo = video => ({
  type: _constants.ADD_INCIDENT_VIDEO,
  payload: video
});
exports.addIncidentVideo = addIncidentVideo;
const getMessagesRequest = payload => ({
  type: _constants.GET_MESSAGES_REQUEST,
  payload
});
exports.getMessagesRequest = getMessagesRequest;
const getMessagesSuccess = messages => ({
  type: _constants.GET_MESSAGES_SUCCESS,
  payload: messages
});
exports.getMessagesSuccess = getMessagesSuccess;
const getMessagesFailure = error => ({
  type: _constants.GET_MESSAGES_FAILURE,
  payload: error,
  error: true
});
exports.getMessagesFailure = getMessagesFailure;
const addMessage = message => ({
  type: _constants.ADD_MESSAGE,
  payload: message
});
exports.addMessage = addMessage;
const sendMessageRequest = payload => ({
  type: _constants.SEND_MESSAGE_REQUEST,
  payload
});
exports.sendMessageRequest = sendMessageRequest;
const sendMessageSuccess = () => ({
  type: _constants.SEND_MESSAGE_SUCCESS
});
exports.sendMessageSuccess = sendMessageSuccess;
const sendMessageFailure = error => ({
  type: _constants.SEND_MESSAGE_FAILURE,
  payload: error,
  error: true
});
exports.sendMessageFailure = sendMessageFailure;
const getIncidentRequest = incidentId => ({
  type: _constants.GET_INCIDENT_REQUEST,
  payload: incidentId
});
exports.getIncidentRequest = getIncidentRequest;
const getIncidentSuccess = incident => ({
  type: _constants.GET_INCIDENT_SUCCESS,
  payload: incident
});
exports.getIncidentSuccess = getIncidentSuccess;
const getIncidentFailure = error => ({
  type: _constants.GET_INCIDENT_FAILURE,
  payload: error,
  error: true
});
exports.getIncidentFailure = getIncidentFailure;
//# sourceMappingURL=actions.js.map