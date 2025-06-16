/**
 *
 * PermissionScreen saga
 *
 */

import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { call, put, takeLatest } from 'redux-saga/effects';
import { openSettings } from 'react-native-permissions';
import { isAndroid } from '../../../../utils/device';
import { checkGPSStatus } from '../../../../utils/location';
import NavigatorService from '../../../../utils/navigation';
import {
  checkBlockedPermission,
  requestAllPermissions,
  showOpenConfigMessage
} from '../../../../utils/permission';

import { allPermissionsSuccess } from './actions';
import { ALL_PERMISSIONS_REQUEST, GO_TO_NEXT_SCREEN } from './constants';
import { AllPermissionsRequestAction } from './types';

function* showMessageAndOpenPermissionConfigScreen(message: string) {
  yield call(showOpenConfigMessage, message);
  yield call(openSettings);
}

export function* requestAllPermissionsSaga({
  payload,
}: AllPermissionsRequestAction) {
  try {
    yield call(checkBlockedPermission);
    yield call(requestAllPermissions);
    yield call(goToNextScreen);

  } catch (error) {
    yield call(showMessageAndOpenPermissionConfigScreen, payload);
    yield call(goToNextScreen);
    
    // yield put(getAllGeofenceRequest("123"))
  }
}

function* goToNextScreen() {
  if (isAndroid) {
    yield put(allPermissionsSuccess());
    const isActive = yield call(checkGPSStatus);
    const nextScreen = isActive
      ? Screens.Onboarding.PermissionLocation
      : Screens.Onboarding.ActivateGPS;
    if (nextScreen === Screens.Home.Index) {
      yield call(NavigatorService.navigate, Screens.Onboarding.PermissionLocation);
      // const isEnabled = yield call(checkBluetoothStatus);
      // if (isEnabled) {
      //   yield call(NavigatorService.navigate, nextScreen);
      //   const beaconInfo = yield call(setUpBeaconInfo);
      //   yield put(beaconRegistrationRequest(beaconInfo));
      // }
      // else {
      //   yield call(NavigatorService.navigate, nextScreen);
      // }
    }
    else {
      yield call(NavigatorService.navigate, nextScreen);
    }
  } else {

    yield put(allPermissionsSuccess());
    yield call(NavigatorService.navigate, Screens.Onboarding.PermissionLocation);

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

export default function* permissionScreenSaga() {
  yield takeLatest(ALL_PERMISSIONS_REQUEST, requestAllPermissionsSaga);
  yield takeLatest(GO_TO_NEXT_SCREEN, goToNextScreen);
}

