/**
 *
 * PermissionScreen actions
 *
 */

import {
  ALL_PERMISSIONS_REQUEST,
  ALL_PERMISSIONS_SUCCESS,
  GO_TO_NEXT_SCREEN,
} from './constants';
import { PermissionActionTypes } from './types';

export const allPermissionsRequest = (
  openConfigurationMessage: string,
): PermissionActionTypes => ({
  type: ALL_PERMISSIONS_REQUEST,
  payload: openConfigurationMessage,
});

export const allPermissionsSuccess = (): PermissionActionTypes => ({
  type: ALL_PERMISSIONS_SUCCESS,
});

export const goToNextScreen = (): PermissionActionTypes => ({
  type: GO_TO_NEXT_SCREEN,
});
