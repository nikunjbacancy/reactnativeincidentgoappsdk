"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * Settings selectors
 *
 */

/**
 * Direct selector to the Settings state domain
 */

const beaconRegisterSettingsScreenStateDomain = state => state.settingsScreen || _reducer.initialState;

/**
 * Default selector used by Settings
 */

const beaconRegisterSettingsScreenState = () => (0, _reselect.createSelector)(beaconRegisterSettingsScreenStateDomain, subState => subState);
var _default = exports.default = beaconRegisterSettingsScreenState;
//# sourceMappingURL=selectors.js.map