/**
 *
 * LanguageProvider selectors
 *
 */
import { RootState } from '../../../store/types';
/**
 * Direct selector to the languageProvider state domain
 */
declare const selectLanguageProviderDomain: (state: RootState) => import("./types").LanguageProviderState;
/**
 * Other specific selectors
 */
declare const makeSelectLocale: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").LanguageProviderState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by LanguageProvider
 */
declare const makeSelectLanguageProvider: () => ((state: RootState) => import("./types").LanguageProviderState) & import("reselect").OutputSelectorFields<(args_0: import("./types").LanguageProviderState) => import("./types").LanguageProviderState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectLanguageProvider;
export { selectLanguageProviderDomain, makeSelectLocale };
