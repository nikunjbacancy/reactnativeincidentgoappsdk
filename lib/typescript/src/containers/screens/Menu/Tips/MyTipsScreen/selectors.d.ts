/**
 *
 * MyTipsScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the MyTipsScreen state domain
 */
declare const selectMyTipsScreenStateDomain: (state: RootState) => import("./types").MyTipsState;
/**
 * Other specific selectors
 */
declare const makeSelectTips: () => ((state: RootState) => import("./types").Tips) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyTipsState) => import("./types").Tips, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectLastActiveTip: () => ((state: RootState) => import("incident-code-core").Incident) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyTipsState) => import("incident-code-core").Incident, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyTipsState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by MyTipsScreen
 */
declare const makeSelectMyTipsScreenState: () => ((state: RootState) => import("./types").MyTipsState) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyTipsState) => import("./types").MyTipsState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectMyTipsScreenState;
export { selectMyTipsScreenStateDomain, makeSelectTips, makeSelectIsLoading, makeSelectLastActiveTip, };
