/**
 *
 * SignInScreen saga
 *
 */
import { SendCodeRequestAction } from './types';
export declare function sendCode({ payload: { phone } }: SendCodeRequestAction): any;
export default function signInScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
