/**
 *
 * UpdateNameScreen saga
 *
 */
import { UpdateNameRequestAction } from './types';
export declare function updateName({ payload }: UpdateNameRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").UpdateNameActionTypes>, void, unknown>;
export default function updateNameScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
