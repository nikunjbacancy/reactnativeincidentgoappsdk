/**
 *
 * ContactScreen types
 *
 */
import { AppUserContact } from 'incident-code-core';
import { DELETE_CONTACT_FAILURE, DELETE_CONTACT_REQUEST, DELETE_CONTACT_SUCCESS, TOGGLE_CONTACT_NOTIFICATION_FAILURE, TOGGLE_CONTACT_NOTIFICATION_REQUEST, TOGGLE_CONTACT_NOTIFICATION_SUCCESS } from './constants';
export interface ToggleContactNotificationRequestAction {
    type: typeof TOGGLE_CONTACT_NOTIFICATION_REQUEST;
    payload: AppUserContact;
}
export interface ToggleContactNotificationSuccessAction {
    type: typeof TOGGLE_CONTACT_NOTIFICATION_SUCCESS;
    payload: AppUserContact;
}
export interface ToggleContactNotificationFailureAction {
    type: typeof TOGGLE_CONTACT_NOTIFICATION_FAILURE;
    payload: Error;
    error: boolean;
}
export interface DeleteContactRequestAction {
    type: typeof DELETE_CONTACT_REQUEST;
    payload: string;
}
export interface DeleteContactSuccessAction {
    type: typeof DELETE_CONTACT_SUCCESS;
    payload: string;
}
export interface DeleteContactFailureAction {
    type: typeof DELETE_CONTACT_FAILURE;
    payload: Error;
    error: boolean;
}
export type ContactActionTypes = ToggleContactNotificationRequestAction | ToggleContactNotificationSuccessAction | ToggleContactNotificationFailureAction | DeleteContactRequestAction | DeleteContactSuccessAction | DeleteContactFailureAction;
