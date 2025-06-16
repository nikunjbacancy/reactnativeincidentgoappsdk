/**
 *
 * PermissionScreen saga
 *
 */
import { AllPermissionsRequestAction } from './types';
export declare function requestAllPermissionsSaga({ payload, }: AllPermissionsRequestAction): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export default function permissionScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
