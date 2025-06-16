"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContactsSuccess = exports.getContactsRequest = exports.getContactsFailure = exports.filterContacts = exports.addContactSuccess = exports.addContactRequest = exports.addContactFailure = void 0;
var _constants = require("./constants");
/**
 *
 * AddContactScreen actions
 *
 */

const getContactsRequest = () => ({
  type: _constants.GET_CONTACTS_REQUEST
});
exports.getContactsRequest = getContactsRequest;
const getContactsSuccess = payload => ({
  type: _constants.GET_CONTACTS_SUCCESS,
  payload
});
exports.getContactsSuccess = getContactsSuccess;
const getContactsFailure = error => ({
  type: _constants.GET_CONTACTS_FAILURE,
  payload: error,
  error: true
});
exports.getContactsFailure = getContactsFailure;
const filterContacts = filterText => ({
  type: _constants.FILTER_CONTACTS,
  payload: filterText
});
exports.filterContacts = filterContacts;
const addContactRequest = contact => ({
  type: _constants.ADD_CONTACT_REQUEST,
  payload: contact
});
exports.addContactRequest = addContactRequest;
const addContactSuccess = contact => ({
  type: _constants.ADD_CONTACT_SUCCESS,
  payload: contact
});
exports.addContactSuccess = addContactSuccess;
const addContactFailure = error => ({
  type: _constants.ADD_CONTACT_FAILURE,
  payload: error,
  error: true
});
exports.addContactFailure = addContactFailure;
//# sourceMappingURL=actions.js.map