/**
 *
 * FeedbackScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectIsSending: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").FeedbackState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShowSuccessModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").FeedbackState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by FeedbackScreen
 */
declare const makeSelectFeedbackScreenState: () => ((state: RootState) => import("./types").FeedbackState) & import("reselect").OutputSelectorFields<(args_0: import("./types").FeedbackState) => import("./types").FeedbackState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectFeedbackScreenState;
export { makeSelectIsSending, makeSelectShowSuccessModal };
