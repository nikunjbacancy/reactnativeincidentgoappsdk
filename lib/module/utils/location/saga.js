/**
 *
 * NotificationScreen saga
 *
 */

import * as api from '../../api';
import { call, takeLatest, put } from 'redux-saga/effects';
import { getAllGeofenceFailure, getAllGeofenceSuccess, getAllGeofenceRequest } from './actions';
import { LOCATION_TRACKING_REQUEST, GEO_STATUS_REQUEST, GET_ALL_GEOFENCS_REQUEST, SET_SITE_KEY_LOCATION_REQUEST } from './constants';
import { insertAllGeofences } from './backgroundGeolocation';
import Toast from 'react-native-root-toast';

/**
 * Saga function to update location track data.
 * @param payload - The payload containing the location track data.
 */
export function* updateLocationTrackData({
  payload
}) {
  try {
    yield call(api.user.updateLocationTrackData, payload);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    Toast.show(errorMessage, {
      position: Toast.positions.CENTER,
      duration: 3000
    });
  }
}

/**
 * Saga function to update geo status.
 * @param payload - The payload containing the geo status data.
 */
export function* updateGeoStatus({
  payload
}) {
  try {
    yield call(api.user.updateGeoCredStatus, payload);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    Toast.show(errorMessage, {
      position: Toast.positions.CENTER,
      duration: 3000
    });
  }
}

/**
 * Saga function to get all geofences.
 * @param payload - The payload containing the geofence data.
 */
export function* getAllGeofences({
  payload
}) {
  console.log("getAllGeofences HIT");
  try {
    const response = yield call(api.user.getAllUserGeofences, payload);
    console.log("get all geofences response ===> ", JSON.stringify(response.data));
    const regionArray = [];
    response.data.locations.map(locationObject => {
      if (locationObject.regions != null) {
        locationObject.regions.map(regionObject => {
          regionObject.location_id = locationObject.location_id;
          regionObject.location_name = locationObject.name;
          regionArray.push(regionObject);
        });
      }
    });
    yield put(getAllGeofenceSuccess(response.data));
    console.log("regionArray ====>", regionArray);
    insertAllGeofences(regionArray, response.data);
  } catch (error) {
    yield put(getAllGeofenceFailure(error));
  }
}

/**
 * Saga function to set site key location.
 * @param payload - The payload containing the site key location data.
 */
export function* setSiteKeyLocation({
  payload
}) {
  try {
    yield call(api.user.setSiteKeyStatus, payload);
    yield put(getAllGeofenceRequest(payload.userId));
  } catch (error) {
    // console.log("setSiteKeyStatus error ===>", error)
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    Toast.show(errorMessage, {
      position: Toast.positions.CENTER
    });
  }
}

/**
 * Root saga function for location tracking.
 */
export default function* locationTrackSaga() {
  yield takeLatest(LOCATION_TRACKING_REQUEST, updateLocationTrackData);
  yield takeLatest(GEO_STATUS_REQUEST, updateGeoStatus);
  yield takeLatest(GET_ALL_GEOFENCS_REQUEST, getAllGeofences);
  yield takeLatest(SET_SITE_KEY_LOCATION_REQUEST, setSiteKeyLocation);
}
//# sourceMappingURL=saga.js.map