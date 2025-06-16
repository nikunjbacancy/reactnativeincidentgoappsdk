/**
 *
 * SelectOrganizationScreen types
 *
 */
import { Id, OrganizationWithArea } from 'incident-code-core';
import { IntersectOrganizationSelection, OrganizationSelection } from 'types';
import { GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, SELECT_INCIDENT_ORGANIZATION_FAILURE, SELECT_INCIDENT_ORGANIZATION_REQUEST, SELECT_INCIDENT_ORGANIZATION_SUCCESS, TOGGLE_SELECT_ORGANIZATION } from './constants';
export interface OrganizationNotifyState {
    organizations?: OrganizationSelection[];
    requestingOrganizations: boolean;
    error: boolean;
    errorMessage: string;
}
export interface GetIntersectOrganizationsRequestAction {
    type: typeof GET_INTERSECT_ORGANIZATIONS_REQUEST;
}
export interface GetIntersectOrganizationsSuccessAction {
    type: typeof GET_INTERSECT_ORGANIZATIONS_SUCCESS;
    payload: IntersectOrganizationSelection[];
}
export interface GetIntersectOrganizationsFailureAction {
    type: typeof GET_INTERSECT_ORGANIZATIONS_FAILURE;
    payload: Error;
    error: boolean;
}
export interface ToggleSelectOrganizationAction {
    type: typeof TOGGLE_SELECT_ORGANIZATION;
    payload: Id;
}
export interface AddSelectedOrganizationRequestAction {
    type: typeof SELECT_INCIDENT_ORGANIZATION_REQUEST;
}
export interface AddSelectedOrganizationSuccessAction {
    type: typeof SELECT_INCIDENT_ORGANIZATION_SUCCESS;
    payload: OrganizationWithArea;
}
export interface AddSelectedOrganizationFailureAction {
    type: typeof SELECT_INCIDENT_ORGANIZATION_FAILURE;
    payload: Error;
    error: boolean;
}
export type SelectOrganizationActionTypes = GetIntersectOrganizationsRequestAction | GetIntersectOrganizationsSuccessAction | GetIntersectOrganizationsFailureAction | ToggleSelectOrganizationAction | AddSelectedOrganizationRequestAction | AddSelectedOrganizationSuccessAction | AddSelectedOrganizationFailureAction;
