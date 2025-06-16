/**
 *
 * PermissionScreen types
 *
 */
import { ALL_PERMISSIONS_REQUEST, ALL_PERMISSIONS_SUCCESS, GO_TO_NEXT_SCREEN } from './constants';
export interface AllPermissionsRequestAction {
    type: typeof ALL_PERMISSIONS_REQUEST;
    payload: string;
}
export interface AllPermissionsSuccessAction {
    type: typeof ALL_PERMISSIONS_SUCCESS;
}
export interface GoToNextScreenAction {
    type: typeof GO_TO_NEXT_SCREEN;
}
export type PermissionActionTypes = AllPermissionsRequestAction | AllPermissionsSuccessAction | GoToNextScreenAction;
