/**
 *
 * NotificationScreen saga
 *
 */
import { ToggleUserNotificationRequestAction } from './types';
export declare function toggleUserNotification({ payload, }: ToggleUserNotificationRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").NotificationActionTypes>, void, unknown>;
export default function notificationScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
