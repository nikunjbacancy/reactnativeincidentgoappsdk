/**
 *
 * WelcomeScreen reducer
 *
 */
import { WelcomeActionTypes, WelcomeState } from './types';
export declare const initialState: WelcomeState;
declare const welcomeScreenReducer: <Base extends {
    readonly currentPage: number;
    readonly welcomeItems: readonly {
        readonly index: number;
        readonly titleKey: string;
        readonly textKey: string;
        readonly imageKey: string;
    }[];
}>(base?: Base | undefined, action: WelcomeActionTypes) => Base;
export default welcomeScreenReducer;
