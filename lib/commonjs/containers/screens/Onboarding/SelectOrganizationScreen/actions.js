"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrganizationsSuccess = exports.updateOrganizationsRequest = exports.updateOrganizationsFailure = exports.toggleSelectOrganization = exports.getOrganizationsSuccess = exports.getOrganizationsRequest = exports.getOrganizationsFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SelectOrganizationScreen actions
 *
 */

const getOrganizationsRequest = keyword => ({
  type: _constants.GET_ORGANIZATIONS_REQUEST,
  payload: keyword
});
exports.getOrganizationsRequest = getOrganizationsRequest;
const getOrganizationsSuccess = organizations => ({
  type: _constants.GET_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
exports.getOrganizationsSuccess = getOrganizationsSuccess;
const getOrganizationsFailure = error => ({
  type: _constants.GET_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.getOrganizationsFailure = getOrganizationsFailure;
const toggleSelectOrganization = id => ({
  type: _constants.TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
exports.toggleSelectOrganization = toggleSelectOrganization;
const updateOrganizationsRequest = payload => ({
  type: _constants.UPDATE_ORGANIZATIONS_REQUEST,
  payload
});
exports.updateOrganizationsRequest = updateOrganizationsRequest;
const updateOrganizationsSuccess = payload => ({
  type: _constants.UPDATE_ORGANIZATIONS_SUCCESS,
  payload
});
exports.updateOrganizationsSuccess = updateOrganizationsSuccess;
const updateOrganizationsFailure = error => ({
  type: _constants.UPDATE_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.updateOrganizationsFailure = updateOrganizationsFailure;
//# sourceMappingURL=actions.js.map