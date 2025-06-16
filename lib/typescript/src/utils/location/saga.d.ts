/**
 *
 * NotificationScreen saga
 *
 */
import { GeoStatusRequestAction, LocationTrackRequestAction } from './types';
/**
 * Saga function to update location track data.
 * @param payload - The payload containing the location track data.
 */
export declare function updateLocationTrackData({ payload }: LocationTrackRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>>, void, unknown>;
/**
 * Saga function to update geo status.
 * @param payload - The payload containing the geo status data.
 */
export declare function updateGeoStatus({ payload }: GeoStatusRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>>, void, unknown>;
/**
 * Saga function to get all geofences.
 * @param payload - The payload containing the geofence data.
 */
export declare function getAllGeofences({ payload }: LocationTrackRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").LocationTrackListActionTypes>, void, unknown>;
/**
 * Saga function to set site key location.
 * @param payload - The payload containing the site key location data.
 */
export declare function setSiteKeyLocation({ payload }: GeoStatusRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").LocationTrackListActionTypes>, void, unknown>;
/**
 * Root saga function for location tracking.
 */
export default function locationTrackSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
