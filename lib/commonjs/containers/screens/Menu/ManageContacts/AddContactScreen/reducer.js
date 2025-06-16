"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _startsWith = _interopRequireDefault(require("lodash/startsWith"));
var _reactNativePermissions = require("react-native-permissions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * AddContactScreen reducer
 *
 */

const initialState = exports.initialState = {
  contacts: [],
  filteredContacts: [],
  permissionStatus: _reactNativePermissions.RESULTS.UNAVAILABLE
};
const addContactsScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_CONTACTS_SUCCESS:
      draft.contacts = action.payload.contacts;
      draft.filteredContacts = action.payload.filteredContacts;
      draft.permissionStatus = action.payload.permissionStatus;
      break;
    case _constants.GET_CONTACTS_FAILURE:
      draft.contacts = initialState.contacts;
      draft.filteredContacts = initialState.filteredContacts;
      draft.permissionStatus = initialState.permissionStatus;
      break;
    case _constants.FILTER_CONTACTS:
      draft.filteredContacts = (0, _filter.default)(draft.contacts, item => (0, _startsWith.default)(item.name, action.payload));
      break;
    default:
  }
}, initialState);
var _default = exports.default = addContactsScreenReducer;
//# sourceMappingURL=reducer.js.map