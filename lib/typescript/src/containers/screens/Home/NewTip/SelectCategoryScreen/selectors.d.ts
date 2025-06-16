/**
 *
 * SelectCategoryScreen selectors
 *
 */
import { IncidentCategoryConfig } from 'incident-code-core';
import { RootState } from '../../../../../store/types';
/**
 * Other specific selectors
 */
declare const makeSelectIncidentCategories: () => ((state: RootState) => IncidentCategoryConfig[][]) & import("reselect").OutputSelectorFields<(args_0: import("../../../../app/types").AppState) => IncidentCategoryConfig[][], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSelectedCategory: () => ((state: RootState) => IncidentCategoryConfig | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").IncidentCategoryState) => IncidentCategoryConfig | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by SelectCategoryScreen
 */
declare const makeSelectIncidentCategoryScreenState: () => ((state: RootState) => import("./types").IncidentCategoryState) & import("reselect").OutputSelectorFields<(args_0: import("./types").IncidentCategoryState) => import("./types").IncidentCategoryState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectIncidentCategoryScreenState;
export { makeSelectIncidentCategories, makeSelectSelectedCategory };
