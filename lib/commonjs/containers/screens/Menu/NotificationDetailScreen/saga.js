"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notificationScreenSaga;
exports.toggleUserNotification = toggleUserNotification;
var api = _interopRequireWildcard(require("api"));
var _incidentCodeCore = require("incident-code-core");
var _effects = require("redux-saga/effects");
var _actions = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * NotificationScreen saga
 *
 */

// import Toast from 'react-native-root-toast';

function* toggleUserNotification({
  payload
}) {
  console.log("api.user.setSetting,:" + api.user.setSetting);
  console.log("UserSettingKey.NotificationEnabled,:" + _incidentCodeCore.UserSettingKey.NotificationEnabled);
  console.log("payload:" + payload);
  try {
    yield (0, _effects.call)(api.user.setSetting, _incidentCodeCore.UserSettingKey.NotificationEnabled, payload);
    yield (0, _effects.put)((0, _actions.toggleUserNotificationSuccess)(payload));
  } catch (error) {
    yield (0, _effects.put)((0, _actions.toggleUserNotificationFailure)(error));
  }
}

// export function* accountDelete({
//   payload,
// }: DeleteUserRequest) {
//   // console.log("payload:" + payload);
//   try {
//     // console.log("payload 2:" + payload);
//     const response = yield call(api.user.accountDelete, payload);
//     yield put(deleteUserSucess(response.data));
//   } catch (error) {
//     Toast.show(error.message, {
//       position: Toast.positions.CENTER,
//       duration: 3000
//     });
//     yield put(deleteUserFailure(handleError(error)));
//   }
// }

function* notificationScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.TOGGLE_USER_NOTIFICATION_REQUEST, toggleUserNotification);
  // yield takeLatest(DELETE_USER_REQUEST, accountDelete);
}
//# sourceMappingURL=saga.js.map