import { GEO_STATUS_REQUEST, GEO_STATUS_SUCCESS, LOCATION_TRACKING_REQUEST, LOCATION_TRACKING_SUCCESS, GET_ALL_GEOFENCS_REQUEST, GET_ALL_GEOFENCS_SUCCESS, SET_SITE_KEY_LOCATION_REQUEST, SET_SITE_KEY_LOCATION_SUCCESS, GET_ALL_GEOFENCS_FAILURE } from './constants';
export const locationTrackRequest = object => ({
  type: LOCATION_TRACKING_REQUEST,
  payload: object
});
export const locationTrackSuccess = object => ({
  type: LOCATION_TRACKING_SUCCESS,
  payload: object
});
export const geoCredStatusRequest = object => ({
  type: GEO_STATUS_REQUEST,
  payload: object
});
export const geoCredStatusSuccess = object => ({
  type: GEO_STATUS_SUCCESS,
  payload: object
});
export const getAllGeofenceRequest = object => ({
  type: GET_ALL_GEOFENCS_REQUEST,
  payload: object
});
export const getAllGeofenceSuccess = object => ({
  type: GET_ALL_GEOFENCS_SUCCESS,
  payload: object
});
export const getAllGeofenceFailure = object => ({
  type: GET_ALL_GEOFENCS_FAILURE,
  payload: object
});
export const setSiteKeyStatusRequest = object => ({
  type: SET_SITE_KEY_LOCATION_REQUEST,
  payload: object
});
export const setSiteKeyStatusSuccess = object => ({
  type: SET_SITE_KEY_LOCATION_SUCCESS,
  payload: object
});
//# sourceMappingURL=actions.js.map