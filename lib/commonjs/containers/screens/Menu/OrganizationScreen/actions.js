"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserOrganizationsSuccess = exports.getUserOrganizationsRequest = exports.getUserOrganizationsFailure = exports.deleteUserOrganizationSuccess = exports.deleteUserOrganizationRequest = exports.deleteUserOrganizationFailure = void 0;
var _constants = require("./constants");
/**
 *
 * OrganizationScreen actions
 *
 */

const getUserOrganizationsRequest = () => ({
  type: _constants.GET_USER_ORGANIZATIONS_REQUEST
});
exports.getUserOrganizationsRequest = getUserOrganizationsRequest;
const getUserOrganizationsSuccess = organizations => ({
  type: _constants.GET_USER_ORGANIZATIONS_SUCCESS,
  payload: organizations
});
exports.getUserOrganizationsSuccess = getUserOrganizationsSuccess;
const getUserOrganizationsFailure = error => ({
  type: _constants.GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.getUserOrganizationsFailure = getUserOrganizationsFailure;
const deleteUserOrganizationRequest = organizations => ({
  type: _constants.DELETE_USER_ORGANIZATION_REQUEST,
  payload: organizations
});
exports.deleteUserOrganizationRequest = deleteUserOrganizationRequest;
const deleteUserOrganizationSuccess = organizations => ({
  type: _constants.DELETE_USER_ORGANIZATION_SUCCESS,
  payload: organizations
});
exports.deleteUserOrganizationSuccess = deleteUserOrganizationSuccess;
const deleteUserOrganizationFailure = error => ({
  type: _constants.DELETE_USER_ORGANIZATION_FAILURE,
  payload: error,
  error: true
});
exports.deleteUserOrganizationFailure = deleteUserOrganizationFailure;
//# sourceMappingURL=actions.js.map