"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleContactNotificationSuccess = exports.toggleContactNotificationRequest = exports.toggleContactNotificationFailure = exports.deleteContactSuccess = exports.deleteContactRequest = exports.deleteContactFailure = void 0;
var _constants = require("./constants");
/**
 *
 * ContactScreen actions
 *
 */

const toggleContactNotificationRequest = contact => ({
  type: _constants.TOGGLE_CONTACT_NOTIFICATION_REQUEST,
  payload: contact
});
exports.toggleContactNotificationRequest = toggleContactNotificationRequest;
const toggleContactNotificationSuccess = contact => ({
  type: _constants.TOGGLE_CONTACT_NOTIFICATION_SUCCESS,
  payload: contact
});
exports.toggleContactNotificationSuccess = toggleContactNotificationSuccess;
const toggleContactNotificationFailure = error => ({
  type: _constants.TOGGLE_CONTACT_NOTIFICATION_FAILURE,
  payload: error,
  error: true
});
exports.toggleContactNotificationFailure = toggleContactNotificationFailure;
const deleteContactRequest = contactId => ({
  type: _constants.DELETE_CONTACT_REQUEST,
  payload: contactId
});
exports.deleteContactRequest = deleteContactRequest;
const deleteContactSuccess = contactId => ({
  type: _constants.DELETE_CONTACT_SUCCESS,
  payload: contactId
});
exports.deleteContactSuccess = deleteContactSuccess;
const deleteContactFailure = error => ({
  type: _constants.DELETE_CONTACT_FAILURE,
  payload: error,
  error: true
});
exports.deleteContactFailure = deleteContactFailure;
//# sourceMappingURL=actions.js.map