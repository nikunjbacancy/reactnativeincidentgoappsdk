/**
 *
 * SelectOrganizationScreen actions
 *
 */

import { GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, TOGGLE_SELECT_ORGANIZATION } from './constants';
export const getIntersectOrganizationsRequest = onLocation => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST,
  payload: {
    onLocation
  }
});
export const getIntersectOrganizationsSuccess = organizations => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: {
    organizations
  }
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
//# sourceMappingURL=actions.js.map