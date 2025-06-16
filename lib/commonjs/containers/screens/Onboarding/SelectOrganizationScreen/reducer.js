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
  error: false,
  errorMessage: ''
};
const selectOrganizationScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_ORGANIZATIONS_SUCCESS:
      draft.organizations = action.payload;
      break;
    case _constants.TOGGLE_SELECT_ORGANIZATION:
      draft.organizations = (0, _map.default)(draft.organizations, organization => {
        if (organization.id === action.payload) {
          return {
            ...organization,
            isSelected: !organization.isSelected
          };
        }
        return organization;
      });
      break;
    case _constants.GET_ORGANIZATIONS_FAILURE:
    case _constants.UPDATE_ORGANIZATIONS_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    default:
  }
}, initialState);
var _default = exports.default = selectOrganizationScreenReducer;
//# sourceMappingURL=reducer.js.map