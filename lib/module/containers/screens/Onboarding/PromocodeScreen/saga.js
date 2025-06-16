/* eslint-disable no-console */
/**
 *
 * SignInCodeScreen saga
 *
 */

import * as api from '../../../../api';
import { getProfile, getTwilioAccessToken } from '../../../../containers/app/saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { registerUserSuccess, registerUserFailure } from './actions';
import { REGISTER_USER_REQUEST } from './constants';
import Toast from 'react-native-root-toast';
export function* registerUser({
  payload
}) {
  //("register request payload is -->",payload)
  try {
    const response = yield call(api.auth.userRegister, payload);
    //("register user response", JSON.stringify(response));
    // yield put(registerUserSuccess(response.data));
    // yield call(getProfile);
    // yield call(getTwilioAccessToken);
    yield put(registerUserSuccess(response.data));
    yield call(getProfile);
    yield call(getTwilioAccessToken);
    yield call(NavigatorService.navigate, Screens.Onboarding.UpdateName);
  } catch (error) {
    const axiosError = yield call(handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield call(Toast.show, axiosError.message, {
      position: Toast.positions.CENTER
    });
    yield put(registerUserFailure(handleError(error)));
  }
}
export default function* registerUserScreenSaga() {
  yield takeLatest(REGISTER_USER_REQUEST, registerUser);
}
//# sourceMappingURL=saga.js.map