"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = escortRecordScreenSaga;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var api = _interopRequireWildcard(require("../../../../../api"));
var _actions = require("../../../../../containers/app/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _incidentCodeCore = require("incident-code-core");
var _reactNative = require("react-native");
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _location = require("../../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _constants = require("../../../../../containers/screens/Home/Settings/constants");
var _device = require("../../../../../utils/device");
var _reactNativePushNotification = _interopRequireDefault(require("react-native-push-notification"));
var _actions2 = require("../../../Menu/Tips/MyTipsScreen/actions");
var _types = require("../../../Menu/Tips/MyTipsScreen/types");
var _actions3 = require("./actions");
var _constants2 = require("./constants");
var _selectors = require("./selectors");
var _types2 = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-empty */
/**
 *
 * RecordScreen saga
 *
 */

function* startChat({
  payload
}) {
  try {
    var _payload$id;
    const messages = yield (0, _effects.call)(api.twilio.getMessages, ((_payload$id = payload.id) === null || _payload$id === void 0 ? void 0 : _payload$id.toString()) || '');
    yield (0, _effects.put)((0, _actions3.startChatSuccess)(messages));
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.startChatFailure)((0, _error.handleError)(error)));
  }
}
function* sendMessage({
  payload: {
    incidentEscort,
    location,
    message
  }
}) {
  try {
    var _geocodeResponse$data, _incidentEscort$id;
    const geocodeResponse = yield (0, _effects.call)(api.user.getAddress, location.coords.latitude, location.coords.longitude);
    const address = ((_geocodeResponse$data = geocodeResponse.data.results[0]) === null || _geocodeResponse$data === void 0 ? void 0 : _geocodeResponse$data.formatted_address) || '';
    const geoPoint = yield (0, _effects.call)(_location.convertLocationToGeoPoint, location);
    const messageAttributes = {
      location: geoPoint,
      address
    };
    yield (0, _effects.call)(api.twilio.sendMessage, ((_incidentEscort$id = incidentEscort.id) === null || _incidentEscort$id === void 0 ? void 0 : _incidentEscort$id.toString()) || '', message.text, messageAttributes);
    yield (0, _effects.put)((0, _actions3.sendMessageSuccess)()); // this isn't doing anything
  } catch (error) {
    const parsedError = (0, _error.handleError)(error);
    const errorLog = {
      source: 'Send Message error',
      message: parsedError.message,
      raw: JSON.stringify(error)
    };
    yield (0, _effects.put)((0, _actions.LogErrorToDb)(errorLog));
  }
}
function* imSafe({
  payload
}) {
  //("payload1:" + JSON.stringify(payload));
  try {
    //("URL1:" + api.incidents.updateEscortState)
    //("payload.incidentEscort.id1:" + payload.incidentEscort.id)
    //("State1:" + IncidentEscortState.Safe);
    yield (0, _effects.call)(api.incidents.updateEscortState, payload.incidentEscort.id, {
      state: _incidentCodeCore.IncidentEscortState.Safe,
      comment: payload.comment
    });
    yield (0, _effects.put)((0, _actions3.clearDataAndGoBack)(payload.incidentEscort.id));
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.imSafeFailure)((0, _error.handleError)(error)));
  }
}
function* clearDataAngGoBack({
  payload
}) {
  yield (0, _effects.put)((0, _actions.clearIncidentEscortData)());
  yield (0, _effects.put)((0, _actions3.hideSafeModal)());
  yield (0, _effects.delay)(300);
  const fromPassive = yield (0, _effects.select)((0, _selectors.makeSelectFromPassiveEscort)());
  if (fromPassive && payload) {
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.Countdown, {
      id: payload
    });
  } else {
    yield (0, _effects.put)((0, _actions.clearPassiveEscortData)());
    _reactNativePushNotification.default.cancelAllLocalNotifications();
    _asyncStorage.default.getItem(_constants.SET_BEACON_DETAILS).then(beacons => {
      if (beacons) {
        _asyncStorage.default.getItem(_constants.BEACON_CONNECTED).then(value => {
          if (value !== null) {
            if (JSON.parse(value) === true) {
              if (_device.isAndroid) _reactNative.NativeModules.Bluetooth.cancelAckDevice(JSON.parse(beacons).address);
            }
          }
        });
      }
    });
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Escort.EscortType);
  }
  yield (0, _effects.put)((0, _actions3.imSafeSuccess)());
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
function* delayHidePanicInfo() {
  yield (0, _effects.delay)(4500);
  yield (0, _effects.put)((0, _actions3.hidePanicInfo)());
}
function* enterPanicMode({
  payload
}) {
  //("payload2:" + JSON.stringify(payload));
  try {
    // Vibrates every 5 secs
    yield (0, _effects.call)(_reactNative.Vibration.vibrate, [5000, 800], true);
    yield (0, _effects.call)(api.incidents.updateEscortState, payload.id, {
      state: _incidentCodeCore.IncidentEscortState.Panic
    });
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants2.PANIC_MODE_KEY, _types2.PanicMode.Active);
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.handleErrorFailure)((0, _error.handleError)(error)));
  }
}
function* exitPanicMode({
  payload
}) {
  const fromPassive = yield (0, _effects.select)((0, _selectors.makeSelectFromPassiveEscort)());
  try {
    yield (0, _effects.call)(_reactNative.Vibration.cancel);
    yield (0, _effects.call)(api.incidents.updateEscortState, payload.id, {
      state: _incidentCodeCore.IncidentEscortState.Active
    });
    if (fromPassive && payload.id) {
      yield (0, _effects.call)(api.incidents.updatePassiveEscortLog, {
        id: payload.id,
        action: _incidentCodeCore.PassiveEscortAction.PanicExited
      });
    }
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants2.PANIC_MODE_KEY, _types2.PanicMode.Inactive);
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.handleErrorFailure)((0, _error.handleError)(error)));
  }
}
function* appStateStatusChange({
  payload
}) {
  //("payload4:" + JSON.stringify(payload));
  try {
    const {
      state,
      incidentEscort
    } = payload;
    //("URL4:" + api.incidents.updateEscortState)
    //("payload.incidentEscort.id4:" + payload.incidentEscort.id)
    //("State4:" + state);
    if (state === 'background') {
      yield (0, _effects.call)(api.incidents.updateEscortState, incidentEscort.id, {
        state: _incidentCodeCore.IncidentEscortState.Background
      });
    }
    if (state === 'active') {
      yield (0, _effects.call)(api.incidents.updateEscortState, incidentEscort.id, {
        state: _incidentCodeCore.IncidentEscortState.Active
      });
    }
  } catch (err) {
    yield (0, _effects.put)((0, _actions3.handleErrorFailure)((0, _error.handleError)(err)));
  }
}
function* logRecordToggle({
  payload
}) {
  try {
    if (!payload.id) {
      return;
    }
    const recordType = yield (0, _effects.select)((0, _selectors.makeSelectRecordType)());
    const history = {
      id: payload.id,
      type: _incidentCodeCore.HistoryType.Escort,
      title: `switched media to ${recordType}`
    };
    yield (0, _effects.call)(api.incidents.updateIncidentChatHistory, payload.id, history);
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.handleErrorFailure)((0, _error.handleError)(error)));
  }
}
function* escortRecordScreenSaga() {
  yield (0, _effects.takeLatest)(_constants2.START_CHAT_REQUEST, startChat);
  yield (0, _effects.takeLatest)(_constants2.SEND_MESSAGE_REQUEST, sendMessage);
  yield (0, _effects.takeLatest)(_constants2.IM_SAFE_REQUEST, imSafe);
  yield (0, _effects.takeLatest)(_constants2.SHOW_PANIC_INFO, delayHidePanicInfo);
  yield (0, _effects.takeLatest)(_constants2.ENTER_PANIC_MODE, enterPanicMode);
  yield (0, _effects.takeLatest)(_constants2.EXIT_PANIC_MODE, exitPanicMode);
  yield (0, _effects.takeLatest)(_constants2.APP_STATE_STATUS_CHANGE, appStateStatusChange);
  yield (0, _effects.takeLatest)(_constants2.CLEAR_DATA_AND_GO_BACK, clearDataAngGoBack);
  yield (0, _effects.takeLatest)(_constants2.TOGGLE_RECORD_TYPE, logRecordToggle);
}
//# sourceMappingURL=saga.js.map