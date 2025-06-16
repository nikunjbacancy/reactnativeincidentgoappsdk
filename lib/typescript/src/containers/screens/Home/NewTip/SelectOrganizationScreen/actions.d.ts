/**
 *
 * SelectOrganizationScreen actions
 *
 */
import { Id, OrganizationWithArea } from 'incident-code-core';
import { IntersectOrganizationSelection } from 'types';
import { SelectOrganizationActionTypes } from './types';
export declare const getIntersectOrganizationsRequest: () => SelectOrganizationActionTypes;
export declare const getIntersectOrganizationsSuccess: (organizations: IntersectOrganizationSelection[]) => SelectOrganizationActionTypes;
export declare const getIntersectOrganizationsFailure: (error: Error) => SelectOrganizationActionTypes;
export declare const toggleSelectOrganization: (id: Id) => SelectOrganizationActionTypes;
export declare const addSelectedOrganizationRequest: () => SelectOrganizationActionTypes;
export declare const addSelectedOrganizationSuccess: (organization: OrganizationWithArea) => SelectOrganizationActionTypes;
export declare const addSelectedOrganizationFailure: (error: Error) => SelectOrganizationActionTypes;
