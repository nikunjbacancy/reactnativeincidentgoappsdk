/**
 *
 * FeedbackScreen saga
 *
 */
import { SendFeedbackRequestAction } from './types';
export declare function sendFeedback({ payload }: SendFeedbackRequestAction): Generator<import("redux-saga/effects").CallEffect<import("axios").AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").FeedbackActionTypes>, void, unknown>;
export default function feedbackScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
