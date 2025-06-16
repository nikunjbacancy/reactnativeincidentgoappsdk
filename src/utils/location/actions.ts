

import {
    GEO_STATUS_REQUEST,
    GEO_STATUS_SUCCESS,
    LOCATION_TRACKING_REQUEST,
    LOCATION_TRACKING_SUCCESS,
    GET_ALL_GEOFENCS_REQUEST,
    GET_ALL_GEOFENCS_SUCCESS,
    SET_SITE_KEY_LOCATION_REQUEST,
    SET_SITE_KEY_LOCATION_SUCCESS,
    GET_ALL_GEOFENCS_FAILURE
} from './constants';

import { LocationTrackListActionTypes } from './types';

export const locationTrackRequest = (
    object: any,
): LocationTrackListActionTypes => ({
    type: LOCATION_TRACKING_REQUEST,
    payload: object,
});

export const locationTrackSuccess = (
    object: any,
): LocationTrackListActionTypes => ({
    type: LOCATION_TRACKING_SUCCESS,
    payload: object,
});

export const geoCredStatusRequest = (
    object: any,
): LocationTrackListActionTypes => ({
    type: GEO_STATUS_REQUEST,
    payload: object,
});

export const geoCredStatusSuccess = (
    object: any,
): LocationTrackListActionTypes => ({
    type: GEO_STATUS_SUCCESS,
    payload: object,
});

export const getAllGeofenceRequest = (
    object: any,
): LocationTrackListActionTypes => ({
    type: GET_ALL_GEOFENCS_REQUEST,
    payload: object,
});

export const getAllGeofenceSuccess = (
    object: any,
): LocationTrackListActionTypes => ({
    type: GET_ALL_GEOFENCS_SUCCESS,
    payload: object,
});

export const getAllGeofenceFailure = (
    object: any,
): LocationTrackListActionTypes => ({
    type: GET_ALL_GEOFENCS_FAILURE,
    payload: object,
});


export const setSiteKeyStatusRequest = (
    object: any,
): LocationTrackListActionTypes => ({
    type: SET_SITE_KEY_LOCATION_REQUEST,
    payload: object,
});

export const setSiteKeyStatusSuccess = (
    object: any,
): LocationTrackListActionTypes => ({
    type: SET_SITE_KEY_LOCATION_SUCCESS,
    payload: object,
});
