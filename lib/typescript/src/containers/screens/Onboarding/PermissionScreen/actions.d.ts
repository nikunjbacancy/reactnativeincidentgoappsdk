/**
 *
 * PermissionScreen actions
 *
 */
import { PermissionActionTypes } from './types';
export declare const allPermissionsRequest: (openConfigurationMessage: string) => PermissionActionTypes;
export declare const allPermissionsSuccess: () => PermissionActionTypes;
export declare const goToNextScreen: () => PermissionActionTypes;
