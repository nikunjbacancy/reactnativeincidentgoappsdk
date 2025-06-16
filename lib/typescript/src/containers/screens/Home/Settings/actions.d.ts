/**
 * Settings screen actions
 */
import { BeaconRegistrationActionTypes, BeaconConnectData, BeaconRegisteredPayload } from './types';
export declare const beaconRegistrationRequest: (beaconConnectParams: BeaconConnectData) => BeaconRegistrationActionTypes;
export declare const beaconRegistrationSuccess: (payload: BeaconRegisteredPayload) => BeaconRegistrationActionTypes;
export declare const beaconRegistrationFailure: (error: Error) => BeaconRegistrationActionTypes;
