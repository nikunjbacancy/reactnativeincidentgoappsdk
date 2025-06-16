"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSelectProcedure = exports.toggleSelectOrganization = exports.getOrganizationProceduresSuccess = exports.getOrganizationProceduresRequest = exports.getOrganizationProceduresFailure = exports.getIntersectOrganizationsSuccess = exports.getIntersectOrganizationsRequest = exports.getIntersectOrganizationsFailure = exports.clearSelections = void 0;
var _constants = require("./constants");
/**
 *
 * TimedEscortScreen actions
 *
 */

const getIntersectOrganizationsRequest = () => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_REQUEST
});
exports.getIntersectOrganizationsRequest = getIntersectOrganizationsRequest;
const getIntersectOrganizationsSuccess = payload => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload
});
exports.getIntersectOrganizationsSuccess = getIntersectOrganizationsSuccess;
const getIntersectOrganizationsFailure = error => ({
  type: _constants.GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true
});
exports.getIntersectOrganizationsFailure = getIntersectOrganizationsFailure;
const getOrganizationProceduresRequest = id => ({
  type: _constants.GET_ORGANIZATION_PROCEDURES_REQUEST,
  payload: id
});
exports.getOrganizationProceduresRequest = getOrganizationProceduresRequest;
const getOrganizationProceduresSuccess = procedures => ({
  type: _constants.GET_ORGANIZATION_PROCEDURES_SUCCESS,
  payload: procedures
});
exports.getOrganizationProceduresSuccess = getOrganizationProceduresSuccess;
const getOrganizationProceduresFailure = error => ({
  type: _constants.GET_ORGANIZATION_PROCEDURES_FAILURE,
  payload: error,
  error: true
});
exports.getOrganizationProceduresFailure = getOrganizationProceduresFailure;
const toggleSelectOrganization = id => ({
  type: _constants.TOGGLE_SELECT_ORGANIZATION,
  payload: id
});
exports.toggleSelectOrganization = toggleSelectOrganization;
const toggleSelectProcedure = id => ({
  type: _constants.TOGGLE_SELECT_PROCEDURE,
  payload: id
});
exports.toggleSelectProcedure = toggleSelectProcedure;
const clearSelections = () => ({
  type: _constants.CLEAR_SELECTIONS
});
exports.clearSelections = clearSelections;
//# sourceMappingURL=actions.js.map