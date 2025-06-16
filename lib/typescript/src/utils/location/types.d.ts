import { GeoError, GeoPosition } from 'react-native-geolocation-service';
export type ResolveGeoPosition = (value?: GeoPosition | PromiseLike<GeoPosition> | undefined) => void;
export type RejectGeoError = (reason?: GeoError) => void;
import { LOCATION_TRACKING_FAILURE, LOCATION_TRACKING_REQUEST, LOCATION_TRACKING_SUCCESS, GEO_STATUS_FAILURE, GEO_STATUS_REQUEST, GEO_STATUS_SUCCESS, GET_ALL_GEOFENCS_REQUEST, GET_ALL_GEOFENCS_SUCCESS, GET_ALL_GEOFENCS_FAILURE, SET_SITE_KEY_LOCATION_FAILURE, SET_SITE_KEY_LOCATION_REQUEST, SET_SITE_KEY_LOCATION_SUCCESS } from './constants';
export interface LocationTrackRequestAction {
    type: typeof LOCATION_TRACKING_REQUEST;
    payload: any;
}
export interface LocationTrackSuccessAction {
    type: typeof LOCATION_TRACKING_SUCCESS;
    payload: any;
}
export interface LocationTrackFailureAction {
    type: typeof LOCATION_TRACKING_FAILURE;
    payload: Error;
    error: any;
}
export interface LocationTrackState {
    isLoading: boolean;
    payload: any;
}
export interface GeoStatusRequestAction {
    type: typeof GEO_STATUS_REQUEST;
    payload: any;
}
export interface GeoStatusSuccessAction {
    type: typeof GEO_STATUS_SUCCESS;
    payload: any;
}
export interface GeoStatusFailureAction {
    type: typeof GEO_STATUS_FAILURE;
    payload: Error;
    error: any;
}
export interface GeoStatusState {
    isLoading: boolean;
    payload: any;
}
export interface GetAllGeofencesRequestAction {
    type: typeof GET_ALL_GEOFENCS_REQUEST;
    payload: any;
}
export interface GetAllGeofencesSuccessAction {
    type: typeof GET_ALL_GEOFENCS_SUCCESS;
    payload: any;
}
export interface GetAllGeofencesFailureAction {
    type: typeof GET_ALL_GEOFENCS_FAILURE;
    payload: any;
}
export interface GetAllGeofencesState {
    isLoading: boolean;
    payload: any;
}
export interface SetSiteKeyStatusRequestAction {
    type: typeof SET_SITE_KEY_LOCATION_REQUEST;
    payload: any;
}
export interface SetSiteKeyStatusSucessAction {
    type: typeof SET_SITE_KEY_LOCATION_SUCCESS;
    payload: any;
}
export interface SetSiteKeyStatusFailureAction {
    type: typeof SET_SITE_KEY_LOCATION_FAILURE;
    payload: Error;
    error: any;
}
export interface SetSiteKeyStatusState {
    isLoading: boolean;
    payload: any;
}
export type LocationTrackListActionTypes = LocationTrackRequestAction | LocationTrackSuccessAction | LocationTrackFailureAction | GeoStatusRequestAction | GeoStatusSuccessAction | GeoStatusFailureAction | GetAllGeofencesRequestAction | GetAllGeofencesSuccessAction | GetAllGeofencesFailureAction | SetSiteKeyStatusRequestAction | SetSiteKeyStatusSucessAction | SetSiteKeyStatusFailureAction;
