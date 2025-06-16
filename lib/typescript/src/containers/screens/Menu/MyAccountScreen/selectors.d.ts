import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectSelectedIsUpdating: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyAccountState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUploadMessageType: () => ((state: RootState) => import("../../../../components/ImageUpload").PortraitMessageType | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyAccountState) => import("../../../../components/ImageUpload").PortraitMessageType | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by MyAccountScreen
 */
declare const makeSelectMyAccountScreenState: () => ((state: RootState) => import("./types").MyAccountState) & import("reselect").OutputSelectorFields<(args_0: import("./types").MyAccountState) => import("./types").MyAccountState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectMyAccountScreenState;
export { makeSelectSelectedIsUpdating, makeSelectUploadMessageType };
