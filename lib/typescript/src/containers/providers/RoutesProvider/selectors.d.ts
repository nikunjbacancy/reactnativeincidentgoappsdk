/**
 *
 * RoutesProvider selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the RoutesProvider state domain
 */
declare const selectRoutesProviderStateDomain: (state: RootState) => import("./types").RoutesProviderState;
/**
 * Other specific selectors
 */
declare const makeSelectScreenAction: () => ((state: RootState) => import("./types").ScreenAction | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").RoutesProviderState) => import("./types").ScreenAction | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShowDuressInfo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RoutesProviderState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by RoutesProvider
 */
declare const makeSelectRoutesProviderState: () => ((state: RootState) => import("./types").RoutesProviderState) & import("reselect").OutputSelectorFields<(args_0: import("./types").RoutesProviderState) => import("./types").RoutesProviderState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectRoutesProviderState;
export { selectRoutesProviderStateDomain, makeSelectScreenAction, makeSelectShowDuressInfo, };
