/**
 *
 * SignInScreen actions
 *
 */
import { SignInActionTypes } from './types';
export declare const sendCodeSuccess: (phone: string) => SignInActionTypes;
export declare const sendCodeFailure: (error: Error) => SignInActionTypes;
