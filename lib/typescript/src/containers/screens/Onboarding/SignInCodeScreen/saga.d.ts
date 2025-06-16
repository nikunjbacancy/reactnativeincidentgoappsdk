/**
 *
 * SignInCodeScreen saga
 *
 */
import { LoginRequestAction, ResendCodeRequestAction } from './types';
import { AxiosError } from 'axios';
export declare function login({ payload }: LoginRequestAction): any;
export declare function resendCode({ payload }: ResendCodeRequestAction): Generator<import("redux-saga/effects").CallEffect<unknown> | import("redux-saga/effects").PutEffect<import("./types").SignInCodeActionTypes>, void, AxiosError<any>>;
export default function signInCodeScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
