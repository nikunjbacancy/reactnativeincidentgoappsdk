/**
 *
 * SignInCodeScreen saga
 *
 */
import { RegisterUserRequestAction } from './types';
export declare function registerUser({ payload }: RegisterUserRequestAction): any;
export default function registerUserScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
