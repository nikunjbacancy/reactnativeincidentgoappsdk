/**
 *
 * SelectOrganizationScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the SelectOrganizationScreen state domain
 */
declare const timedEscortScreenStateDomain: (state: RootState) => import("./types").TimedEscortState;
/**
 * Other specific selectors
 */
declare const makeSelectIntersectOrganizations: () => ((state: RootState) => import("../../../../../types").OrganizationSelection[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => import("../../../../../types").OrganizationSelection[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectOrgGroups: () => ((state: RootState) => any[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => any[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSelectedOrganization: () => ((state: RootState) => import("../../../../../types").OrganizationSelection | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => import("../../../../../types").OrganizationSelection | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectEnableContinueButton: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectEnableNextButton: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRequestingOrganizations: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectError: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectErrorMessage: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectOrganizationProcedures: () => ((state: RootState) => import("../../../../../types").ProcedureSelection[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => import("../../../../../types").ProcedureSelection[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSelectedProcedure: () => ((state: RootState) => import("../../../../../types").ProcedureSelection | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => import("../../../../../types").ProcedureSelection | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by SelectOrganizationScreen
 */
declare const makeSelectSelectOrganizationScreenState: () => ((state: RootState) => import("./types").TimedEscortState) & import("reselect").OutputSelectorFields<(args_0: import("./types").TimedEscortState) => import("./types").TimedEscortState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectSelectOrganizationScreenState;
export { timedEscortScreenStateDomain, makeSelectIntersectOrganizations, makeSelectSelectedOrganization, makeSelectRequestingOrganizations, makeSelectEnableContinueButton, makeSelectOrganizationProcedures, makeSelectError, makeSelectErrorMessage, makeSelectEnableNextButton, makeSelectSelectedProcedure, makeSelectOrgGroups, };
