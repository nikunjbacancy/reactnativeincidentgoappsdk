/**
 *
 * OrganizationScreen actions
 *
 */
import { Organization } from 'incident-code-core';
import { OrganizationActionTypes } from './types';
export declare const getUserOrganizationsRequest: () => OrganizationActionTypes;
export declare const getUserOrganizationsSuccess: (organizations: Organization[]) => OrganizationActionTypes;
export declare const getUserOrganizationsFailure: (error: Error) => OrganizationActionTypes;
export declare const deleteUserOrganizationRequest: (organizations: Organization[]) => OrganizationActionTypes;
export declare const deleteUserOrganizationSuccess: (organizations: Organization[]) => OrganizationActionTypes;
export declare const deleteUserOrganizationFailure: (error: Error) => OrganizationActionTypes;
