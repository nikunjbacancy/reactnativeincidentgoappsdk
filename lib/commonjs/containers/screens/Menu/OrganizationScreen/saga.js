"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizationScreenSaga;
exports.deleteUserOrganization = deleteUserOrganization;
exports.getUserOrganizations = getUserOrganizations;
var api = _interopRequireWildcard(require("../../../../api"));
var _map = _interopRequireDefault(require("lodash/map"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _actions = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * OrganizationScreen saga
 *
 */

function* getUserOrganizations() {
  try {
    const response = yield (0, _effects.call)(api.organizations.getUserOrganizations);
    yield (0, _effects.put)((0, _actions.getUserOrganizationsSuccess)(response.data));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.getUserOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* deleteUserOrganization({
  payload
}) {
  try {
    const organizationIds = (0, _map.default)(payload, 'id');
    yield (0, _effects.call)(api.user.updateOrganizations, organizationIds);
    yield (0, _effects.put)((0, _actions.deleteUserOrganizationSuccess)(payload));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.deleteUserOrganizationFailure)((0, _error.handleError)(error)));
  }
}
function* organizationScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
  yield (0, _effects.takeLatest)(_constants.DELETE_USER_ORGANIZATION_REQUEST, deleteUserOrganization);
}
//# sourceMappingURL=saga.js.map