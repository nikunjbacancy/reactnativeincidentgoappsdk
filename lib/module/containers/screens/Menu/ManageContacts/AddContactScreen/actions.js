/**
 *
 * AddContactScreen actions
 *
 */

import { ADD_CONTACT_FAILURE, ADD_CONTACT_REQUEST, ADD_CONTACT_SUCCESS, FILTER_CONTACTS, GET_CONTACTS_FAILURE, GET_CONTACTS_REQUEST, GET_CONTACTS_SUCCESS } from './constants';
export const getContactsRequest = () => ({
  type: GET_CONTACTS_REQUEST
});
export const getContactsSuccess = payload => ({
  type: GET_CONTACTS_SUCCESS,
  payload
});
export const getContactsFailure = error => ({
  type: GET_CONTACTS_FAILURE,
  payload: error,
  error: true
});
export const filterContacts = filterText => ({
  type: FILTER_CONTACTS,
  payload: filterText
});
export const addContactRequest = contact => ({
  type: ADD_CONTACT_REQUEST,
  payload: contact
});
export const addContactSuccess = contact => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact
});
export const addContactFailure = error => ({
  type: ADD_CONTACT_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map