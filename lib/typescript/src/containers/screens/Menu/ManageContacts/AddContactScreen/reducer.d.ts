/**
 *
 * AddContactScreen reducer
 *
 */
import { AddContactActionTypes, AddContactState } from './types';
export declare const initialState: AddContactState;
declare const addContactsScreenReducer: <Base extends {
    readonly contacts: readonly {
        readonly id?: string | undefined;
        readonly name?: string | undefined;
        readonly phone?: string | undefined;
        readonly title?: string | undefined;
        readonly notificationEnabled?: boolean | undefined;
    }[];
    readonly filteredContacts: readonly {
        readonly id?: string | undefined;
        readonly name?: string | undefined;
        readonly phone?: string | undefined;
        readonly title?: string | undefined;
        readonly notificationEnabled?: boolean | undefined;
    }[];
    readonly permissionStatus: string;
}>(base?: Base | undefined, action: AddContactActionTypes) => Base;
export default addContactsScreenReducer;
