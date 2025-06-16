"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = selectOrganizationScreenSaga;
exports.getOrganizations = getOrganizations;
exports.updateOrganizations = updateOrganizations;
var api = _interopRequireWildcard(require("../../../../api"));
var _selectors = require("../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _actions = require("../../../../containers/screens/Menu/OrganizationScreen/actions");
var _includes = _interopRequireDefault(require("lodash/includes"));
var _map = _interopRequireDefault(require("lodash/map"));
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
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

function* getOrganizations({
  payload
}) {
  try {
    const response = yield (0, _effects.call)(api.organizations.getOrganizations, payload);
    const user = yield (0, _effects.select)((0, _selectors.makeSelectUser)());
    const organizations = (0, _map.default)(response.data.data, organization => ({
      ...organization,
      isSelected: (0, _includes.default)(user.organizations, organization.id)
    }));
    yield (0, _effects.put)((0, _actions2.getOrganizationsSuccess)(organizations));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* updateOrganizations({
  payload
}) {
  try {
    const organizationIds = (0, _map.default)(payload.data, 'id');
    yield (0, _effects.call)(api.user.updateOrganizations, organizationIds);
    yield (0, _effects.put)((0, _actions2.updateOrganizationsSuccess)({
      data: organizationIds,
      fromMenu: payload.fromMenu
    }));
    if (payload.fromMenu) {
      yield (0, _effects.put)((0, _actions.getUserOrganizationsRequest)());
      return yield (0, _effects.call)(_navigation.default.back);
    }
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.Permission);
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.updateOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* selectOrganizationScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_ORGANIZATIONS_REQUEST, getOrganizations);
  yield (0, _effects.takeLatest)(_constants.UPDATE_ORGANIZATIONS_REQUEST, updateOrganizations);
}
//# sourceMappingURL=saga.js.map