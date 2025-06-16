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
declare const makeSelectIntersectOrganizations: () => ((state: RootState) => import("../../../../../types").OrganizationSelection[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => import("../../../../../types").OrganizationSelection[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectOrgGroups: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSelectedOrganization: () => ((state: RootState) => import("../../../../../types").OrganizationSelection | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => import("../../../../../types").OrganizationSelection | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectEnableContinueButton: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRequestingOrganizations: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").SelectOrganizationState) => boolean, {
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
export { selectOrganizationScreenStateDomain, makeSelectIntersectOrganizations, makeSelectSelectedOrganization, makeSelectRequestingOrganizations, makeSelectEnableContinueButton, makeSelectError, makeSelectErrorMessage, makeSelectOrgGroups, };
