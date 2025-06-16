import { RootState } from 'store/types';
/**
 * Default selector used by send code
 */
declare const sendCodeScreenState: () => ((state: RootState) => import("../SignInScreen/types").SendCodeState) & import("reselect").OutputSelectorFields<(args_0: import("../SignInScreen/types").SendCodeState) => import("../SignInScreen/types").SendCodeState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default sendCodeScreenState;
