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
 * AddContactScreen reducer
 *
 */

const initialState = exports.initialState = {
  isLoading: false,
  userData: null
};
const deleteAccountReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.DELETE_USER_REQUEST:
      draft.isLoading = true;
      break;
    case _constants.DELETE_USER_SUCCESS:
      console.log("DELETE_USER_SUCCESS");
      draft.isLoading = false;
      draft.userData = action.data;
      break;
    case _constants.RESET_DELETE_USER:
      console.log("RESET_DELETE_USER");
      draft.isLoading = false;
      draft.userData = null;
      break;
    case _constants.DELETE_USER_FAILURE:
      draft.isLoading = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = deleteAccountReducer;
//# sourceMappingURL=reducer.js.map