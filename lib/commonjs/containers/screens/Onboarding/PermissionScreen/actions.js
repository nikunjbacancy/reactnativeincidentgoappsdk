"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.goToNextScreen = exports.allPermissionsSuccess = exports.allPermissionsRequest = void 0;
var _constants = require("./constants");
/**
 *
 * PermissionScreen actions
 *
 */

const allPermissionsRequest = openConfigurationMessage => ({
  type: _constants.ALL_PERMISSIONS_REQUEST,
  payload: openConfigurationMessage
});
exports.allPermissionsRequest = allPermissionsRequest;
const allPermissionsSuccess = () => ({
  type: _constants.ALL_PERMISSIONS_SUCCESS
});
exports.allPermissionsSuccess = allPermissionsSuccess;
const goToNextScreen = () => ({
  type: _constants.GO_TO_NEXT_SCREEN
});
exports.goToNextScreen = goToNextScreen;
//# sourceMappingURL=actions.js.map