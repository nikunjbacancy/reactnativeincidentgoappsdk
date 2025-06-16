"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserEmail = exports.showSuccessModal = exports.sendFeedbackSuccess = exports.sendFeedbackFailure = exports.hideSuccessModal = void 0;
var _constants = require("./constants");
/**
 *
 * FeedbackScreen actions
 *
 */

const sendFeedbackSuccess = () => ({
  type: _constants.SEND_FEEDBACK_SUCCESS
});
exports.sendFeedbackSuccess = sendFeedbackSuccess;
const sendFeedbackFailure = error => ({
  type: _constants.SEND_FEEDBACK_FAILURE,
  payload: error,
  error: true
});
exports.sendFeedbackFailure = sendFeedbackFailure;
const updateUserEmail = email => ({
  type: _constants.UPDATE_USER_EMAIL,
  payload: email
});
exports.updateUserEmail = updateUserEmail;
const showSuccessModal = () => ({
  type: _constants.SHOW_SUCCESS_MODAL
});
exports.showSuccessModal = showSuccessModal;
const hideSuccessModal = () => ({
  type: _constants.HIDE_SUCCESS_MODAL
});
exports.hideSuccessModal = hideSuccessModal;
//# sourceMappingURL=actions.js.map