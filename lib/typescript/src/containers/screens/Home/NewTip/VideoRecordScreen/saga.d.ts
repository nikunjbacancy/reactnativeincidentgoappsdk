/**
 *
 * VideoRecordScreen saga
 *
 */
import { AxiosResponse } from 'axios';
import { Incident } from 'incident-code-core';
import { UploadVideoRequestAction } from './types';
export declare function createIncident(): Generator<import("redux-saga/effects").CallEffect<AxiosResponse<Incident>> | import("redux-saga/effects").PutEffect<import("./types").NewTipActionTypes>, void, AxiosResponse<Incident>>;
export declare function uploadVideo({ payload }: UploadVideoRequestAction): Generator<import("redux-saga/effects").ForkEffect<unknown>, void, unknown>;
export default function newTipScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
