import { WarningScreenActionTypes, WarningScreenState } from './types';
export declare const initialState: WarningScreenState;
declare const warningScreenReducer: <Base extends {
    readonly showPanicInfo: boolean;
    readonly error: boolean;
    readonly errorMessage?: string | undefined;
}>(base?: Base | undefined, action: WarningScreenActionTypes) => Base;
export default warningScreenReducer;
