/**
 *
 * UpdateNameScreen saga
 *
 */

import * as api from '../../../../api';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_BEACON_DETAILS } from '../../../../containers/screens/Home/Settings/constants';
import { makeSelectUser } from '../../../../containers/app/selectors';
import {
  beaconRegistrationFailure,
  beaconRegistrationSuccess,
} from './actions';
import { BEACON_REGISTRATION_REQUEST } from './constants';
import { BeaconRegistrationRequestAction } from './types';
import Toast from 'react-native-root-toast';
import { NativeModules } from 'react-native';
import { AppUser } from 'incident-code-core';

export function* registerBeacon({ payload }: BeaconRegistrationRequestAction): any {
  try {
    const user: AppUser = yield select(makeSelectUser());
    Object.assign(payload, { user: user.id });
    const response = yield call(api.beacon.beaconConnect, payload);

    switch (response.data.flag) {
      case true:
        yield call(AsyncStorage.setItem, SET_BEACON_DETAILS, JSON.stringify(payload));
        NativeModules.Bluetooth.startBLEService(payload?.address);
        break;
      case false:
        Toast.show(response.data.message, { position: Toast.positions.BOTTOM });
        break;
    }
    yield put(beaconRegistrationSuccess(response.data));
  } catch (error: any) {
    yield put(beaconRegistrationFailure(handleError(error)));
  }
}

export default function* updateSettingScreenSaga() {
  yield takeLatest(BEACON_REGISTRATION_REQUEST, registerBeacon);
}