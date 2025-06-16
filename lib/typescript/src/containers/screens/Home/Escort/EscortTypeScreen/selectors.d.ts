/**
 *
 * RecordScreen selectors
 *
 */
import { RootState } from 'store/types';
declare const makeSelectShouldShowSiteKeyModal: () => ((state: RootState) => boolean | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").EscortTypeState) => boolean | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by countdownScreen
 */
declare const makeSelectSelectEscortTypeScreenState: () => ((state: RootState) => import("./types").EscortTypeState) & import("reselect").OutputSelectorFields<(args_0: import("./types").EscortTypeState) => import("./types").EscortTypeState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectSelectEscortTypeScreenState;
export { makeSelectShouldShowSiteKeyModal };
