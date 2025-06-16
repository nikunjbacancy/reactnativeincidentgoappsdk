import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectIsUpdating: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddUserPortraitState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUploadMessageType: () => ((state: RootState) => import("../../../../components/ImageUpload").PortraitMessageType | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddUserPortraitState) => import("../../../../components/ImageUpload").PortraitMessageType | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by AddUserPortrait
 */
declare const makeSelectAddUserPortraitState: () => ((state: RootState) => import("./types").AddUserPortraitState) & import("reselect").OutputSelectorFields<(args_0: import("./types").AddUserPortraitState) => import("./types").AddUserPortraitState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectAddUserPortraitState;
export { makeSelectIsUpdating, makeSelectUploadMessageType };
