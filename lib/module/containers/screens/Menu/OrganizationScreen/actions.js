/**
 *
 * OrganizationScreen actions
 *
 */

import { DELETE_USER_ORGANIZATION_FAILURE, DELETE_USER_ORGANIZATION_REQUEST, DELETE_USER_ORGANIZATION_SUCCESS, GET_USER_ORGANIZATIONS_FAILURE, GET_USER_ORGANIZATIONS_REQUEST, GET_USER_ORGANIZATIONS_SUCCESS } from './constants';
export const getUserOrganizationsRequest = () => ({
  type: GET_USER_ORGANIZATIONS_REQUEST
});
export const getUserOrganizationsSuccess = organizations => ({
  type: GET_USER_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
export const getUserOrganizationsFailure = error => ({
  type: GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
export const deleteUserOrganizationRequest = organizations => ({
  type: DELETE_USER_ORGANIZATION_REQUEST,
  payload: organizations
});
export const deleteUserOrganizationSuccess = organizations => ({
  type: DELETE_USER_ORGANIZATION_SUCCESS,
  payload: organizations
});
export const deleteUserOrganizationFailure = error => ({
  type: DELETE_USER_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map