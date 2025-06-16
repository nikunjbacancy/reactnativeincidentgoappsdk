/**
 *
 * MyAccountScreen saga
 *
 */
import { AxiosResponse } from 'axios';
import { UpdateMyAccountNameRequestAction, UpdatePortraitRequestAction } from './types';
export declare function updateName({ payload }: UpdateMyAccountNameRequestAction): Generator<import("redux-saga/effects").CallEffect<AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").MyAccountActionTypes>, void, unknown>;
export declare function updatePortrait({ payload }: UpdatePortraitRequestAction): any;
export default function myAccountScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
