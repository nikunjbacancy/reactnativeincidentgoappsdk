/**
 *
 * AddContactScreen types
 *
 */
import { AppUserContact } from 'incident-code-core';
import { ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, FILTER_CONTACTS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from './constants';
export type GetContactsSuccessPayload = {
    contacts: AppUserContact[];
    filteredContacts: AppUserContact[];
    permissionStatus: string;
};
export interface AddContactState {
    contacts: AppUserContact[];
    filteredContacts: AppUserContact[];
    permissionStatus: string;
}
export interface GetContactsRequestAction {
    type: typeof GET_CONTACTS_REQUEST;
}
export interface GetContactsSuccessAction {
    type: typeof GET_CONTACTS_SUCCESS;
    payload: GetContactsSuccessPayload;
}
export interface GetContactsFailureAction {
    type: typeof GET_CONTACTS_FAILURE;
    payload: Error;
    error: boolean;
}
export interface FilterContactsAction {
    type: typeof FILTER_CONTACTS;
    payload: string;
}
export interface AddContactRequestAction {
    type: typeof ADD_CONTACT_REQUEST;
    payload: AppUserContact;
}
export interface AddContactSuccessAction {
    type: typeof ADD_CONTACT_SUCCESS;
    payload: AppUserContact;
}
export interface AddContactFailureAction {
    type: typeof ADD_CONTACT_FAILURE;
    payload: Error;
    error: boolean;
}
export type AddContactActionTypes = GetContactsRequestAction | GetContactsSuccessAction | GetContactsFailureAction | FilterContactsAction | AddContactRequestAction | AddContactSuccessAction | AddContactFailureAction;
