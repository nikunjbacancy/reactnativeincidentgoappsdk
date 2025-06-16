"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = appSaga;
exports.getConfigs = getConfigs;
exports.getProfile = getProfile;
exports.getTwilioAccessToken = getTwilioAccessToken;
exports.logErrorToDB = logErrorToDB;
exports.saveToken = saveToken;
exports.saveUserPhone = saveUserPhone;
exports.triggerOnboardForInactiveUser = triggerOnboardForInactiveUser;
exports.updateProfile = updateProfile;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var api = _interopRequireWildcard(require("../../api"));
var _constants = require("../../api/twilio/constants");
var _constants2 = require("../../containers/screens/Onboarding/SignInCodeScreen/constants");
var _constants3 = require("../../containers/screens/Onboarding/PromocodeScreen/constants");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _sdkConfigs = require("../../sdkConfigs");
var _reactNativeInAppMessage = require("react-native-in-app-message");
var _effects = require("redux-saga/effects");
var _store = require("../../store");
var _device = require("../../utils/device");
var _error = require("../../utils/error");
var _firebase = require("../../utils/firebase");
var _navigation = _interopRequireDefault(require("../../utils/navigation"));
var _actions = require("../providers/NotificationProvider/actions");
var _screens = _interopRequireDefault(require("../providers/RoutesProvider/screens"));
var _constants4 = require("../screens/Onboarding/UpdateNameScreen/constants");
var _actions2 = require("./actions");
var _constants5 = require("./constants");
var _selectors = require("./selectors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable @typescript-eslint/camelcase */
/**
 *
 * App saga
 *
 */

const checkExpiresIn = token => {
  if (!token.expires_in) return token;
  return {
    ...token,
    expires_at: Date.now() + token.expires_in * 1000
  };
};
function* saveToken({
  payload
}) {
  console.log("Save Token -->", payload);
  const token = checkExpiresIn(payload);
  console.log("Token -->", token);
  yield (0, _effects.call)(_asyncStorage.default.setItem, _constants5.TOKEN_KEY, JSON.stringify(token));
}
function* saveUserPhone({
  payload
}) {
  if (payload.phone) {
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants5.USER_PHONE_KEY, payload.phone);
  }
}
function* getConfigs() {
  try {
    const response = yield (0, _effects.call)(api.configs.getConfigs);
    // console.log("configs response=>",response)
    const remoteLogger = response.data.remoteLogger || '';
    yield (0, _effects.call)(_asyncStorage.default.setItem, _constants5.REMOTE_LOGGER_KEY, JSON.stringify(remoteLogger));
    // console.log("configs response=>",response)
    yield (0, _effects.put)((0, _actions2.getConfigsSuccess)(response.data));
    // console.log("user configs ===>",JSON.stringify(response.data))
    api.logger.debug('App Config', 'Get Success', response.data);
  } catch (error) {
    // console.log("configs response error=>",error)
    api.logger.warn('App Config', 'Get Failed', error);
    yield (0, _effects.put)((0, _actions2.getConfigsFailure)((0, _error.handleError)(error)));
  }
}
function* triggerOnboardForInactiveUser() {
  const active = yield (0, _effects.select)(state => {
    const {
      incidentPassiveEscortData,
      incidentEscortData,
      nextOnboardingScreen
    } = state.app;
    return !!incidentEscortData || !!incidentPassiveEscortData || nextOnboardingScreen !== 'Home';
  });
  if (!active) {
    yield (0, _effects.call)(() => _store.persistor.purge());
    yield (0, _effects.put)({
      type: 'USER_DELETED'
    });
    yield (0, _effects.put)((0, _actions2.getConfigsRequest)());
    yield (0, _effects.put)((0, _actions2.getTwilioAccessTokenRequest)());
    return true;
  }
  return false;
}
function* getProfile() {
  // console.log("get profile api call=>")
  try {
    const response = yield (0, _effects.call)(api.user.getProfile);
    // console.log("🚀 ~ file: saga.ts ~ line 119 ~ function*getProfile ~ response", JSON.stringify(response));
    const {
      isDeleted
    } = response.data;
    if (isDeleted) {
      if (!(yield* triggerOnboardForInactiveUser())) {
        yield (0, _effects.put)((0, _actions2.getProfileSuccess)(response.data));
        const userId = response.data.id;
        const topic = `${_sdkConfigs.sdkConfigs.configs.sdkStage}_user_${userId}`;
        _asyncStorage.default.setItem('userId', userId);
        _asyncStorage.default.setItem('userData', JSON.stringify(response.data));
        yield (0, _effects.call)(_firebase.setUserId, userId);
        yield (0, _effects.call)(_firebase.subscribeToTopic, topic);
        // console.log("user configs ===>",JSON.stringify(response.data))
        api.logger.debug('User Profile', 'Get Success', response.data);
        yield (0, _effects.call)(_firebase.setupFirebaseMessage);
        yield (0, _effects.spawn)(setupAndWatchIOSForegroundNotifications);
        console.log("getAllgeofene request : DELETED BLOCK");
        // yield put(getAllGeofenceRequest(userId));
        // yield call(initBackgroundGeolocationService);
      }
    } else {
      yield (0, _effects.put)((0, _actions2.getProfileSuccess)(response.data));
      const userId = response.data.id;
      const topic = `${_sdkConfigs.sdkConfigs.configs.sdkStage}_user_${userId}`;
      // console.log("topic=======***>",topic)
      _asyncStorage.default.setItem('userId', userId);
      _asyncStorage.default.setItem('userData', JSON.stringify(response.data));
      yield (0, _effects.call)(_firebase.setUserId, userId);
      yield (0, _effects.call)(_firebase.subscribeToTopic, topic);
      // console.log("user configs ===>",JSON.stringify(response.data))
      api.logger.debug('User Profile', 'Get Success', response.data);
      yield (0, _effects.call)(_firebase.setupFirebaseMessage);
      yield (0, _effects.spawn)(setupAndWatchIOSForegroundNotifications);
      // console.log("getAllgeofene request : SUCCESS BLOCK")
      // yield put(getAllGeofenceRequest(userId));

      // yield call(initBackgroundGeolocationService);
    }
  } catch (error) {
    console.log("get profile api call error=>", error);
    api.logger.warn('User Profile', 'Get Failed', error);
    yield (0, _effects.put)((0, _actions2.getProfileFailure)((0, _error.handleError)(error)));
  }
}
function* updateProfile() {
  // console.log("get profile api call=>")
  try {
    const response = yield (0, _effects.call)(api.user.getProfile);
    // console.log("🚀 ~ file: saga.ts ~ line 119 ~ function*getProfile ~ response", JSON.stringify(response));
    const {
      isDeleted
    } = response.data;
    if (isDeleted) {
      if (!(yield* triggerOnboardForInactiveUser())) {
        yield (0, _effects.put)((0, _actions2.getProfileSuccess)(response.data));
      }
    } else {
      yield (0, _effects.put)((0, _actions2.getProfileSuccess)(response.data));
    }
  } catch (error) {
    console.log("get profile api call error=>", error);
    api.logger.warn('User Profile', 'Get Failed', error);
    yield (0, _effects.put)((0, _actions2.getProfileFailure)((0, _error.handleError)(error)));
  }
}
function* setupAndWatchIOSForegroundNotifications() {
  while (true) {
    const iosForegroundNotification = yield (0, _effects.call)(_firebase.setupNotifications);
    if (iosForegroundNotification) {
      var _iosForegroundNotific, _iosForegroundNotific2, _iosForegroundNotific3;
      yield (0, _effects.put)((0, _actions.showIOSForegroundNotification)({
        title: (_iosForegroundNotific = iosForegroundNotification.message) === null || _iosForegroundNotific === void 0 ? void 0 : _iosForegroundNotific.title,
        message: (_iosForegroundNotific2 = iosForegroundNotification.message) === null || _iosForegroundNotific2 === void 0 ? void 0 : _iosForegroundNotific2.body,
        action: (_iosForegroundNotific3 = iosForegroundNotification.data) !== null && _iosForegroundNotific3 !== void 0 && _iosForegroundNotific3.link ? _noop.default : () => {
          var _iosForegroundNotific4;
          _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
            incident: {
              id: (_iosForegroundNotific4 = iosForegroundNotification.data) === null || _iosForegroundNotific4 === void 0 ? void 0 : _iosForegroundNotific4.incidentId
            },
            showChat: true
          });
          _reactNativeInAppMessage.Notification.hide();
        }
      }));
      _reactNativeInAppMessage.Notification.show();
    }
  }
}
function* setAccessTokenFromStorage() {
  return yield (0, _effects.call)(JSON.parse, yield (0, _effects.call)(_asyncStorage.default.getItem, _constants.KeyTwilioAccessToken));
}
function* setAccessTokenFromApi() {
  const token = yield (0, _effects.call)(api.twilio.getToken);
  return saveAccessToken(token);
}
function* saveAccessToken(token) {
  const tokenWithExpire = !token.expires_at ? {
    ...token,
    expires_at: Date.now() + (token.expires_in || 1) * 1000 - _constants.ExpireOffset
  } : token;
  yield (0, _effects.call)(_asyncStorage.default.setItem, _constants.KeyTwilioAccessToken, JSON.stringify(tokenWithExpire));
  return tokenWithExpire;
}
function* getTwilioAccessToken() {
  const twilioInitialized = yield (0, _effects.select)((0, _selectors.makeSelectTwilioInitialized)());
  try {
    const token = yield twilioInitialized ? yield (0, _effects.call)(setAccessTokenFromStorage) : yield (0, _effects.call)(setAccessTokenFromApi);
    yield (0, _effects.call)(api.twilio.init, token);
    yield (0, _effects.put)((0, _actions2.getTwilioAccessTokenSuccess)(token));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getTwilioAccessTokenFailure)((0, _error.handleError)(error)));
  }
}
function* logErrorToDB({
  payload
}) {
  const user = yield (0, _effects.select)((0, _selectors.makeSelectUser)());
  try {
    const error = {
      source: payload.source,
      message: payload.message,
      device: (0, _device.getInfo)(),
      user,
      raw: JSON.stringify(payload.raw)
    };
    yield (0, _effects.call)(api.logger.logError, error);
  } catch (error) {
    const newError = {
      source: 'logErrorToDB',
      message: error.message,
      device: (0, _device.getInfo)(),
      user,
      raw: JSON.stringify(error)
    };
    yield (0, _effects.call)(api.logger.logError, newError);
  }
}
function* appSaga() {
  yield (0, _effects.takeLatest)(_constants2.LOGIN_SUCCESS, saveToken);
  yield (0, _effects.takeLatest)(_constants3.REGISTER_USER_SUCCESS, saveToken);
  yield (0, _effects.takeLatest)(_constants4.UPDATE_NAME_SUCCESS, saveUserPhone);
  yield (0, _effects.takeLatest)(_constants5.GET_PROFILE_REQUEST, getProfile);
  yield (0, _effects.takeLatest)(_constants5.UPDATE_PROFILE_REQUEST, updateProfile);
  yield (0, _effects.takeLatest)(_constants5.GET_CONFIGS_REQUEST, getConfigs);
  yield (0, _effects.takeLatest)(_constants5.GET_TWILIO_ACCESS_TOKEN_REQUEST, getTwilioAccessToken);
  yield (0, _effects.takeLatest)(_constants5.LOG_ERROR, logErrorToDB);
}
//# sourceMappingURL=saga.js.map