/**
 *
 * OrganizationScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").OrganizationState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUserOrganizations: () => ((state: RootState) => import("incident-code-core").Organization[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").OrganizationState) => import("incident-code-core").Organization[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by OrganizationScreen
 */
declare const makeSelectOrganizationScreenState: () => ((state: RootState) => import("./types").OrganizationState) & import("reselect").OutputSelectorFields<(args_0: import("./types").OrganizationState) => import("./types").OrganizationState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectOrganizationScreenState;
export { makeSelectIsLoading, makeSelectUserOrganizations };
