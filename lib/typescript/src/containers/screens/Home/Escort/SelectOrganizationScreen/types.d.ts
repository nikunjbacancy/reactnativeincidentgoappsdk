/**
 *
 * SelectOrganizationScreen types
 *
 */
import { Id } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { IntersectOrganizationSelection, OrganizationSelection } from 'types';
import { GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, TOGGLE_SELECT_ORGANIZATION } from './constants';
export interface SelectOrganizationState {
    organizations?: OrganizationSelection[];
    organizationGroups: any;
    requestingOrganizations: boolean;
    error: boolean;
    errorMessage: string;
}
export interface GetIntersectOrganizationsRequestAction {
    type: typeof GET_INTERSECT_ORGANIZATIONS_REQUEST;
    payload: {
        onLocation: (location: Location) => void;
    };
}
export interface GetIntersectOrganizationsSuccessAction {
    type: typeof GET_INTERSECT_ORGANIZATIONS_SUCCESS;
    payload: {
        organizations: IntersectOrganizationSelection[];
        organizationGroups: [];
    };
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
export type SelectOrganizationActionTypes = GetIntersectOrganizationsRequestAction | GetIntersectOrganizationsSuccessAction | GetIntersectOrganizationsFailureAction | ToggleSelectOrganizationAction;
