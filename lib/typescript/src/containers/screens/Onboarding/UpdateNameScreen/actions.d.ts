/**
 *
 * UpdateNameScreen actions
 *
 */
import { AppUser } from 'incident-code-core';
import { UpdateNameActionTypes } from './types';
export declare const updateNameSuccess: (user: AppUser) => UpdateNameActionTypes;
export declare const updateNameFailure: (error: Error) => UpdateNameActionTypes;
