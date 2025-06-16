/**
 *
 * SignInCodeScreen actions
 *
 */
import { AccessToken } from 'incident-code-core';
import { LoginData, SignInCodeActionTypes, ResendCodeData } from './types';
export declare const loginRequest: (loginData: LoginData) => SignInCodeActionTypes;
export declare const loginSuccess: (accessToken: AccessToken) => SignInCodeActionTypes;
export declare const loginFailure: (error: Error) => SignInCodeActionTypes;
export declare const resendCode: (resendCodeData: ResendCodeData) => SignInCodeActionTypes;
export declare const resendCodeSuccess: () => SignInCodeActionTypes;
export declare const resendCodeFailure: (error: Error) => SignInCodeActionTypes;
