"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addContactScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _reactNativePermissions = require("react-native-permissions");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _effects = require("redux-saga/effects");
var _device = require("../../../../../utils/device");
var _error = require("../../../../../utils/error");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * AddContactScreen saga
 *
 */

function* getContactsSaga() {
  try {
    const permission = _device.isAndroid ? _reactNativePermissions.PERMISSIONS.ANDROID.READ_CONTACTS : _reactNativePermissions.PERMISSIONS.IOS.CONTACTS;
    const permissionStatus = yield (0, _effects.call)(_reactNativePermissions.request, permission);
    //("contacts permission ==>",permission)
    //("contacts permissionStatus ==>",permissionStatus)
    if (permissionStatus === _reactNativePermissions.RESULTS.GRANTED) {
      const contacts = yield (0, _effects.call)(_device.getContacts);
      //("contacts ==>",contacts)
      return yield (0, _effects.put)((0, _actions.getContactsSuccess)({
        contacts,
        filteredContacts: contacts,
        permissionStatus
      }));
    }
    return yield (0, _effects.put)((0, _actions.getContactsSuccess)({
      contacts: [],
      filteredContacts: [],
      permissionStatus
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.getContactsFailure)((0, _error.handleError)(error)));
  }
}
function* addContact({
  payload
}) {
  delete payload.id; // to let api generate id

  try {
    const response = yield (0, _effects.call)(api.user.addContact, payload);
    yield (0, _effects.put)((0, _actions.addContactSuccess)(response.data));
    yield (0, _effects.call)(_navigation.default.back);
  } catch (error) {
    var _error$response;
    _reactNativeRootToast.default.show(error === null || error === void 0 || (_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    yield (0, _effects.put)((0, _actions.addContactFailure)((0, _error.handleError)(error)));
  }
}
function* addContactScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_CONTACTS_REQUEST, getContactsSaga);
  yield (0, _effects.takeLatest)(_constants.ADD_CONTACT_REQUEST, addContact);
}
//# sourceMappingURL=saga.js.map