/**
 *
 * PermissionScreen actions
 *
 */

 import {
    LOCATION_ALWAYS_PERMISSIONS_REQUEST,
    LOCATION_ALWAYS_PERMISSIONS_SUCCESS,
    GO_TO_NEXT_SCREEN,
  } from './constants';
  import { PermissionActionTypes } from './types';
  
  export const locationAlwaysPermissionsRequest = (
    openConfigurationMessage: string,
  ): PermissionActionTypes => ({
    type: LOCATION_ALWAYS_PERMISSIONS_REQUEST,
    payload: openConfigurationMessage,
  });
  
  export const locationAlwaysPermissionsSuccess = (): PermissionActionTypes => ({
    type: LOCATION_ALWAYS_PERMISSIONS_SUCCESS,
  });
  
  export const goToNextScreen = (): PermissionActionTypes => ({
    type: GO_TO_NEXT_SCREEN,
  });
  