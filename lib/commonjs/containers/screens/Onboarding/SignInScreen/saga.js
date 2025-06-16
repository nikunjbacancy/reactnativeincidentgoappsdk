"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signInScreenSaga;
exports.sendCode = sendCode;
var api = _interopRequireWildcard(require("../../../../api"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _actions = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * SignInScreen saga
 *
 */

function* sendCode({
  payload: {
    phone
  }
}) {
  try {
    const params = {
      phone: phone,
      isSDK: true
    };
    // //("-send code request param-->",params)
    yield (0, _effects.call)(api.auth.sendCode, params);
    // //("🚀 ~ file: saga.ts ~ line 18 ~ function*signin ~ response", JSON.stringify(response));
    yield (0, _effects.put)((0, _actions.sendCodeSuccess)(phone));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.sendCodeFailure)((0, _error.handleError)(error)));
  }
}
function* signInScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.SEND_CODE_REQUEST, sendCode);
}
//# sourceMappingURL=saga.js.map