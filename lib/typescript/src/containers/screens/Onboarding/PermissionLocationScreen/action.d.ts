/**
 *
 * PermissionScreen actions
 *
 */
import { PermissionActionTypes } from './types';
export declare const locationAlwaysPermissionsRequest: (openConfigurationMessage: string) => PermissionActionTypes;
export declare const locationAlwaysPermissionsSuccess: () => PermissionActionTypes;
export declare const goToNextScreen: () => PermissionActionTypes;
