/**
 *
 * SignInCodeScreen actions
 *
 */
import { AccessToken } from 'incident-code-core';
import { RegisterUserActionTypes } from './types';
export declare const registerUserRequest: (params: any) => RegisterUserActionTypes;
export declare const registerUserSuccess: (accessToken: AccessToken) => RegisterUserActionTypes;
export declare const registerUserFailure: (error: Error) => RegisterUserActionTypes;
