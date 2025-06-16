/**
 *
 * SelectOrganizationScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the SelectOrganizationScreen state domain
 */
declare const selectOrganizationScreenStateDomain: (state: RootState) => import("./types").SelectOrganizationState;
/**
 * Other specific selectors
 */
declare const makeSelectOrganizations: () => ((state: RootState) => import("../../../../types").OrganizationSelection[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => import("../../../../types").OrganizationSelection[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSelectedOrganizations: () => ((state: RootState) => import("../../../../types").OrganizationSelection[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => import("../../../../types").OrganizationSelection[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectEnableNextButton: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectError: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectErrorMessage: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by SelectOrganizationScreen
 */
declare const makeSelectSelectOrganizationScreenState: () => ((state: RootState) => import("./types").SelectOrganizationState) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => import("./types").SelectOrganizationState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectSelectOrganizationScreenState;
export { selectOrganizationScreenStateDomain, makeSelectOrganizations, makeSelectSelectedOrganizations, makeSelectEnableNextButton, makeSelectError, makeSelectErrorMessage, };
