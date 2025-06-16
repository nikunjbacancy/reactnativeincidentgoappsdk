"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizationNotifyScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _saga = require("../../../../../containers/app/saga");
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _location = require("../../../../../utils/location");
var _actions = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * SelectOrganizationScreen saga
 *
 */

function* getIntersectOrganizations() {
  try {
    console.log("===getIntersectOrganizations=====");
    const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
    console.log("getIntersectOrganizations location==>", location);
    const response = yield (0, _effects.call)(api.organizations.findIntersectOrganizations, location);
    console.log("getIntersectOrganizations location response==>", response);
    yield (0, _effects.put)((0, _actions.getIntersectOrganizationsSuccess)(response.data));
    if (response.data.organizations.length === 0) {
      yield* (0, _saga.triggerOnboardForInactiveUser)();
    }
    if (response.data.organizations.length === 1) {
      var _response$data$organi;
      yield (0, _effects.put)((0, _actions.toggleSelectOrganization)((_response$data$organi = response.data.organizations[0]) === null || _response$data$organi === void 0 ? void 0 : _response$data$organi.id));
    }
  } catch (error) {
    console.log("getIntersectOrganizationsFailure location error==>", error);
    yield (0, _effects.put)((0, _actions.getIntersectOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* getOrganizationProcedures({
  payload
}) {
  try {
    const response = yield (0, _effects.call)(api.organizations.getOrganizationProcedures, payload);
    console.log("getOrganizationProcedures success==>", response);
    yield (0, _effects.put)((0, _actions.getOrganizationProceduresSuccess)(response.data));
  } catch (error) {
    console.log("getOrganizationProcedures error==>", error);
    yield (0, _effects.put)((0, _actions.getOrganizationProceduresFailure)((0, _error.handleError)(error)));
  }
}
function* organizationNotifyScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_INTERSECT_ORGANIZATIONS_REQUEST, getIntersectOrganizations);
  yield (0, _effects.takeLatest)(_constants.GET_ORGANIZATION_PROCEDURES_REQUEST, getOrganizationProcedures);
}
//# sourceMappingURL=saga.js.map