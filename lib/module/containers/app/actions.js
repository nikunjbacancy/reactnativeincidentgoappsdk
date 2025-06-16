/**
 *
 * App actions
 *
 */

import { CLEAR_APP_LOCATION, CLEAR_INCIDENT_ESCORT_DATA, CLEAR_PASSIVE_ESCORT_DATA, GET_CONFIGS_FAILURE, GET_CONFIGS_REQUEST, GET_CONFIGS_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, UPDATE_PROFILE_REQUEST, GET_TWILIO_ACCESS_TOKEN_FAILURE, GET_TWILIO_ACCESS_TOKEN_REQUEST, GET_TWILIO_ACCESS_TOKEN_SUCCESS, LOG_ERROR, SET_APP_LOCATION, SET_INCIDENT_ESCORT_DATA, SET_PASSIVE_ESCORT_DATA, SET_TIP_CAMERA_MODE, SET_TIP_CAMERA_VIDEO_INDEX, UPDATE_USER_PORTRAIT } from './constants';
export const getConfigsRequest = () => ({
  type: GET_CONFIGS_REQUEST
});
export const getConfigsSuccess = config => ({
  type: GET_CONFIGS_SUCCESS,
  payload: config
});
export const getConfigsFailure = error => ({
  type: GET_CONFIGS_FAILURE,
  payload: error,
  error: true
});
export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST
});
export const getProfileSuccess = user => ({
  type: GET_PROFILE_SUCCESS,
  payload: user
});
export const getProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
  error: true
});
export const setTipCameraMode = mode => ({
  type: SET_TIP_CAMERA_MODE,
  payload: mode
});
export const setTipCameraVideoIndex = index => ({
  type: SET_TIP_CAMERA_VIDEO_INDEX,
  payload: index
});
export const getTwilioAccessTokenRequest = () => ({
  type: GET_TWILIO_ACCESS_TOKEN_REQUEST
});
export const getTwilioAccessTokenSuccess = twilioAccessToken => ({
  type: GET_TWILIO_ACCESS_TOKEN_SUCCESS,
  payload: twilioAccessToken
});
export const getTwilioAccessTokenFailure = error => ({
  type: GET_TWILIO_ACCESS_TOKEN_FAILURE,
  payload: error,
  error: true
});
export const setIncidentEscortData = payload => ({
  type: SET_INCIDENT_ESCORT_DATA,
  payload
});
export const clearIncidentEscortData = () => ({
  type: CLEAR_INCIDENT_ESCORT_DATA
});
export const setPassiveEscortData = payload => ({
  type: SET_PASSIVE_ESCORT_DATA,
  payload
});
export const clearPassiveEscortData = () => ({
  type: CLEAR_PASSIVE_ESCORT_DATA
});
export const updateUserPortrait = portraitUrl => ({
  type: UPDATE_USER_PORTRAIT,
  payload: portraitUrl
});
export const updateProfileRequest = () => ({
  type: UPDATE_PROFILE_REQUEST
});
export const UpdateLocationData = location => ({
  type: SET_APP_LOCATION,
  payload: location
});
export const ClearLocationData = () => ({
  type: CLEAR_APP_LOCATION
});
export const LogErrorToDb = error => ({
  type: LOG_ERROR,
  payload: error
});
//# sourceMappingURL=actions.js.map