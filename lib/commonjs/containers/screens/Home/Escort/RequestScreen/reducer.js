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
 * SelectOrganizationScreen reducer
 *
 */

const initialState = exports.initialState = {
  requestingEscort: false,
  error: false,
  errorMessage: '',
  shouldShowCancelEscortModal: false,
  pendingEscort: undefined
};
const selectOrganizationScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.START_ESCORT_REQUEST:
      draft.requestingEscort = true;
      break;
    case _constants.START_ESCORT_SUCCESS:
      draft.requestingEscort = false;
      break;
    case _constants.START_ESCORT_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingEscort = false;
      break;
    case _constants.SHOW_CANCEL_ESCORT_MODAL:
      draft.shouldShowCancelEscortModal = true;
      break;
    case _constants.HIDE_CANCEL_ESCORT_MODAL:
      draft.shouldShowCancelEscortModal = false;
      break;
    case _constants.ADD_PENDING_ESCORT:
      draft.pendingEscort = action.payload;
      break;
    case _constants.CANCEL_ESCORT_SUCCESS:
      draft.requestingEscort = false;
      draft.error = false;
      draft.errorMessage = '';
      draft.shouldShowCancelEscortModal = false;
      draft.pendingEscort = undefined;
      break;
    default:
  }
}, initialState);
var _default = exports.default = selectOrganizationScreenReducer;
//# sourceMappingURL=reducer.js.map