/**
 *
 * ContactScreen actions
 *
 */
import { AppUserContact } from 'incident-code-core';
import { ContactActionTypes } from './types';
export declare const toggleContactNotificationRequest: (contact: AppUserContact) => ContactActionTypes;
export declare const toggleContactNotificationSuccess: (contact: AppUserContact) => ContactActionTypes;
export declare const toggleContactNotificationFailure: (error: Error) => ContactActionTypes;
export declare const deleteContactRequest: (contactId: string) => ContactActionTypes;
export declare const deleteContactSuccess: (contactId: string) => ContactActionTypes;
export declare const deleteContactFailure: (error: Error) => ContactActionTypes;
