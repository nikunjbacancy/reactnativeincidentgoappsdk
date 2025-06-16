import { RootState } from 'store/types';
declare const makeSelectShowPanicInfo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").WarningScreenState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectWarningScreenState: () => ((state: RootState) => import("./types").WarningScreenState) & import("reselect").OutputSelectorFields<(args_0: import("./types").WarningScreenState) => import("./types").WarningScreenState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectWarningScreenState;
export { makeSelectShowPanicInfo };
