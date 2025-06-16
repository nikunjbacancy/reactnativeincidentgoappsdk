/**
 *
 * SelectOrganizationScreen actions
 *
 */
import { Id } from 'incident-code-core';
import { OrganizationSelection } from 'types';
import { SelectOrganizationActionTypes, UpdateOrganizationsPayload, UpdateOrganizationsSuccessPayload } from './types';
export declare const getOrganizationsRequest: (keyword?: string) => SelectOrganizationActionTypes;
export declare const getOrganizationsSuccess: (organizations: OrganizationSelection[]) => SelectOrganizationActionTypes;
export declare const getOrganizationsFailure: (error: Error) => SelectOrganizationActionTypes;
export declare const toggleSelectOrganization: (id: Id) => SelectOrganizationActionTypes;
export declare const updateOrganizationsRequest: (payload: UpdateOrganizationsPayload) => SelectOrganizationActionTypes;
export declare const updateOrganizationsSuccess: (payload: UpdateOrganizationsSuccessPayload) => SelectOrganizationActionTypes;
export declare const updateOrganizationsFailure: (error: Error) => SelectOrganizationActionTypes;
