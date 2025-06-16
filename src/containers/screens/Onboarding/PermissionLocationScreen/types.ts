/**
 *
 * PermissionScreen types
 *
 */

 import {
    LOCATION_ALWAYS_PERMISSIONS_REQUEST,
    LOCATION_ALWAYS_PERMISSIONS_SUCCESS,
    GO_TO_NEXT_SCREEN,
  } from './constants';
  
  export interface LocationAlwaysPermissionsRequestAction {
    type: typeof LOCATION_ALWAYS_PERMISSIONS_REQUEST;
    payload: string;
  }
  
  export interface LocationAlwaysPermissionsSuccessAction {
    type: typeof LOCATION_ALWAYS_PERMISSIONS_SUCCESS;
  }
  
  export interface GoToNextScreenAction {
    type: typeof GO_TO_NEXT_SCREEN;
  }
  
  export type PermissionActionTypes =
    | LocationAlwaysPermissionsRequestAction
    | LocationAlwaysPermissionsSuccessAction
    | GoToNextScreenAction;
