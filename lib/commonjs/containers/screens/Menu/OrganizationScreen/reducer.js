"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * OrganizationScreen reducer
 *
 */

const initialState = exports.initialState = {
  isLoading: false,
  organizations: []
};
const organizationScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_USER_ORGANIZATIONS_REQUEST:
    case _constants.DELETE_USER_ORGANIZATION_REQUEST:
      draft.isLoading = true;
      break;
    case _constants.GET_USER_ORGANIZATIONS_SUCCESS:
      draft.organizations = action.payload;
      draft.isLoading = false;
      break;
    case _constants.DELETE_USER_ORGANIZATION_SUCCESS:
      draft.organizations = action.payload;
      draft.isLoading = false;
      break;
    case _constants.GET_USER_ORGANIZATIONS_FAILURE:
    case _constants.DELETE_USER_ORGANIZATION_FAILURE:
      draft.isLoading = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = organizationScreenReducer;
//# sourceMappingURL=reducer.js.map