"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSiteKeyStatusSuccess = exports.setSiteKeyStatusRequest = exports.locationTrackSuccess = exports.locationTrackRequest = exports.getAllGeofenceSuccess = exports.getAllGeofenceRequest = exports.getAllGeofenceFailure = exports.geoCredStatusSuccess = exports.geoCredStatusRequest = void 0;
var _constants = require("./constants");
const locationTrackRequest = object => ({
  type: _constants.LOCATION_TRACKING_REQUEST,
  payload: object
});
exports.locationTrackRequest = locationTrackRequest;
const locationTrackSuccess = object => ({
  type: _constants.LOCATION_TRACKING_SUCCESS,
  payload: object
});
exports.locationTrackSuccess = locationTrackSuccess;
const geoCredStatusRequest = object => ({
  type: _constants.GEO_STATUS_REQUEST,
  payload: object
});
exports.geoCredStatusRequest = geoCredStatusRequest;
const geoCredStatusSuccess = object => ({
  type: _constants.GEO_STATUS_SUCCESS,
  payload: object
});
exports.geoCredStatusSuccess = geoCredStatusSuccess;
const getAllGeofenceRequest = object => ({
  type: _constants.GET_ALL_GEOFENCS_REQUEST,
  payload: object
});
exports.getAllGeofenceRequest = getAllGeofenceRequest;
const getAllGeofenceSuccess = object => ({
  type: _constants.GET_ALL_GEOFENCS_SUCCESS,
  payload: object
});
exports.getAllGeofenceSuccess = getAllGeofenceSuccess;
const getAllGeofenceFailure = object => ({
  type: _constants.GET_ALL_GEOFENCS_FAILURE,
  payload: object
});
exports.getAllGeofenceFailure = getAllGeofenceFailure;
const setSiteKeyStatusRequest = object => ({
  type: _constants.SET_SITE_KEY_LOCATION_REQUEST,
  payload: object
});
exports.setSiteKeyStatusRequest = setSiteKeyStatusRequest;
const setSiteKeyStatusSuccess = object => ({
  type: _constants.SET_SITE_KEY_LOCATION_SUCCESS,
  payload: object
});
exports.setSiteKeyStatusSuccess = setSiteKeyStatusSuccess;
//# sourceMappingURL=actions.js.map