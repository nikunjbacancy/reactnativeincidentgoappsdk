"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserPortrait = exports.updateProfileRequest = exports.setTipCameraVideoIndex = exports.setTipCameraMode = exports.setPassiveEscortData = exports.setIncidentEscortData = exports.getTwilioAccessTokenSuccess = exports.getTwilioAccessTokenRequest = exports.getTwilioAccessTokenFailure = exports.getProfileSuccess = exports.getProfileRequest = exports.getProfileFailure = exports.getConfigsSuccess = exports.getConfigsRequest = exports.getConfigsFailure = exports.clearPassiveEscortData = exports.clearIncidentEscortData = exports.UpdateLocationData = exports.LogErrorToDb = exports.ClearLocationData = void 0;
var _constants = require("./constants");
/**
 *
 * App actions
 *
 */

const getConfigsRequest = () => ({
  type: _constants.GET_CONFIGS_REQUEST
});
exports.getConfigsRequest = getConfigsRequest;
const getConfigsSuccess = config => ({
  type: _constants.GET_CONFIGS_SUCCESS,
  payload: config
});
exports.getConfigsSuccess = getConfigsSuccess;
const getConfigsFailure = error => ({
  type: _constants.GET_CONFIGS_FAILURE,
  payload: error,
  error: true
});
exports.getConfigsFailure = getConfigsFailure;
const getProfileRequest = () => ({
  type: _constants.GET_PROFILE_REQUEST
});
exports.getProfileRequest = getProfileRequest;
const getProfileSuccess = user => ({
  type: _constants.GET_PROFILE_SUCCESS,
  payload: user
});
exports.getProfileSuccess = getProfileSuccess;
const getProfileFailure = error => ({
  type: _constants.GET_PROFILE_FAILURE,
  payload: error,
  error: true
});
exports.getProfileFailure = getProfileFailure;
const setTipCameraMode = mode => ({
  type: _constants.SET_TIP_CAMERA_MODE,
  payload: mode
});
exports.setTipCameraMode = setTipCameraMode;
const setTipCameraVideoIndex = index => ({
  type: _constants.SET_TIP_CAMERA_VIDEO_INDEX,
  payload: index
});
exports.setTipCameraVideoIndex = setTipCameraVideoIndex;
const getTwilioAccessTokenRequest = () => ({
  type: _constants.GET_TWILIO_ACCESS_TOKEN_REQUEST
});
exports.getTwilioAccessTokenRequest = getTwilioAccessTokenRequest;
const getTwilioAccessTokenSuccess = twilioAccessToken => ({
  type: _constants.GET_TWILIO_ACCESS_TOKEN_SUCCESS,
  payload: twilioAccessToken
});
exports.getTwilioAccessTokenSuccess = getTwilioAccessTokenSuccess;
const getTwilioAccessTokenFailure = error => ({
  type: _constants.GET_TWILIO_ACCESS_TOKEN_FAILURE,
  payload: error,
  error: true
});
exports.getTwilioAccessTokenFailure = getTwilioAccessTokenFailure;
const setIncidentEscortData = payload => ({
  type: _constants.SET_INCIDENT_ESCORT_DATA,
  payload
});
exports.setIncidentEscortData = setIncidentEscortData;
const clearIncidentEscortData = () => ({
  type: _constants.CLEAR_INCIDENT_ESCORT_DATA
});
exports.clearIncidentEscortData = clearIncidentEscortData;
const setPassiveEscortData = payload => ({
  type: _constants.SET_PASSIVE_ESCORT_DATA,
  payload
});
exports.setPassiveEscortData = setPassiveEscortData;
const clearPassiveEscortData = () => ({
  type: _constants.CLEAR_PASSIVE_ESCORT_DATA
});
exports.clearPassiveEscortData = clearPassiveEscortData;
const updateUserPortrait = portraitUrl => ({
  type: _constants.UPDATE_USER_PORTRAIT,
  payload: portraitUrl
});
exports.updateUserPortrait = updateUserPortrait;
const updateProfileRequest = () => ({
  type: _constants.UPDATE_PROFILE_REQUEST
});
exports.updateProfileRequest = updateProfileRequest;
const UpdateLocationData = location => ({
  type: _constants.SET_APP_LOCATION,
  payload: location
});
exports.UpdateLocationData = UpdateLocationData;
const ClearLocationData = () => ({
  type: _constants.CLEAR_APP_LOCATION
});
exports.ClearLocationData = ClearLocationData;
const LogErrorToDb = error => ({
  type: _constants.LOG_ERROR,
  payload: error
});
exports.LogErrorToDb = LogErrorToDb;
//# sourceMappingURL=actions.js.map