/**
 *
 * SelectOrganizationScreen actions
 *
 */

import { GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, SELECT_INCIDENT_ORGANIZATION_FAILURE, SELECT_INCIDENT_ORGANIZATION_REQUEST, SELECT_INCIDENT_ORGANIZATION_SUCCESS, TOGGLE_SELECT_ORGANIZATION } from './constants';
export const getIntersectOrganizationsRequest = () => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST
});
export const getIntersectOrganizationsSuccess = organizations => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
export const getIntersectOrganizationsFailure = error => ({
  type: GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
export const toggleSelectOrganization = id => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
export const addSelectedOrganizationRequest = () => ({
  type: SELECT_INCIDENT_ORGANIZATION_REQUEST
});
export const addSelectedOrganizationSuccess = organization => ({
  type: SELECT_INCIDENT_ORGANIZATION_SUCCESS,
  payload: organization
});
export const addSelectedOrganizationFailure = error => ({
  type: SELECT_INCIDENT_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map