"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beaconRegistrationSuccess = exports.beaconRegistrationRequest = exports.beaconRegistrationFailure = void 0;
var _constants = require("./constants");
/**
 * Settings screen actions
 */

const beaconRegistrationRequest = beaconConnectParams => ({
  type: _constants.BEACON_REGISTRATION_REQUEST,
  payload: beaconConnectParams
});
exports.beaconRegistrationRequest = beaconRegistrationRequest;
const beaconRegistrationSuccess = payload => ({
  type: _constants.BEACON_REGISTRATION_SUCCESS,
  payload
});
exports.beaconRegistrationSuccess = beaconRegistrationSuccess;
const beaconRegistrationFailure = error => ({
  type: _constants.BEACON_REGISTRATION_FAILURE,
  payload: error,
  error: true
});
exports.beaconRegistrationFailure = beaconRegistrationFailure;
//# sourceMappingURL=actions.js.map