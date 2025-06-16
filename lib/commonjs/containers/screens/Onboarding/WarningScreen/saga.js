"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warningScreenSaga;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var api = _interopRequireWildcard(require("../../../../api"));
var _saga = require("../../../../containers/app/saga");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _constants = require("../../../../containers/screens/Home/Escort/RecordScreen/constants");
var _types = require("../../../../containers/screens/Home/Escort/RecordScreen/types");
var _actions = require("../../../../containers/screens/Home/Escort/RequestScreen/actions");
var _actions2 = require("../../../../containers/screens/Home/Escort/SelectOrganizationScreen/actions");
var _effects = require("redux-saga/effects");
var _location = require("../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _actions3 = require("./actions");
var _constants2 = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function* delayHidePanicInfo() {
  yield (0, _effects.delay)(3000);
  yield (0, _effects.put)((0, _actions3.hidePanicInfo)());
}
function* startDuressRequest({
  payload
}) {
  try {
    const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
    const response = yield (0, _effects.call)(api.organizations.findIntersectOrganizations, location);
    const {
      organizations
    } = response.data;
    yield (0, _effects.put)((0, _actions2.getIntersectOrganizationsSuccess)(organizations));
    if (organizations.length === 0) {
      yield* (0, _saga.triggerOnboardForInactiveUser)();
    } else {
      var _organizations$;
      yield (0, _effects.put)((0, _actions2.toggleSelectOrganization)((_organizations$ = organizations[0]) === null || _organizations$ === void 0 ? void 0 : _organizations$.id));
    }
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants.PANIC_MODE_KEY, _types.PanicMode.Active);
    yield (0, _effects.put)((0, _actions.startEscortRequest)(payload.onLocation, 'Duress triggered', true));
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.EscortRequest, {
      isPanic: true
    });
  } catch (error) {
    yield (0, _effects.call)(_actions3.duressRequestError, error.message);
  }
}
function* warningScreenSaga() {
  yield (0, _effects.takeLatest)(_constants2.SHOW_PANIC_INFO, delayHidePanicInfo);
  yield (0, _effects.takeLatest)(_constants2.TRIGGER_DURESS_REQUEST, startDuressRequest);
}
//# sourceMappingURL=saga.js.map