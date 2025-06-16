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
 * FeedbackScreen reducer
 *
 */

const initialState = exports.initialState = {
  isSending: false,
  showSuccessModal: false
};
const feedbackScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.SEND_FEEDBACK_REQUEST:
      draft.isSending = true;
      break;
    case _constants.SEND_FEEDBACK_SUCCESS:
      draft.isSending = false;
      draft.showSuccessModal = true;
      break;
    case _constants.SEND_FEEDBACK_FAILURE:
      draft.isSending = false;
      break;
    case _constants.HIDE_SUCCESS_MODAL:
      draft.showSuccessModal = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = feedbackScreenReducer;
//# sourceMappingURL=reducer.js.map