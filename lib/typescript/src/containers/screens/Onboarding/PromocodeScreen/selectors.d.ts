import { RootState } from 'store/types';
/**
 * Default selector used by send code
 */
declare const sendCodeScreenState: () => ((state: RootState) => import("./types").RegisterUserState) & import("reselect").OutputSelectorFields<(args_0: import("./types").RegisterUserState) => import("./types").RegisterUserState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default sendCodeScreenState;
