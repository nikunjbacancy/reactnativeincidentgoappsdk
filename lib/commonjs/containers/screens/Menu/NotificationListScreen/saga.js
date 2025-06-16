"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notificationListScreenSaga;
exports.getNotificationList = getNotificationList;
exports.readAllNotification = readAllNotification;
exports.updateReadUnreadStatus = updateReadUnreadStatus;
var api = _interopRequireWildcard(require("../../../../api"));
var _effects = require("redux-saga/effects");
var _actions = require("./actions");
var _constants = require("./constants");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * NotificationScreen saga
 *
 */

function* getNotificationList({
  payload
}) {
  try {
    console.log("getNotificationList request===>", payload);
    const response = yield (0, _effects.call)(api.user.getNotificationList, payload);
    // console.log("notification list response ===>",JSON.stringify(response))
    yield (0, _effects.put)((0, _actions.notificationListSuccess)(response.data));
  } catch (error) {
    _reactNativeRootToast.default.show(error.message, {
      position: _reactNativeRootToast.default.positions.CENTER,
      duration: 3000
    });
    yield (0, _effects.put)((0, _actions.notificationListFailure)(error));
  }
}
function* readAllNotification({
  payload
}) {
  try {
    console.log("readall payload=>", payload);
    const response = yield (0, _effects.call)(api.user.readAllNotification, payload);
    // console.log("readAllNotification response ===>",JSON.stringify(response))
    yield (0, _effects.put)((0, _actions.readAllNotificationSuccess)(response.data));
  } catch (error) {
    _reactNativeRootToast.default.show(error.message, {
      position: _reactNativeRootToast.default.positions.CENTER,
      duration: 3000
    });
    yield (0, _effects.put)((0, _actions.readAllNotificationStatusFailure)(error));
  }
}
function* updateReadUnreadStatus({
  payload
}) {
  try {
    let isReadUnreadFrom = payload.readFrom;
    delete payload.readFrom;
    let response = yield (0, _effects.call)(api.user.updateReadUnreadNotificationStatus, payload);
    const updatedResponse = {
      ...response.data,
      isReadFrom: isReadUnreadFrom
    };
    // console.log('*****update Read Unread Status API call successful:',JSON.stringify(updatedResponse));
    yield (0, _effects.put)((0, _actions.notificationReadUnreadStatusSuccess)(updatedResponse));
  } catch (error) {
    // console.log("updateReadUnreadStatus error===>",error)
    yield (0, _effects.put)((0, _actions.notificationReadUnreadStatusFailure)(error));
  }
}
function* notificationListScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.NOTIFICATION_LIST_REQUEST, getNotificationList);
  yield (0, _effects.takeLatest)(_constants.UPDATE_READUNREAD_STATUS_REQUEST, updateReadUnreadStatus);
  yield (0, _effects.takeLatest)(_constants.READ_ALL_NOTIFICATION_REQUEST, readAllNotification);
}
//# sourceMappingURL=saga.js.map