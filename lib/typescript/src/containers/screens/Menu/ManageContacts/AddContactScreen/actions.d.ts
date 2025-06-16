/**
 *
 * AddContactScreen actions
 *
 */
import { AppUserContact } from 'incident-code-core';
import { AddContactActionTypes, GetContactsSuccessPayload } from './types';
export declare const getContactsRequest: () => AddContactActionTypes;
export declare const getContactsSuccess: (payload: GetContactsSuccessPayload) => AddContactActionTypes;
export declare const getContactsFailure: (error: Error) => AddContactActionTypes;
export declare const filterContacts: (filterText: string) => AddContactActionTypes;
export declare const addContactRequest: (contact: AppUserContact) => AddContactActionTypes;
export declare const addContactSuccess: (contact: AppUserContact) => AddContactActionTypes;
export declare const addContactFailure: (error: Error) => AddContactActionTypes;
