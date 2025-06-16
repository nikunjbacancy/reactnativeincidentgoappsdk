/**
 *
 * FeedbackScreen actions
 *
 */
import { FeedbackActionTypes } from './types';
export declare const sendFeedbackSuccess: () => FeedbackActionTypes;
export declare const sendFeedbackFailure: (error: Error) => FeedbackActionTypes;
export declare const updateUserEmail: (email: string) => FeedbackActionTypes;
export declare const showSuccessModal: () => FeedbackActionTypes;
export declare const hideSuccessModal: () => FeedbackActionTypes;
