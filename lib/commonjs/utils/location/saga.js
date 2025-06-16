"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = locationTrackSaga;
exports.getAllGeofences = getAllGeofences;
exports.setSiteKeyLocation = setSiteKeyLocation;
exports.updateGeoStatus = updateGeoStatus;
exports.updateLocationTrackData = updateLocationTrackData;
var api = _interopRequireWildcard(require("../../api"));
var _effects = require("redux-saga/effects");
var _actions = require("./actions");
var _constants = require("./constants");
var _backgroundGeolocation = require("./backgroundGeolocation");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * NotificationScreen saga
 *
 */

/**
 * Saga function to update location track data.
 * @param payload - The payload containing the location track data.
 */
function* updateLocationTrackData({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.updateLocationTrackData, payload);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    _reactNativeRootToast.default.show(errorMessage, {
      position: _reactNativeRootToast.default.positions.CENTER,
      duration: 3000
    });
  }
}

/**
 * Saga function to update geo status.
 * @param payload - The payload containing the geo status data.
 */
function* updateGeoStatus({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.updateGeoCredStatus, payload);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    _reactNativeRootToast.default.show(errorMessage, {
      position: _reactNativeRootToast.default.positions.CENTER,
      duration: 3000
    });
  }
}

/**
 * Saga function to get all geofences.
 * @param payload - The payload containing the geofence data.
 */
function* getAllGeofences({
  payload
}) {
  console.log("getAllGeofences HIT");
  try {
    const response = yield (0, _effects.call)(api.user.getAllUserGeofences, payload);
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
    yield (0, _effects.put)((0, _actions.getAllGeofenceSuccess)(response.data));
    console.log("regionArray ====>", regionArray);
    (0, _backgroundGeolocation.insertAllGeofences)(regionArray, response.data);
  } catch (error) {
    yield (0, _effects.put)((0, _actions.getAllGeofenceFailure)(error));
  }
}

/**
 * Saga function to set site key location.
 * @param payload - The payload containing the site key location data.
 */
function* setSiteKeyLocation({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.setSiteKeyStatus, payload);
    yield (0, _effects.put)((0, _actions.getAllGeofenceRequest)(payload.userId));
  } catch (error) {
    // console.log("setSiteKeyStatus error ===>", error)
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    _reactNativeRootToast.default.show(errorMessage, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
  }
}

/**
 * Root saga function for location tracking.
 */
function* locationTrackSaga() {
  yield (0, _effects.takeLatest)(_constants.LOCATION_TRACKING_REQUEST, updateLocationTrackData);
  yield (0, _effects.takeLatest)(_constants.GEO_STATUS_REQUEST, updateGeoStatus);
  yield (0, _effects.takeLatest)(_constants.GET_ALL_GEOFENCS_REQUEST, getAllGeofences);
  yield (0, _effects.takeLatest)(_constants.SET_SITE_KEY_LOCATION_REQUEST, setSiteKeyLocation);
}
//# sourceMappingURL=saga.js.map