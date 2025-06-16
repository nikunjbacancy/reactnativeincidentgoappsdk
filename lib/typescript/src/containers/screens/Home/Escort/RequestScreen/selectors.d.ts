/**
 *
 * RequestEscortScreen selectors
 *
 */
import { RootState } from '../../../../../store/types';
/**
 * Direct selector to the RequestEscortScreen state domain
 */
declare const selectOrganizationScreenStateDomain: (state: RootState) => any;
/**
 * Other specific selectors
 */
declare const makeSelectError: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectErrorMessage: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRequestingEscort: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowCancelEscortModal: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectPendingEscort: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by RequestEscortScreen
 */
declare const makeSelectSelectOrganizationScreenState: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: any) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectSelectOrganizationScreenState;
export { selectOrganizationScreenStateDomain, makeSelectError, makeSelectErrorMessage, makeSelectRequestingEscort, makeSelectShouldShowCancelEscortModal, makeSelectPendingEscort, };
