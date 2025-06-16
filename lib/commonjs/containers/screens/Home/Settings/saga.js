"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateSettingScreenSaga;
exports.registerBeacon = registerBeacon;
var api = _interopRequireWildcard(require("../../../../api"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../../../containers/screens/Home/Settings/constants");
var _selectors = require("../../../../containers/app/selectors");
var _actions = require("./actions");
var _constants2 = require("./constants");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * UpdateNameScreen saga
 *
 */

function* registerBeacon({
  payload
}) {
  try {
    const user = yield (0, _effects.select)((0, _selectors.makeSelectUser)());
    Object.assign(payload, {
      user: user.id
    });
    const response = yield (0, _effects.call)(api.beacon.beaconConnect, payload);
    switch (response.data.flag) {
      case true:
        yield (0, _effects.call)(_asyncStorage.default.setItem, _constants.SET_BEACON_DETAILS, JSON.stringify(payload));
        _reactNative.NativeModules.Bluetooth.startBLEService(payload === null || payload === void 0 ? void 0 : payload.address);
        break;
      case false:
        _reactNativeRootToast.default.show(response.data.message, {
          position: _reactNativeRootToast.default.positions.BOTTOM
        });
        break;
    }
    yield (0, _effects.put)((0, _actions.beaconRegistrationSuccess)(response.data));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.beaconRegistrationFailure)((0, _error.handleError)(error)));
  }
}
function* updateSettingScreenSaga() {
  yield (0, _effects.takeLatest)(_constants2.BEACON_REGISTRATION_REQUEST, registerBeacon);
}
//# sourceMappingURL=saga.js.map