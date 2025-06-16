/**
 *
 * UpdateNameScreen types
 *
 */
import { AppUser } from 'incident-code-core';
import { BEACON_REGISTRATION_FAILURE, BEACON_REGISTRATION_REQUEST, BEACON_REGISTRATION_SUCCESS } from './constants';
export interface BeaconConnectData {
    user: AppUser;
    name: string;
    serviceUUIDs: string;
    address?: string;
}
export type BeaconRegisteredPayload = {
    flag: boolean;
    message: string;
};
export interface SettingsState {
    beaconRegisteredData: BeaconRegisteredPayload;
    isLoading: boolean;
}
export interface BeaconRegistrationRequestAction {
    type: typeof BEACON_REGISTRATION_REQUEST;
    payload: BeaconConnectData;
}
export interface BeaconRegistrationSuccessAction {
    type: typeof BEACON_REGISTRATION_SUCCESS;
    payload: BeaconRegisteredPayload;
}
export interface BeaconRegistrationFailureAction {
    type: typeof BEACON_REGISTRATION_FAILURE;
    payload: Error;
    error: boolean;
}
export type BeaconRegistrationActionTypes = BeaconRegistrationRequestAction | BeaconRegistrationSuccessAction | BeaconRegistrationFailureAction;
