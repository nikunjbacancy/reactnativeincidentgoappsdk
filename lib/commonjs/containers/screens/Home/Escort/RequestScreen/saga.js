"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = organizationNotifyScreenSaga;
var api = _interopRequireWildcard(require("../../../../../api"));
var _actions = require("../../../../../containers/app/actions");
var _actions2 = require("../../../../../containers/providers/RoutesProvider/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _incidentCodeCore = require("incident-code-core");
var _moment = _interopRequireDefault(require("moment"));
var _effects = require("redux-saga/effects");
var _location = require("../../../../../utils/location");
var _backgroundGeolocation = require("../../../../../utils/location/backgroundGeolocation");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _device = require("../../../../../utils/device");
var _selectors = require("../SelectOrganizationScreen/selectors");
var _actions3 = require("./actions");
var _constants = require("./constants");
var _selectors2 = require("./selectors");
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function* startEscortSync(action) {
  console.log("startEscortSync===>", action);
  const startEscortTask = yield (0, _effects.fork)(startEscort, action);
  yield (0, _effects.take)(_constants.CANCEL_ESCORT_REQUEST);
  yield (0, _effects.fork)(cancelEscort);
  yield (0, _effects.cancel)(startEscortTask);
  yield (0, _effects.put)((0, _actions2.removeScreenAction)());
}
function* startEscort({
  payload
}) {
  // make param?
  const selectedOrganization = yield (0, _effects.select)((0, _selectors.makeSelectSelectedOrganization)());
  try {
    const geoPoint = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
    const request = {
      location: geoPoint,
      organization: selectedOrganization.id,
      organizationArea: selectedOrganization.area,
      comment: payload.comment,
      isPanic: payload.isPanic
    };
    const response = yield (0, _effects.call)(api.incidents.startEscort, request);
    yield (0, _effects.put)((0, _actions3.addPendingEscort)(response.data));
    yield (0, _effects.call)(alertOrganization, response.data, selectedOrganization);
    yield (0, _effects.call)(startChat, response.data, selectedOrganization);
    console.log("================================Request screen saga startBackgroundGeolocationToEscort================================");
    yield (0, _effects.call)(_backgroundGeolocation.startBackgroundGeolocationToEscort, response.data.id, payload.onLocation);
    yield (0, _effects.call)(checkIncidentStartCompletion, response.data, selectedOrganization);
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.startEscortFailure)(error));
  }
}
function* alertOrganization(incident, organization) {
  const incidentActionRequest = {
    id: incident.id,
    action: _incidentCodeCore.IncidentAction.AlertOrganization,
    args: {
      organization: organization.id,
      organizationArea: organization.area
    }
  };
  yield (0, _effects.call)(api.incidents.doIncidentAction, incidentActionRequest);
}
function* startChat(incident, organization) {
  const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
  yield (0, _effects.call)(api.incidents.startChat, {
    incident: incident.id,
    organization: organization.id,
    location
  });
}
function* checkIncidentStartCompletion(incident, organization) {
  const start = (0, _moment.default)();
  while ((0, _moment.default)().diff(start, 'minutes') <= 5) {
    try {
      const response = yield (0, _effects.call)(api.incidents.getEscort, incident.id);
      // if (response.data.state === IncidentEscortState.Active) {
      if (_device.isAndroid) {
        _reactNative.NativeModules.Bluetooth.awakeLockScreen();
      }
      const incidentEscortData = {
        incidentEscort: response.data,
        organization
      };
      yield (0, _effects.put)((0, _actions.setIncidentEscortData)(incidentEscortData));
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.Record, incidentEscortData);
      yield (0, _effects.put)((0, _actions3.startEscortSuccess)());
      yield (0, _effects.put)((0, _actions3.hideCancelEscortModal)());
      yield (0, _effects.put)((0, _actions2.removeScreenAction)());
      api.logger.debug('Request screen CheckVideoUpload', 'Success', response.data);
      return;
      // }
    } catch (error) {
      api.logger.warn('Request screen CheckVideoUpload', 'Failed', error);
    }
    // finally {
    //   yield delay(5000);
    // }
  }
  yield (0, _effects.put)((0, _actions3.hideCancelEscortModal)());
  yield (0, _effects.put)((0, _actions2.removeScreenAction)());
  yield (0, _effects.put)((0, _actions3.startEscortFailure)(new Error('We´re sorry, no security personnel are available now. Please either select a different organization or try again later.')));
}
function* cancelEscort() {
  console.log("Cancel Escort");
  try {
    const incident = yield (0, _effects.select)((0, _selectors2.makeSelectPendingEscort)());
    yield (0, _effects.call)(api.incidents.updateEscortState, incident.id, {
      state: _incidentCodeCore.IncidentEscortState.Canceled
    });
    yield (0, _effects.put)((0, _actions3.cancelEscortSuccess)());
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.cancelEscortFailure)(error));
  }
}
function* navToEscortType() {
  yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.EscortType);
}
function* organizationNotifyScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.START_ESCORT_REQUEST, startEscortSync);
  yield (0, _effects.takeLatest)(_constants.CANCEL_ESCORT_SUCCESS, navToEscortType);
}
//# sourceMappingURL=saga.js.map