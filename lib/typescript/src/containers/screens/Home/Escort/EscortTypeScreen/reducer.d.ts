import { EscortTypeScreenActionTypes, EscortTypeState } from './types';
export declare const initialState: EscortTypeState;
declare const escortTypeScreenReducer: <Base extends {
    readonly escortType?: import("./types").EscortType | undefined;
    readonly showSiteKeyModel?: boolean | undefined;
}>(base?: Base | undefined, action: EscortTypeScreenActionTypes) => Base;
export default escortTypeScreenReducer;
