/**
 *
 * MyAccountScreen reducer
 *
 */
import { PortraitMessageType } from '../../../../components/ImageUpload';
import { AddUserPortraitActionTypes, AddUserPortraitState } from './types';
export declare const initialState: AddUserPortraitState;
declare const addUserPortraitScreenReducer: <Base extends {
    readonly isUpdating: boolean;
    readonly uploadMessageType: PortraitMessageType | undefined;
}>(base?: Base | undefined, action: AddUserPortraitActionTypes) => Base;
export default addUserPortraitScreenReducer;
