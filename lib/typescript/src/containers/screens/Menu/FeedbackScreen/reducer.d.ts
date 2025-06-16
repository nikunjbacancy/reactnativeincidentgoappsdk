/**
 *
 * FeedbackScreen reducer
 *
 */
import { FeedbackActionTypes, FeedbackState } from './types';
export declare const initialState: FeedbackState;
declare const feedbackScreenReducer: <Base extends {
    readonly isSending: boolean;
    readonly showSuccessModal: boolean;
}>(base?: Base | undefined, action: FeedbackActionTypes) => Base;
export default feedbackScreenReducer;
