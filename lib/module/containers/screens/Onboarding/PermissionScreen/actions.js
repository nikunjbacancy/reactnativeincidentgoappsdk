/**
 *
 * PermissionScreen actions
 *
 */

import { ALL_PERMISSIONS_REQUEST, ALL_PERMISSIONS_SUCCESS, GO_TO_NEXT_SCREEN } from './constants';
export const allPermissionsRequest = openConfigurationMessage => ({
  type: ALL_PERMISSIONS_REQUEST,
  payload: openConfigurationMessage
});
export const allPermissionsSuccess = () => ({
  type: ALL_PERMISSIONS_SUCCESS
});
export const goToNextScreen = () => ({
  type: GO_TO_NEXT_SCREEN
});
//# sourceMappingURL=actions.js.map