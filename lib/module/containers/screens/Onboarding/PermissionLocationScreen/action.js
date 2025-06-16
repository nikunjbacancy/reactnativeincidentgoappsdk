/**
 *
 * PermissionScreen actions
 *
 */

import { LOCATION_ALWAYS_PERMISSIONS_REQUEST, LOCATION_ALWAYS_PERMISSIONS_SUCCESS, GO_TO_NEXT_SCREEN } from './constants';
export const locationAlwaysPermissionsRequest = openConfigurationMessage => ({
  type: LOCATION_ALWAYS_PERMISSIONS_REQUEST,
  payload: openConfigurationMessage
});
export const locationAlwaysPermissionsSuccess = () => ({
  type: LOCATION_ALWAYS_PERMISSIONS_SUCCESS
});
export const goToNextScreen = () => ({
  type: GO_TO_NEXT_SCREEN
});
//# sourceMappingURL=action.js.map