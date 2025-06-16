/**
 *
 * App actions
 *
 */

import { TipCameraMode } from 'components/TipCamera/types';
import { AccessToken, AppUser, Config, ErrorLog } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';

import {
  CLEAR_APP_LOCATION,
  CLEAR_INCIDENT_ESCORT_DATA,
  CLEAR_PASSIVE_ESCORT_DATA,
  GET_CONFIGS_FAILURE,
  GET_CONFIGS_REQUEST,
  GET_CONFIGS_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  GET_TWILIO_ACCESS_TOKEN_FAILURE,
  GET_TWILIO_ACCESS_TOKEN_REQUEST,
  GET_TWILIO_ACCESS_TOKEN_SUCCESS,
  LOG_ERROR,
  SET_APP_LOCATION,
  SET_INCIDENT_ESCORT_DATA,
  SET_PASSIVE_ESCORT_DATA,
  SET_TIP_CAMERA_MODE,
  SET_TIP_CAMERA_VIDEO_INDEX,
  UPDATE_USER_PORTRAIT,
} from './constants';
import {
  AppActionTypes,
  PassiveEscortData,
  SetIncidentEscortDataPayload,
} from './types';

export const getConfigsRequest = (): AppActionTypes => ({
  type: GET_CONFIGS_REQUEST,
});

export const getConfigsSuccess = (config: Config): AppActionTypes => ({
  type: GET_CONFIGS_SUCCESS,
  payload: config,
});

export const getConfigsFailure = (error: Error): AppActionTypes => ({
  type: GET_CONFIGS_FAILURE,
  payload: error,
  error: true,
});

export const getProfileRequest = (): AppActionTypes => ({
  type: GET_PROFILE_REQUEST,
});


export const getProfileSuccess = (user: AppUser): AppActionTypes => ({
  type: GET_PROFILE_SUCCESS,
  payload: user,
});

export const getProfileFailure = (error: Error): AppActionTypes => ({
  type: GET_PROFILE_FAILURE,
  payload: error,
  error: true,
});

export const setTipCameraMode = (mode: TipCameraMode): AppActionTypes => ({
  type: SET_TIP_CAMERA_MODE,
  payload: mode,
});

export const setTipCameraVideoIndex = (index: number): AppActionTypes => ({
  type: SET_TIP_CAMERA_VIDEO_INDEX,
  payload: index,
});

export const getTwilioAccessTokenRequest = (): AppActionTypes => ({
  type: GET_TWILIO_ACCESS_TOKEN_REQUEST,
});

export const getTwilioAccessTokenSuccess = (
  twilioAccessToken: AccessToken,
): AppActionTypes => ({
  type: GET_TWILIO_ACCESS_TOKEN_SUCCESS,
  payload: twilioAccessToken,
});

export const getTwilioAccessTokenFailure = (error: Error): AppActionTypes => ({
  type: GET_TWILIO_ACCESS_TOKEN_FAILURE,
  payload: error,
  error: true,
});

export const setIncidentEscortData = (
  payload: SetIncidentEscortDataPayload,
): AppActionTypes => ({
  type: SET_INCIDENT_ESCORT_DATA,
  payload,
});

export const clearIncidentEscortData = (): AppActionTypes => ({
  type: CLEAR_INCIDENT_ESCORT_DATA,
});

export const setPassiveEscortData = (
  payload: PassiveEscortData,
): AppActionTypes => ({
  type: SET_PASSIVE_ESCORT_DATA,
  payload,
});

export const clearPassiveEscortData = (): AppActionTypes => ({
  type: CLEAR_PASSIVE_ESCORT_DATA,
});

export const updateUserPortrait = (
  portraitUrl: string | undefined,
): AppActionTypes => ({
  type: UPDATE_USER_PORTRAIT,
  payload: portraitUrl,
});

export const updateProfileRequest = (): AppActionTypes => ({
  type: UPDATE_PROFILE_REQUEST,
});
export const UpdateLocationData = (
  location: Location | undefined,
): AppActionTypes => ({
  type: SET_APP_LOCATION,
  payload: location,
});

export const ClearLocationData = (): AppActionTypes => ({
  type: CLEAR_APP_LOCATION,
});

export const LogErrorToDb = (error: ErrorLog): AppActionTypes => ({
  type: LOG_ERROR,
  payload: error,
});
