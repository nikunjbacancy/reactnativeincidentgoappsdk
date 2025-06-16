/**
 *
 * SelectOrganizationScreen actions
 *
 */

import { GET_ORGANIZATIONS_FAILURE, GET_ORGANIZATIONS_REQUEST, GET_ORGANIZATIONS_SUCCESS, TOGGLE_SELECT_ORGANIZATION, UPDATE_ORGANIZATIONS_FAILURE, UPDATE_ORGANIZATIONS_REQUEST, UPDATE_ORGANIZATIONS_SUCCESS } from './constants';
export const getOrganizationsRequest = keyword => ({
  type: GET_ORGANIZATIONS_REQUEST,
  payload: keyword
});
export const getOrganizationsSuccess = organizations => ({
  type: GET_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
export const getOrganizationsFailure = error => ({
  type: GET_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
export const toggleSelectOrganization = id => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
export const updateOrganizationsRequest = payload => ({
  type: UPDATE_ORGANIZATIONS_REQUEST,
  payload
});
export const updateOrganizationsSuccess = payload => ({
  type: UPDATE_ORGANIZATIONS_SUCCESS,
  payload
});
export const updateOrganizationsFailure = error => ({
  type: UPDATE_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map