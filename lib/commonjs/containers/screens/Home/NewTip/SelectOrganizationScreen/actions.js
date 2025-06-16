"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSelectOrganization = exports.getIntersectOrganizationsSuccess = exports.getIntersectOrganizationsRequest = exports.getIntersectOrganizationsFailure = exports.addSelectedOrganizationSuccess = exports.addSelectedOrganizationRequest = exports.addSelectedOrganizationFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SelectOrganizationScreen actions
 *
 */

const getIntersectOrganizationsRequest = () => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_REQUEST
});
exports.getIntersectOrganizationsRequest = getIntersectOrganizationsRequest;
const getIntersectOrganizationsSuccess = organizations => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
exports.getIntersectOrganizationsSuccess = getIntersectOrganizationsSuccess;
const getIntersectOrganizationsFailure = error => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.getIntersectOrganizationsFailure = getIntersectOrganizationsFailure;
const toggleSelectOrganization = id => ({
  type: _constants.TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
exports.toggleSelectOrganization = toggleSelectOrganization;
const addSelectedOrganizationRequest = () => ({
  type: _constants.SELECT_INCIDENT_ORGANIZATION_REQUEST
});
exports.addSelectedOrganizationRequest = addSelectedOrganizationRequest;
const addSelectedOrganizationSuccess = organization => ({
  type: _constants.SELECT_INCIDENT_ORGANIZATION_SUCCESS,
  payload: organization
});
exports.addSelectedOrganizationSuccess = addSelectedOrganizationSuccess;
const addSelectedOrganizationFailure = error => ({
  type: _constants.SELECT_INCIDENT_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
exports.addSelectedOrganizationFailure = addSelectedOrganizationFailure;
//# sourceMappingURL=actions.js.map