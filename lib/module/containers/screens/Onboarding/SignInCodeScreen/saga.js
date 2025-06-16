/* eslint-disable no-console */
/**
 *
 * SignInCodeScreen saga
 *
 */

import * as api from '../../../../api';
import { getProfile, getTwilioAccessToken } from '../../../../containers/app/saga';
import Toast from 'react-native-root-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { loginFailure, loginSuccess, resendCodeFailure, resendCodeSuccess } from './actions';
import { LOGIN_REQUEST, RESEND_CODE_REQUEST } from './constants';
export function* login({
  payload
}) {
  //("login payload is -->",payload)
  try {
    const response = yield call(api.auth.login, payload);
    // //("-check param exist->",response.data.hasOwnProperty('newUser') ? true : false)
    //("login ~ response", JSON.stringify(response.data));
    if (response.data.hasOwnProperty('newUser')) {
      if (response.data.hasOwnProperty('newUser') == true) {
        yield call(NavigatorService.navigate, Screens.Onboarding.PromoCode, {
          promoCodeData: response.data
        });
      } else {
        yield put(loginSuccess(response.data));
        yield call(getProfile);
        yield call(getTwilioAccessToken);
        yield call(NavigatorService.navigate, Screens.Onboarding.UpdateName);
      }
    } else {
      yield put(loginSuccess(response.data));
      yield call(getProfile);
      yield call(getTwilioAccessToken);
      yield call(NavigatorService.navigate, Screens.Onboarding.UpdateName);
    }
  } catch (error) {
    const axiosError = yield call(handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield call(Toast.show, axiosError.message, {
      position: Toast.positions.CENTER
    });
    yield put(loginFailure(handleError(error)));
  }
}
export function* resendCode({
  payload
}) {
  // //("resendCode payload is -->", payload)
  try {
    yield call(api.auth.sendCode, payload);
    yield put(resendCodeSuccess());
    //("Code Resent 1-->")
    yield call(Toast.show, 'Code Resent', {
      position: Toast.positions.CENTER
    });
    //("Code Resent 2-->")
  } catch (error) {
    const axiosError = yield call(handleError, error);
    //("axiosError.message=>",axiosError.message)
    yield call(Toast.show, axiosError.message, {
      position: Toast.positions.CENTER
    });
    yield put(resendCodeFailure(axiosError));
  }
}
export default function* signInCodeScreenSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(RESEND_CODE_REQUEST, resendCode);
}
//# sourceMappingURL=saga.js.map