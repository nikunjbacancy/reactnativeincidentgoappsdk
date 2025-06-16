"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationAlwaysPermissionsSuccess = exports.locationAlwaysPermissionsRequest = exports.goToNextScreen = void 0;
var _constants = require("./constants");
/**
 *
 * PermissionScreen actions
 *
 */

const locationAlwaysPermissionsRequest = openConfigurationMessage => ({
  type: _constants.LOCATION_ALWAYS_PERMISSIONS_REQUEST,
  payload: openConfigurationMessage
});
exports.locationAlwaysPermissionsRequest = locationAlwaysPermissionsRequest;
const locationAlwaysPermissionsSuccess = () => ({
  type: _constants.LOCATION_ALWAYS_PERMISSIONS_SUCCESS
});
exports.locationAlwaysPermissionsSuccess = locationAlwaysPermissionsSuccess;
const goToNextScreen = () => ({
  type: _constants.GO_TO_NEXT_SCREEN
});
exports.goToNextScreen = goToNextScreen;
//# sourceMappingURL=action.js.map