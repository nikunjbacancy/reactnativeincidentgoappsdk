"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _map = _interopRequireDefault(require("lodash/map"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * SelectOrganizationScreen reducer
 *
 */

const initialState = exports.initialState = {
  organizations: undefined,
  requestingOrganizations: true,
  requestingProcedures: false,
  procedures: undefined,
  error: false,
  errorMessage: ''
};
const timedEscortScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_INTERSECT_ORGANIZATIONS_REQUEST:
      draft.requestingOrganizations = true;
      draft.organizations = [];
      draft.organizationGroups = [];
      break;
    case _constants.GET_INTERSECT_ORGANIZATIONS_SUCCESS:
      draft.requestingOrganizations = false;
      draft.organizations = action.payload.organizations;
      draft.organizationGroups = (0, _map.default)(action.payload.organizationGroups, group => {
        // eslint-disable-next-line no-underscore-dangle
        group.id = group._id;
        return group;
      });
      break;
    case _constants.GET_ORGANIZATION_PROCEDURES_REQUEST:
      draft.requestingOrganizations = true;
      break;
    case _constants.GET_ORGANIZATION_PROCEDURES_SUCCESS:
      draft.requestingOrganizations = false;
      draft.procedures = action.payload;
      break;
    case _constants.TOGGLE_SELECT_ORGANIZATION:
      draft.error = false;
      draft.organizations = (0, _map.default)(draft.organizations, organization => {
        if (organization.id === action.payload) {
          return {
            ...organization,
            isSelected: true
          };
        }
        return {
          ...organization,
          isSelected: false
        };
      });
      draft.organizationGroups = (0, _map.default)(draft.organizationGroups, organization => {
        if (organization.organization === action.payload) {
          return {
            ...organization,
            isSelected: true
          };
        }
        return {
          ...organization,
          isSelected: false
        };
      });
      break;
    case _constants.TOGGLE_SELECT_PROCEDURE:
      draft.error = false;
      draft.procedures = (0, _map.default)(draft.procedures, procedure => {
        if (procedure.id === action.payload) {
          return {
            ...procedure,
            isSelected: !procedure.isSelected
          };
        }
        return {
          ...procedure,
          isSelected: false
        };
      });
      break;
    case _constants.GET_INTERSECT_ORGANIZATIONS_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingOrganizations = false;
      break;
    case _constants.GET_ORGANIZATION_PROCEDURES_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingProcedures = false;
      break;
    case _constants.CLEAR_SELECTIONS:
      draft.organizations = (0, _map.default)(draft.organizations, org => ({
        ...org,
        isSelected: false
      }));
      draft.procedures = (0, _map.default)(draft.procedures, procedure => ({
        ...procedure,
        isSelected: false
      }));
      break;
    default:
  }
}, initialState);
var _default = exports.default = timedEscortScreenReducer;
//# sourceMappingURL=reducer.js.map