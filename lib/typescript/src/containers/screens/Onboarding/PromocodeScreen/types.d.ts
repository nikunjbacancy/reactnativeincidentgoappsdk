/**
 *
 * SignInCodeScreen types
 *
 */
import { AccessToken } from 'incident-code-core';
import { REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS, REGISTER_USER_REQUEST } from './constants';
export interface LoginData {
    phone: string;
    code: string;
    isSDK: true;
}
export interface RegisterUserState {
    access_token: string;
}
export interface RegisterUserRequestAction {
    type: typeof REGISTER_USER_REQUEST;
    payload: any;
}
export interface RegisterUserSuccessAction {
    type: typeof REGISTER_USER_SUCCESS;
    payload: AccessToken;
}
export interface RegisterUserFailureAction {
    type: typeof REGISTER_USER_FAILURE;
    payload: Error;
    error: true;
}
export type RegisterUserActionTypes = RegisterUserRequestAction | RegisterUserSuccessAction | RegisterUserFailureAction;
