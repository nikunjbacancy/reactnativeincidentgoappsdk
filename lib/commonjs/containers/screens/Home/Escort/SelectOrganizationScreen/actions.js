"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSelectOrganization = exports.getIntersectOrganizationsSuccess = exports.getIntersectOrganizationsRequest = exports.getIntersectOrganizationsFailure = void 0;
var _constants = require("./constants");
/**
 *
 * SelectOrganizationScreen actions
 *
 */

const getIntersectOrganizationsRequest = onLocation => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_REQUEST,
  payload: {
    onLocation
  }
});
exports.getIntersectOrganizationsRequest = getIntersectOrganizationsRequest;
const getIntersectOrganizationsSuccess = organizations => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: {
    organizations
  }
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
//# sourceMappingURL=actions.js.map