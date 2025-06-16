"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = permissionScreenSaga;
exports.requestAllPermissionsSaga = requestAllPermissionsSaga;
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _effects = require("redux-saga/effects");
var _reactNativePermissions = require("react-native-permissions");
var _device = require("../../../../utils/device");
var _location = require("../../../../utils/location");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _permission = require("../../../../utils/permission");
var _actions = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * PermissionScreen saga
 *
 */

function* showMessageAndOpenPermissionConfigScreen(message) {
  yield (0, _effects.call)(_permission.showOpenConfigMessage, message);
  yield (0, _effects.call)(_reactNativePermissions.openSettings);
}
function* requestAllPermissionsSaga({
  payload
}) {
  try {
    yield (0, _effects.call)(_permission.checkBlockedPermission);
    yield (0, _effects.call)(_permission.requestAllPermissions);
    yield (0, _effects.call)(goToNextScreen);
  } catch (error) {
    yield (0, _effects.call)(showMessageAndOpenPermissionConfigScreen, payload);
    yield (0, _effects.call)(goToNextScreen);

    // yield put(getAllGeofenceRequest("123"))
  }
}
function* goToNextScreen() {
  if (_device.isAndroid) {
    yield (0, _effects.put)((0, _actions.allPermissionsSuccess)());
    const isActive = yield (0, _effects.call)(_location.checkGPSStatus);
    const nextScreen = isActive ? _screens.default.Onboarding.PermissionLocation : _screens.default.Onboarding.ActivateGPS;
    if (nextScreen === _screens.default.Home.Index) {
      yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.PermissionLocation);
      // const isEnabled = yield call(checkBluetoothStatus);
      // if (isEnabled) {
      //   yield call(NavigatorService.navigate, nextScreen);
      //   const beaconInfo = yield call(setUpBeaconInfo);
      //   yield put(beaconRegistrationRequest(beaconInfo));
      // }
      // else {
      //   yield call(NavigatorService.navigate, nextScreen);
      // }
    } else {
      yield (0, _effects.call)(_navigation.default.navigate, nextScreen);
    }
  } else {
    yield (0, _effects.put)((0, _actions.allPermissionsSuccess)());
    yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Onboarding.PermissionLocation);

    // const location = yield call(getCachedFineGeoPoint);
    // console.log("location:::::===>" + JSON.stringify(location));
    // if (location) {
    //   // yield put(allPermissionsSuccess());
    //   yield call(NavigatorService.navigate, Screens.Onboarding.PermissionLocation);
    // }
    // else {
    //   // yield put(allPermissionsSuccess());
    //   yield call(NavigatorService.navigate, Screens.Onboarding.PermissionLocation);
    // }
  }
}
function* permissionScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.ALL_PERMISSIONS_REQUEST, requestAllPermissionsSaga);
  yield (0, _effects.takeLatest)(_constants.GO_TO_NEXT_SCREEN, goToNextScreen);
}
//# sourceMappingURL=saga.js.map