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
  requestingOrganizations: false,
  error: false,
  errorMessage: ''
};
const organizationNotifyScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_INTERSECT_ORGANIZATIONS_REQUEST:
      draft.requestingOrganizations = true;
      break;
    case _constants.GET_INTERSECT_ORGANIZATIONS_SUCCESS:
      draft.requestingOrganizations = false;
      draft.organizations = action.payload.organizations;
      break;
    case _constants.TOGGLE_SELECT_ORGANIZATION:
      draft.organizations = (0, _map.default)(draft.organizations, organization => {
        if (organization.id === action.payload) {
          return {
            ...organization,
            isSelected: !organization.isSelected
          };
        }
        return {
          ...organization,
          isSelected: false
        };
      });
      break;
    case _constants.GET_INTERSECT_ORGANIZATIONS_FAILURE:
    case _constants.SELECT_INCIDENT_ORGANIZATION_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingOrganizations = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = organizationNotifyScreenReducer;
//# sourceMappingURL=reducer.js.map