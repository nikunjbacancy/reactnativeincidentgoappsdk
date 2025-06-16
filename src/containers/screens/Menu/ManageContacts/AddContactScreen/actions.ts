/**
 *
 * AddContactScreen actions
 *
 */

import { AppUserContact } from 'incident-code-core';

import {
  ADD_CONTACT_FAILURE,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  FILTER_CONTACTS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
} from './constants';
import { AddContactActionTypes, GetContactsSuccessPayload } from './types';

export const getContactsRequest = (): AddContactActionTypes => ({
  type: GET_CONTACTS_REQUEST,
});

export const getContactsSuccess = (
  payload: GetContactsSuccessPayload,
): AddContactActionTypes => ({
  type: GET_CONTACTS_SUCCESS,
  payload,
});

export const getContactsFailure = (error: Error): AddContactActionTypes => ({
  type: GET_CONTACTS_FAILURE,
  payload: error,
  error: true,
});

export const filterContacts = (filterText: string): AddContactActionTypes => ({
  type: FILTER_CONTACTS,
  payload: filterText,
});

export const addContactRequest = (
  contact: AppUserContact,
): AddContactActionTypes => ({
  type: ADD_CONTACT_REQUEST,
  payload: contact,
});

export const addContactSuccess = (
  contact: AppUserContact,
): AddContactActionTypes => ({
  type: ADD_CONTACT_SUCCESS,
  payload: contact,
});

export const addContactFailure = (error: Error): AddContactActionTypes => ({
  type: ADD_CONTACT_FAILURE,
  payload: error,
  error: true,
});
