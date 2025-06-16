/**
 * Settings screen actions
 */

import {
  BEACON_REGISTRATION_REQUEST,
  BEACON_REGISTRATION_FAILURE,
  BEACON_REGISTRATION_SUCCESS,
} from './constants';
import { BeaconRegistrationActionTypes, BeaconConnectData, BeaconRegisteredPayload } from './types';

export const beaconRegistrationRequest = (
  beaconConnectParams: BeaconConnectData,
): BeaconRegistrationActionTypes => ({
  type: BEACON_REGISTRATION_REQUEST,
  payload: beaconConnectParams,
});

export const beaconRegistrationSuccess = (
  payload: BeaconRegisteredPayload,
): BeaconRegistrationActionTypes => ({
  type: BEACON_REGISTRATION_SUCCESS,
  payload,
});

export const beaconRegistrationFailure = (
  error: Error,
): BeaconRegistrationActionTypes => ({
  type: BEACON_REGISTRATION_FAILURE,
  payload: error,
  error: true,
});
