"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizationNotifyScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _selectors = require("../../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions = require("./actions");
var _constants = require("./constants");
var _selectors2 = require("./selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * SelectOrganizationScreen saga
 *
 */

function* getIntersectOrganizations() {
  try {
    const location = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncidentLocation)());
    const response = yield (0, _effects.call)(api.organizations.findIntersectOrganizations, location);
    yield (0, _effects.put)((0, _actions.getIntersectOrganizationsSuccess)(response.data));
    if (response.data.organizations.length === 1) {
      yield (0, _effects.put)((0, _actions.addSelectedOrganizationSuccess)(response.data.organizations[0]));
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.NewTip.SelectCategory);
    } else {
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.NewTip.SelectOrganization);
    }
  } catch (error) {
    yield (0, _effects.put)((0, _actions.getIntersectOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* addSelectedOrganization() {
  const selectedOrganization = yield (0, _effects.select)((0, _selectors2.makeSelectSelectedOrganization)());
  const incidentExpired = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncidentExpired)());
  if (!incidentExpired) {
    yield (0, _effects.put)((0, _actions.addSelectedOrganizationSuccess)(selectedOrganization));
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.NewTip.SelectCategory);
  } else {
    yield (0, _effects.put)((0, _actions.addSelectedOrganizationFailure)(new Error('Tip expired')));
  }
}
function* organizationNotifyScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_INTERSECT_ORGANIZATIONS_REQUEST, getIntersectOrganizations);
  yield (0, _effects.takeLatest)(_constants.SELECT_INCIDENT_ORGANIZATION_REQUEST, addSelectedOrganization);
}
//# sourceMappingURL=saga.js.map