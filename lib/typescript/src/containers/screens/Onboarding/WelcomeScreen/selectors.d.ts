/**
 *
 * WelcomeScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the WelcomeScreen state domain
 */
declare const selectWelcomeScreenStateDomain: (state: RootState) => import("./types").WelcomeState;
/**
 * Other specific selectors
 */
declare const makeSelectCurrentPage: () => ((state: RootState) => number) & import("reselect").OutputSelectorFields<(args_0: import("./types").WelcomeState) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectLastIndex: () => ((state: RootState) => number) & import("reselect").OutputSelectorFields<(args_0: import("./types").WelcomeState) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectWelcomeItems: () => ((state: RootState) => import("./types").WelcomeItem[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").WelcomeState) => import("./types").WelcomeItem[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by WelcomeScreen
 */
declare const makeSelectWelcomeScreenState: () => ((state: RootState) => import("./types").WelcomeState) & import("reselect").OutputSelectorFields<(args_0: import("./types").WelcomeState) => import("./types").WelcomeState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectWelcomeScreenState;
export { selectWelcomeScreenStateDomain, makeSelectCurrentPage, makeSelectLastIndex, makeSelectWelcomeItems, };
