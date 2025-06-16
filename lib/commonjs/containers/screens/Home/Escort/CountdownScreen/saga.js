"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = countdownScreenSaga;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var api = _interopRequireWildcard(require("../../../../../api"));
var _actions = require("../../../../../containers/app/actions");
var _selectors = require("../../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _incidentCodeCore = require("incident-code-core");
var _moment = _interopRequireDefault(require("moment"));
var _reactNative = require("react-native");
var _effects = require("redux-saga/effects");
var _location = require("../../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _actions2 = require("../../../Menu/Tips/MyTipsScreen/actions");
var _types = require("../../../Menu/Tips/MyTipsScreen/types");
var _types2 = require("../EscortTypeScreen/types");
var _constants = require("../RecordScreen/constants");
var _actions3 = require("../TimedEscortScreen/actions");
var _actions4 = require("./actions");
var _constants2 = require("./constants");
var _selectors2 = require("./selectors");
var _types3 = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * CountdownScreen saga
 *
 */

function* getProcedureById({
  payload
}) {
  try {
    if (!payload) {
      const passiveData = yield (0, _effects.select)((0, _selectors.makeSelectPassiveEscortData)());
      if (passiveData.id) {
        const response = yield (0, _effects.call)(api.incidents.getPassiveEscort, passiveData.id);
        const procedure = response.data.procedure;
        yield (0, _effects.put)((0, _actions4.getProcedureSuccess)(procedure));
      } else {
        const error = new Error('Unable to retrieve procedure');
        yield (0, _effects.put)((0, _actions4.getProcedureFailure)(error));
      }
    } else {
      const response = yield (0, _effects.call)(api.procedures.getProcedure, payload);
      yield (0, _effects.put)((0, _actions4.getProcedureSuccess)(response.data));
    }
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.getProcedureFailure)(error));
  }
}
const calculateTimer = ({
  hours,
  minutes,
  seconds
}) => {
  return (+hours * 60 + +minutes) * 60 + +seconds;
};
function* updateTimer({
  payload
}) {
  const time = calculateTimer(payload);
  if (time < 60) {
    const error = new Error('Countdown timer must be set to at least a minute');
    yield (0, _effects.put)((0, _actions4.setTimerFailure)(error));
  } else {
    yield (0, _effects.put)((0, _actions4.setTimerSuccess)(time));
  }
}
function* delayHidePanicInfo() {
  yield (0, _effects.delay)(4500);
  yield (0, _effects.put)((0, _actions4.hidePanicInfo)());
}
function* enterPanicMode({
  payload
}) {
  // Vibrates every 5 secs
  yield (0, _effects.call)(_reactNative.Vibration.vibrate, [5000, 800], true);
  const incident = yield (0, _effects.select)((0, _selectors2.makeSelectIncident)());
  console.log("enterPanicMode incident===>", incident);
  const organization = payload;
  try {
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants.PANIC_MODE_KEY, _types3.PanicMode.Active);
    yield (0, _effects.call)(api.incidents.passiveToPanicEscort, incident);
    yield (0, _effects.call)(alertOrganization, incident, organization);
    yield (0, _effects.call)(startChat, incident, organization);
    yield (0, _effects.call)(checkIncidentStartCompletion, incident, organization);
    yield (0, _effects.put)((0, _actions4.enterPanicModeSuccess)());
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.enterPanicModeFailure)(error));
  }
}
function* imSafe({
  payload
}) {
  const incident = yield (0, _effects.select)((0, _selectors2.makeSelectIncident)());
  try {
    yield (0, _effects.call)(api.incidents.updatePassiveEscortState, incident.id, {
      state: _incidentCodeCore.IncidentEscortState.Safe,
      comment: payload.comment
    });
    yield (0, _effects.call)(clearDataAndGoBack);
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.imSafeFailure)(error));
  }
}
function* clearDataAndGoBack() {
  yield (0, _effects.put)((0, _actions.clearIncidentEscortData)());
  yield (0, _effects.put)((0, _actions.clearPassiveEscortData)());
  yield (0, _effects.put)((0, _actions3.clearSelections)());
  yield (0, _effects.put)((0, _actions4.hideSafeModal)());
  yield (0, _effects.delay)(300);
  yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.EscortType);
  yield (0, _effects.put)((0, _actions4.imSafeSuccess)());
  yield (0, _effects.delay)(2000);
  yield (0, _effects.put)((0, _actions2.resetState)());
  yield (0, _effects.put)((0, _actions2.getTipsRequest)({
    tipStatus: _types.TipStatus.Active,
    paging: false
  }));
  yield (0, _effects.put)((0, _actions2.getTipsRequest)({
    tipStatus: _types.TipStatus.Closed,
    paging: false
  }));
}
function* startCountdownWarning() {
  // Vibrates every 5 secs
  console.log("phont vibrate");
  yield (0, _effects.call)(_reactNative.Vibration.vibrate, [5000, 800], true);
}
function* clearCountdownWarning() {
  yield (0, _effects.call)(_reactNative.Vibration.cancel);
}
function* createPassiveEscort({
  payload
}) {
  const {
    organization
  } = payload;
  const {
    id
  } = payload;
  const {
    safetyTimer
  } = payload;
  const procedure = yield (0, _effects.select)((0, _selectors2.makeSelectProcedure)());
  let incident;
  try {
    if (id) {
      console.log("createPassiveEscort 1 ===>", id);
      const response = yield (0, _effects.call)(api.incidents.getIncident, id);
      incident = response.data;
    } else {
      const geoPoint = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
      let orgAreaId;
      if (organization.id) {
        const areaResp = yield (0, _effects.call)(api.organizations.findOrganizationArea, organization.id, geoPoint);
        orgAreaId = areaResp.data.id;
      }
      const request = {
        location: geoPoint,
        organization: organization.id,
        organizationArea: orgAreaId,
        procedure: procedure.id === _types2.EscortType.Safety ? null : procedure.id
      };
      // console.log("IncidentPassiveEscortRequest ===>",JSON.stringify(request))
      const response = yield (0, _effects.call)(api.incidents.createPassiveEscort, request);
      // console.log("createPassiveEscort 2 ===>",JSON.stringify(response.data))
      incident = response.data;
      // console.log("createPassiveEscort 3 ===>",JSON.stringify(incident))
    }
    yield (0, _effects.put)((0, _actions.setPassiveEscortData)({
      id: incident.id,
      procedure,
      isSafetyTimer: safetyTimer
    }));
    yield (0, _effects.put)((0, _actions4.startPassiveEscortSuccess)(incident));
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.startPassiveEscortFailure)(error));
  }
}
function* logPassiveEscortAction({
  payload
}) {
  try {
    yield (0, _effects.call)(api.incidents.updatePassiveEscortLog, payload);
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.logPassiveEscortActionFailure)(error));
  }
}
function* startVirtualEscortConnection({
  payload
}) {
  try {
    const organization = payload;
    const incident = yield (0, _effects.select)((0, _selectors2.makeSelectIncident)());
    // console.log("startVirtualEscortConnection organization ==>",JSON.stringify(organization))
    // console.log("startVirtualEscortConnection incident ==>",JSON.stringify(incident))
    yield (0, _effects.call)(api.incidents.passiveToActiveEscort, incident);
    yield (0, _effects.call)(alertOrganization, incident, organization);
    yield (0, _effects.call)(startChat, incident, organization);
    yield (0, _effects.call)(checkIncidentStartCompletion, incident, organization);
  } catch (error) {
    yield (0, _effects.put)((0, _actions4.startPassiveEscortFailure)(error));
  }
}
function* checkIncidentStartCompletion(incident, organization) {
  const start = (0, _moment.default)();
  while ((0, _moment.default)().diff(start, 'minute') <= 5) {
    try {
      const response = yield (0, _effects.call)(api.incidents.getEscort, incident.id);
      // console.log("incident ===>",JSON.stringify(incident))
      // console.log("checkIncidentStartCompletion ===>",JSON.stringify(response))
      // if (response.data.state === IncidentEscortState.Active) {
      const incidentEscortData = {
        incidentEscort: response.data,
        organization,
        fromPassive: true
      };
      // console.log("incidentEscortData ===>",JSON.stringify(incidentEscortData))
      yield (0, _effects.put)((0, _actions.setIncidentEscortData)(incidentEscortData));
      yield (0, _effects.call)(clearCountdownWarning);
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.Record, incidentEscortData);
      yield (0, _effects.put)((0, _actions4.startVirtualEscortSuccess)());
      api.logger.debug('Countdown CheckVideoUpload', 'Success', response.data);
      return;
      // }
    } catch (error) {
      api.logger.warn('Countdown CheckVideoUpload', 'Failed', error);
    } finally {
      yield (0, _effects.delay)(5000);
    }
  }
  yield (0, _effects.put)((0, _actions4.startVirtualEscortFailure)(new Error('We´re sorry, no security personnel are available now. If this is an emergency, please either contact your organization directly or call 911.')));
  yield (0, _effects.call)(clearCountdownWarning);
  yield (0, _effects.call)(_asyncStorage.default.setItem, _constants.PANIC_MODE_KEY, _types3.PanicMode.Inactive);
}
function* alertOrganization(incident, organization) {
  const incidentActionRequest = {
    id: incident.id,
    action: _incidentCodeCore.IncidentAction.AlertOrganization,
    args: {
      organization: organization.id
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
function* countdownScreenSaga() {
  yield (0, _effects.takeLatest)(_constants2.GET_PROCEDURE_REQUEST, getProcedureById);
  yield (0, _effects.takeLatest)(_constants2.SET_TIMER_VALUE_REQUEST, updateTimer);
  yield (0, _effects.takeLatest)(_constants2.SHOW_PANIC_INFO, delayHidePanicInfo);
  yield (0, _effects.takeLatest)(_constants2.ENTER_PANIC_MODE, enterPanicMode);
  yield (0, _effects.takeLatest)(_constants2.IM_SAFE_REQUEST, imSafe);
  yield (0, _effects.takeLatest)(_constants2.TRIGGER_COUNTDOWN_WARNING, startCountdownWarning);
  yield (0, _effects.takeLatest)(_constants2.CANCEL_COUNTDOWN_WARNING, clearCountdownWarning);
  yield (0, _effects.takeLatest)(_constants2.START_PASSIVE_ESCORT_REQUEST, createPassiveEscort);
  yield (0, _effects.takeLatest)(_constants2.START_VIRTUAL_ESCORT_REQUEST, startVirtualEscortConnection);
  yield (0, _effects.takeLatest)(_constants2.LOG_ESCORT_ACTION_REQUEST, logPassiveEscortAction);
}
//# sourceMappingURL=saga.js.map