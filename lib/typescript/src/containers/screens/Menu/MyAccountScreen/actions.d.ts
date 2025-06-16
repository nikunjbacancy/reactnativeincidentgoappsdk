/**
 *
 * MyAccountScreen actions
 *
 */
import { AppUser } from 'incident-code-core';
import { MyAccountActionTypes } from './types';
export declare const updateNameSuccess: (user: AppUser) => MyAccountActionTypes;
export declare const updateNameFailure: (error: Error) => MyAccountActionTypes;
export declare const updatePortraitRequest: (imgString: string) => MyAccountActionTypes;
export declare const updatePortraitSuccess: () => MyAccountActionTypes;
export declare const updatePortraitFailure: (error: Error) => MyAccountActionTypes;
export declare const deletePortraitRequest: () => MyAccountActionTypes;
export declare const deletePortraitSuccess: () => MyAccountActionTypes;
export declare const deletePortraitFailure: (error: Error) => MyAccountActionTypes;
export declare const clearMessageType: () => MyAccountActionTypes;
