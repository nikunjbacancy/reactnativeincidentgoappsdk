import { Incident } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';

import {
  ADD_PENDING_ESCORT,
  CANCEL_ESCORT_FAILURE,
  CANCEL_ESCORT_REQUEST,
  CANCEL_ESCORT_SUCCESS,
  HIDE_CANCEL_ESCORT_MODAL,
  SHOW_CANCEL_ESCORT_MODAL,
  START_ESCORT_FAILURE,
  START_ESCORT_REQUEST,
  START_ESCORT_SUCCESS,
} from './constants';
import { RequestEscortActionTypes } from './types';

export const startEscortRequest = (
  onLocation: (location: Location) => void,
  comment?: string,
  isPanic?: boolean,
): RequestEscortActionTypes => ({
  type: START_ESCORT_REQUEST,
  payload: { comment, onLocation, isPanic },
});

export const startEscortSuccess = (): RequestEscortActionTypes => ({
  type: START_ESCORT_SUCCESS,
});

export const startEscortFailure = (error: Error): RequestEscortActionTypes => ({
  type: START_ESCORT_FAILURE,
  payload: error,
  error: true,
});

export const cancelEscortRequest = (): RequestEscortActionTypes => ({
  type: CANCEL_ESCORT_REQUEST,
});

export const cancelEscortSuccess = (): RequestEscortActionTypes => ({
  type: CANCEL_ESCORT_SUCCESS,
});

export const cancelEscortFailure = (
  error: Error,
): RequestEscortActionTypes => ({
  type: CANCEL_ESCORT_FAILURE,
  payload: error,
  error: true,
});

export const showCancelEscortModal = (): RequestEscortActionTypes => ({
  type: SHOW_CANCEL_ESCORT_MODAL,
});

export const hideCancelEscortModal = (): RequestEscortActionTypes => ({
  type: HIDE_CANCEL_ESCORT_MODAL,
});

export const addPendingEscort = (
  incident: Incident,
): RequestEscortActionTypes => ({
  type: ADD_PENDING_ESCORT,
  payload: incident,
});
