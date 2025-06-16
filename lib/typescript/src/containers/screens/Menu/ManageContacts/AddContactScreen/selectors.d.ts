/**
 *
 * AddContactScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectFilteredContacts: () => ((state: RootState) => import("incident-code-core").AppUserContact[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddContactState) => import("incident-code-core").AppUserContact[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectPermissionStatus: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddContactState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by AddContactScreen
 */
declare const makeSelectAddContactScreenState: () => ((state: RootState) => import("./types").AddContactState) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddContactState) => import("./types").AddContactState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectAddContactScreenState;
export { makeSelectFilteredContacts, makeSelectPermissionStatus };
