/**
 *
 * TimedEscortScreen actions
 *
 */

import { CLEAR_SELECTIONS, GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, GET_ORGANIZATION_PROCEDURES_FAILURE, GET_ORGANIZATION_PROCEDURES_REQUEST, GET_ORGANIZATION_PROCEDURES_SUCCESS, TOGGLE_SELECT_ORGANIZATION, TOGGLE_SELECT_PROCEDURE } from './constants';
export const getIntersectOrganizationsRequest = () => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST
});
export const getIntersectOrganizationsSuccess = payload => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload
});
export const getIntersectOrganizationsFailure = error => ({
  type: GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
export const getOrganizationProceduresRequest = id => ({
  type: GET_ORGANIZATION_PROCEDURES_REQUEST,
  payload: id
});
export const getOrganizationProceduresSuccess = procedures => ({
  type: GET_ORGANIZATION_PROCEDURES_SUCCESS,
  payload: procedures
});
export const getOrganizationProceduresFailure = error => ({
  type: GET_ORGANIZATION_PROCEDURES_FAILURE,
  payload: error,
  error: true
});
export const toggleSelectOrganization = id => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
export const toggleSelectProcedure = id => ({
  type: TOGGLE_SELECT_PROCEDURE,
  payload: id
});
export const clearSelections = () => ({
  type: CLEAR_SELECTIONS
});
//# sourceMappingURL=actions.js.map