/**
 *
 * MyAccountScreen reducer
 *
 */
import { PortraitMessageType } from '../../../../components/ImageUpload';
import { MyAccountActionTypes, MyAccountState } from './types';
export declare const initialState: MyAccountState;
declare const myAccountScreenReducer: <Base extends {
    readonly isUpdating: boolean;
    readonly uploadMessageType: PortraitMessageType | undefined;
}>(base?: Base | undefined, action: MyAccountActionTypes) => Base;
export default myAccountScreenReducer;
