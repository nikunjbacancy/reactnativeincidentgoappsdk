/**
 *
 * NotificationScreen saga
 *
 */
import { NotificationListRequestAction } from './types';
export declare function getNotificationList({ payload, }: NotificationListRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").NotificationListActionTypes>, void, unknown>;
export declare function readAllNotification({ payload, }: NotificationListRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").NotificationListActionTypes>, void, unknown>;
export declare function updateReadUnreadStatus({ payload, }: NotificationListRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").NotificationListActionTypes>, void, unknown>;
export default function notificationListScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
