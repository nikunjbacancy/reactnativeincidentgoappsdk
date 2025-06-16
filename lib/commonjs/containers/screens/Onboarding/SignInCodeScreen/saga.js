"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signInCodeScreenSaga;
exports.login = login;
exports.resendCode = resendCode;
var api = _interopRequireWildcard(require("../../../../api"));
var _saga = require("../../../../containers/app/saga");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _actions = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/* eslint-disable no-console */
/**
 *
 * SignInCodeScreen saga
 *
 */

function* login({
  payload
}) {
  //("login payload is -->",payload)
  try {
    const response = yield (0, _effects.call)(api.auth.login, payload);
    // //("-check param exist->",response.data.hasOwnProperty('newUser') ? true : false)
    //("login ~ response", JSON.stringify(response.data));
    if (response.data.hasOwnProperty('newUser')) {
      if (response.data.hasOwnProperty('newUser') == true) {
        yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.PromoCode, {
          promoCodeData: response.data
        });
      } else {
        yield (0, _effects.put)((0, _actions.loginSuccess)(response.data));
        yield (0, _effects.call)(_saga.getProfile);
        yield (0, _effects.call)(_saga.getTwilioAccessToken);
        yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.UpdateName);
      }
    } else {
      yield (0, _effects.put)((0, _actions.loginSuccess)(response.data));
      yield (0, _effects.call)(_saga.getProfile);
      yield (0, _effects.call)(_saga.getTwilioAccessToken);
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.UpdateName);
    }
  } catch (error) {
    const axiosError = yield (0, _effects.call)(_error.handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield (0, _effects.call)(_reactNativeRootToast.default.show, axiosError.message, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    yield (0, _effects.put)((0, _actions.loginFailure)((0, _error.handleError)(error)));
  }
}
function* resendCode({
  payload
}) {
  // //("resendCode payload is -->", payload)
  try {
    yield (0, _effects.call)(api.auth.sendCode, payload);
    yield (0, _effects.put)((0, _actions.resendCodeSuccess)());
    //("Code Resent 1-->")
    yield (0, _effects.call)(_reactNativeRootToast.default.show, 'Code Resent', {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    //("Code Resent 2-->")
  } catch (error) {
    const axiosError = yield (0, _effects.call)(_error.handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield (0, _effects.call)(_reactNativeRootToast.default.show, axiosError.message, {
      position: _reactNativeRootToast.default.positions.CENTER
    });
    yield (0, _effects.put)((0, _actions.resendCodeFailure)(axiosError));
  }
}
function* signInCodeScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.LOGIN_REQUEST, login);
  yield (0, _effects.takeLatest)(_constants.RESEND_CODE_REQUEST, resendCode);
}
//# sourceMappingURL=saga.js.map