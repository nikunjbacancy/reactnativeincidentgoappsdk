"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = registerUserScreenSaga;
exports.registerUser = registerUser;
var api = _interopRequireWildcard(require("../../../../api"));
var _saga = require("../../../../containers/app/saga");
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _actions = require("./actions");
var _constants = require("./constants");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable no-console */
/**
 *
 * SignInCodeScreen saga
 *
 */

function* registerUser({
  payload
}) {
  //("register request payload is -->",payload)
  try {
    const response = yield (0, _effects.call)(api.auth.userRegister, payload);
    //("register user response", JSON.stringify(response));
    // yield put(registerUserSuccess(response.data));
    // yield call(getProfile);
    // yield call(getTwilioAccessToken);
    yield (0, _effects.put)((0, _actions.registerUserSuccess)(response.data));
    yield (0, _effects.call)(_saga.getProfile);
    yield (0, _effects.call)(_saga.getTwilioAccessToken);
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.UpdateName);
  } catch (error) {
    const axiosError = yield (0, _effects.call)(_error.handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield (0, _effects.call)(_reactNativeRootToast.default.show, axiosError.message, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    yield (0, _effects.put)((0, _actions.registerUserFailure)((0, _error.handleError)(error)));
  }
}
function* registerUserScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.REGISTER_USER_REQUEST, registerUser);
}
//# sourceMappingURL=saga.js.map