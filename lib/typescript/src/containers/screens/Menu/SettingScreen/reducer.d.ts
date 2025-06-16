/**
 *
 * AddContactScreen reducer
 *
 */
import { DeleteAccountState, NotificationActionTypes } from './types';
export declare const initialState: DeleteAccountState;
declare const deleteAccountReducer: <Base extends {
    readonly isLoading: boolean;
    readonly userData: null;
}>(base?: Base | undefined, action: NotificationActionTypes) => Base;
export default deleteAccountReducer;
