"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateNameScreenSaga;
exports.updateName = updateName;
var api = _interopRequireWildcard(require("../../../../api"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _actions = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * UpdateNameScreen saga
 *
 */

function* updateName({
  payload
}) {
  try {
    //("update name request=>",payload)
    yield (0, _effects.call)(api.user.updateName, payload);
    //("update name success=>",payload)
    yield (0, _effects.put)((0, _actions.updateNameSuccess)(payload));
  } catch (error) {
    //("update name error=>",error)
    yield (0, _effects.put)((0, _actions.updateNameFailure)((0, _error.handleError)(error)));
  }
}
function* updateNameScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.UPDATE_NAME_REQUEST, updateName);
}
//# sourceMappingURL=saga.js.map