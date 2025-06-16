"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizationNotifyScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _saga = require("../../../../../containers/app/saga");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _location = require("../../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("../RequestScreen/actions");
var _types = require("../RequestScreen/types");
var _actions2 = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * SelectOrganizationScreen saga
 *
 */

// import { startChatFailure, startChatSuccess } from '../RecordScreen/actions';

function* getIntersectOrganizations({
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
    }
    if (organizations.length === 1) {
      var _organizations$;
      yield (0, _effects.put)((0, _actions2.toggleSelectOrganization)((_organizations$ = organizations[0]) === null || _organizations$ === void 0 ? void 0 : _organizations$.id));
      yield (0, _effects.put)((0, _actions.startEscortRequest)(payload.onLocation));
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.EscortRequest, {
        isPanic: false,
        requestType: _types.EscortType.Live
      });
    }
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getIntersectOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* organizationNotifyScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_INTERSECT_ORGANIZATIONS_REQUEST, getIntersectOrganizations);
}
//# sourceMappingURL=saga.js.map