/**
 *
 * OrganizationScreen types
 *
 */
import { Organization } from 'incident-code-core';
import { DELETE_USER_ORGANIZATION_FAILURE, DELETE_USER_ORGANIZATION_REQUEST, DELETE_USER_ORGANIZATION_SUCCESS, GET_USER_ORGANIZATIONS_FAILURE, GET_USER_ORGANIZATIONS_REQUEST, GET_USER_ORGANIZATIONS_SUCCESS } from './constants';
export interface OrganizationState {
    isLoading: boolean;
    organizations: Organization[];
}
export interface GetUserOrganizationsRequestAction {
    type: typeof GET_USER_ORGANIZATIONS_REQUEST;
}
export interface GetUserOrganizationsSuccessAction {
    type: typeof GET_USER_ORGANIZATIONS_SUCCESS;
    payload: Organization[];
}
export interface GetUserOrganizationsFailureAction {
    type: typeof GET_USER_ORGANIZATIONS_FAILURE;
    payload: Error;
    error: boolean;
}
export interface DeleteUserOrganizationRequestAction {
    type: typeof DELETE_USER_ORGANIZATION_REQUEST;
    payload: Organization[];
}
export interface DeleteUserOrganizationSuccessAction {
    type: typeof DELETE_USER_ORGANIZATION_SUCCESS;
    payload: Organization[];
}
export interface DeleteUserOrganizationFailureAction {
    type: typeof DELETE_USER_ORGANIZATION_FAILURE;
    payload: Error;
    error: boolean;
}
export type OrganizationActionTypes = GetUserOrganizationsRequestAction | GetUserOrganizationsSuccessAction | GetUserOrganizationsFailureAction | DeleteUserOrganizationRequestAction | DeleteUserOrganizationSuccessAction | DeleteUserOrganizationFailureAction;
