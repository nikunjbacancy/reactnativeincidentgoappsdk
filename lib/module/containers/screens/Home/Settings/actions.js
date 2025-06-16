/**
 * Settings screen actions
 */

import { BEACON_REGISTRATION_REQUEST, BEACON_REGISTRATION_FAILURE, BEACON_REGISTRATION_SUCCESS } from './constants';
export const beaconRegistrationRequest = beaconConnectParams => ({
  type: BEACON_REGISTRATION_REQUEST,
  payload: beaconConnectParams
});
export const beaconRegistrationSuccess = payload => ({
  type: BEACON_REGISTRATION_SUCCESS,
  payload
});
export const beaconRegistrationFailure = error => ({
  type: BEACON_REGISTRATION_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map