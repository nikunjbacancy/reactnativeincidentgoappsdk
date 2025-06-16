/**
 *
 * AddCommentScreen selectors
 *
 */
import { RootState } from '../../../../../store/types';
/**
 * Direct selector to the AddCommentScreen state domain
 */
declare const selectAddCommentScreenStateDomain: (state: RootState) => import("./types").AddCommentState;
/**
 * Other specific selectors
 */
declare const makeSelectCreatingTip: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddCommentState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUploadingIncidentVideo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("incident-code-core").IncidentVideo[]) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by AddCommentScreen
 */
declare const makeSelectAddCommentScreenState: () => ((state: RootState) => import("./types").AddCommentState) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddCommentState) => import("./types").AddCommentState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectAddCommentScreenState;
export { selectAddCommentScreenStateDomain, makeSelectCreatingTip, makeSelectUploadingIncidentVideo, };
