/**
 *
 * ContactScreen actions
 *
 */

import { DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, TOGGLE_CONTACT_NOTIFICATION_FAILURE, TOGGLE_CONTACT_NOTIFICATION_REQUEST, TOGGLE_CONTACT_NOTIFICATION_SUCCESS } from './constants';
export const toggleContactNotificationRequest = contact => ({
  type: TOGGLE_CONTACT_NOTIFICATION_REQUEST,
  payload: contact
});
export const toggleContactNotificationSuccess = contact => ({
  type: TOGGLE_CONTACT_NOTIFICATION_SUCCESS,
  payload: contact
});
export const toggleContactNotificationFailure = error => ({
  type: TOGGLE_CONTACT_NOTIFICATION_FAILURE,
  payload: error,
  error: true
});
export const deleteContactRequest = contactId => ({
  type: DELETE_CONTACT_REQUEST,
  payload: contactId
});
export const deleteContactSuccess = contactId => ({
  type: DELETE_CONTACT_SUCCESS,
  payload: contactId
});
export const deleteContactFailure = error => ({
  type: DELETE_CONTACT_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map