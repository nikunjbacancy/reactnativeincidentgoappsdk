"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SET_SITE_KEY_LOCATION_SUCCESS = exports.SET_SITE_KEY_LOCATION_REQUEST = exports.SET_SITE_KEY_LOCATION_FAILURE = exports.OptionsForCachedFine = exports.MaximumAge = exports.LongTimeout = exports.LOCATION_TRACKING_SUCCESS = exports.LOCATION_TRACKING_REQUEST = exports.LOCATION_TRACKING_FAILURE = exports.GET_ALL_GEOFENCS_SUCCESS = exports.GET_ALL_GEOFENCS_REQUEST = exports.GET_ALL_GEOFENCS_FAILURE = exports.GEO_STATUS_SUCCESS = exports.GEO_STATUS_REQUEST = exports.GEO_STATUS_FAILURE = void 0;
const LongTimeout = exports.LongTimeout = 10000; // 10 seconds
const MaximumAge = exports.MaximumAge = 300000; // 5 minutes
const OptionsForCachedFine = exports.OptionsForCachedFine = {
  maximumAge: MaximumAge,
  enableHighAccuracy: true,
  timeout: LongTimeout
};
const LOCATION_TRACKING_REQUEST = exports.LOCATION_TRACKING_REQUEST = 'utils/location/LOCATION_TRACKING_REQUEST';
const LOCATION_TRACKING_FAILURE = exports.LOCATION_TRACKING_FAILURE = 'utils/location/LOCATION_TRACKING_FAILURE';
const LOCATION_TRACKING_SUCCESS = exports.LOCATION_TRACKING_SUCCESS = 'utils/location/LOCATION_TRACKING_SUCCESS';
const GEO_STATUS_REQUEST = exports.GEO_STATUS_REQUEST = 'utils/location/GEO_STATUS_REQUEST';
const GEO_STATUS_FAILURE = exports.GEO_STATUS_FAILURE = 'utils/location/GEO_STATUS_FAILURE';
const GEO_STATUS_SUCCESS = exports.GEO_STATUS_SUCCESS = 'utils/location/GEO_STATUS_SUCCESS';
const GET_ALL_GEOFENCS_REQUEST = exports.GET_ALL_GEOFENCS_REQUEST = 'utils/location/GET_ALL_GEOFENCS_REQUEST';
const GET_ALL_GEOFENCS_FAILURE = exports.GET_ALL_GEOFENCS_FAILURE = 'utils/location/GET_ALL_GEOFENCS_FAILURE';
const GET_ALL_GEOFENCS_SUCCESS = exports.GET_ALL_GEOFENCS_SUCCESS = 'utils/location/GET_ALL_GEOFENCS_SUCCESS';
const SET_SITE_KEY_LOCATION_REQUEST = exports.SET_SITE_KEY_LOCATION_REQUEST = 'utils/location/SET_SITE_KEY_LOCATION_REQUEST';
const SET_SITE_KEY_LOCATION_FAILURE = exports.SET_SITE_KEY_LOCATION_FAILURE = 'utils/location/SET_SITE_KEY_LOCATION_FAILURE';
const SET_SITE_KEY_LOCATION_SUCCESS = exports.SET_SITE_KEY_LOCATION_SUCCESS = 'utils/location/SET_SITE_KEY_LOCATION_SUCCESS';
//# sourceMappingURL=constants.js.map