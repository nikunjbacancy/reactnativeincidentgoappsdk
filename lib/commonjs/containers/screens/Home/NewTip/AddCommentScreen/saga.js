"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addCommentScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _selectors = require("../../../../../containers/app/selectors");
var _actions = require("../../../../../containers/providers/RoutesProvider/actions");
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _location = require("../../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions2 = require("../VideoRecordScreen/actions");
var _types = require("../VideoRecordScreen/types");
var _actions3 = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * AddCommentScreen saga
 *
 */

function* createTip({
  payload
}) {
  yield (0, _effects.put)((0, _actions3.addComment)(payload.comment));
  const incidentActionRequest = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncidentActionRequest)());
  const organization = yield (0, _effects.select)((0, _selectors.makeSelectNewTipOrganization)());
  try {
    yield (0, _effects.call)(api.incidents.doIncidentAction, incidentActionRequest);
    yield (0, _effects.put)((0, _actions2.deleteIncidentSuccess)());
    yield (0, _effects.put)((0, _actions.removeScreenAction)());
    const response = yield (0, _effects.call)(api.incidents.getIncident, incidentActionRequest.id);
    const incident = response.data;
    if (!incident.hasChat && payload.createTipMode === _types.CreateTipMode.Chat) {
      const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
      yield (0, _effects.call)(api.incidents.startChat, {
        incident: incident.id,
        organization: organization.id,
        category: incident.category,
        comment: incident.comment,
        location
      });
      incident.hasChat = true;
    }
    yield (0, _effects.put)((0, _actions3.createTipSuccess)());
    yield (0, _effects.put)((0, _actions2.showTipCreatedModal)({
      incident,
      organizationName: organization.name
    }));
    yield (0, _effects.call)(_navigation.default.popToTop);
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.createTipFailure)((0, _error.handleError)(error)));
  }
}
function* addCommentScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.CREATE_TIP_REQUEST, createTip);
}
//# sourceMappingURL=saga.js.map