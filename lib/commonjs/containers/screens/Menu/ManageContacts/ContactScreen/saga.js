"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = contactScreenSaga;
exports.deleteContact = deleteContact;
exports.toggleContactNotification = toggleContactNotification;
var api = _interopRequireWildcard(require("../../../../../api"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _actions = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * ContactScreen saga
 *
 */

function* toggleContactNotification({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.updateContact, payload);
    yield (0, _effects.put)((0, _actions.toggleContactNotificationSuccess)(payload));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.toggleContactNotificationFailure)((0, _error.handleError)(error)));
  }
}
function* deleteContact({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.deleteContact, payload);
    yield (0, _effects.put)((0, _actions.deleteContactSuccess)(payload));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.deleteContactFailure)((0, _error.handleError)(error)));
  }
}
function* contactScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.TOGGLE_CONTACT_NOTIFICATION_REQUEST, toggleContactNotification);
  yield (0, _effects.takeLatest)(_constants.DELETE_CONTACT_REQUEST, deleteContact);
}
//# sourceMappingURL=saga.js.map