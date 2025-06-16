/**
 *
 * ContactScreen saga
 *
 */
import { DeleteContactRequestAction, ToggleContactNotificationRequestAction } from './types';
export declare function toggleContactNotification({ payload, }: ToggleContactNotificationRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").ContactActionTypes>, void, unknown>;
export declare function deleteContact({ payload }: DeleteContactRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").ContactActionTypes>, void, unknown>;
export default function contactScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
