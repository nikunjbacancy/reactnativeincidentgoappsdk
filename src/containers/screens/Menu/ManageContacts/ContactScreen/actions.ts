/**
 *
 * ContactScreen actions
 *
 */

import { AppUserContact } from 'incident-code-core';

import {
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  TOGGLE_CONTACT_NOTIFICATION_FAILURE,
  TOGGLE_CONTACT_NOTIFICATION_REQUEST,
  TOGGLE_CONTACT_NOTIFICATION_SUCCESS,
} from './constants';
import { ContactActionTypes } from './types';

export const toggleContactNotificationRequest = (
  contact: AppUserContact,
): ContactActionTypes => ({
  type: TOGGLE_CONTACT_NOTIFICATION_REQUEST,
  payload: contact,
});

export const toggleContactNotificationSuccess = (
  contact: AppUserContact,
): ContactActionTypes => ({
  type: TOGGLE_CONTACT_NOTIFICATION_SUCCESS,
  payload: contact,
});

export const toggleContactNotificationFailure = (
  error: Error,
): ContactActionTypes => ({
  type: TOGGLE_CONTACT_NOTIFICATION_FAILURE,
  payload: error,
  error: true,
});

export const deleteContactRequest = (
  contactId: string,
): ContactActionTypes => ({
  type: DELETE_CONTACT_REQUEST,
  payload: contactId,
});

export const deleteContactSuccess = (
  contactId: string,
): ContactActionTypes => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: contactId,
});

export const deleteContactFailure = (error: Error): ContactActionTypes => ({
  type: DELETE_CONTACT_FAILURE,
  payload: error,
  error: true,
});
