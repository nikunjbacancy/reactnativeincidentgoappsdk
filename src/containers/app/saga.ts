/* eslint-disable @typescript-eslint/camelcase */
/**
 *
 * App saga
 *
 */
 import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../api';
import { ExpireOffset, KeyTwilioAccessToken } from '../../api/twilio/constants';
import { AxiosResponse } from 'axios';
import { LOGIN_SUCCESS } from '../../containers/screens/Onboarding/SignInCodeScreen/constants';
import { REGISTER_USER_SUCCESS } from '../../containers/screens/Onboarding/PromocodeScreen/constants';
import { LoginSuccessAction } from '../../containers/screens/Onboarding/SignInCodeScreen/types';
import { AccessToken, AppUser, Config, ErrorLog } from 'incident-code-core';
import noop from 'lodash/noop';
import { sdkConfigs } from '../../sdkConfigs'
import { Notification } from 'react-native-in-app-message';
import { call, put, select, spawn, takeLatest } from 'redux-saga/effects';
import { persistor } from '../../store';
import { getInfo } from '../../utils/device';
import { handleError } from '../../utils/error';
import {
  setupFirebaseMessage,
  setupNotifications,
  setUserId,
  subscribeToTopic,
} from '../../utils/firebase';
import { initBackgroundGeolocationService } from '../../utils/location/backgroundGeolocation';
import NavigatorService from '../../utils/navigation';

import { showIOSForegroundNotification } from '../providers/NotificationProvider/actions';
import Screens from '../providers/RoutesProvider/screens';
import { UPDATE_NAME_SUCCESS } from '../screens/Onboarding/UpdateNameScreen/constants';
import { UpdateNameSuccessAction } from '../screens/Onboarding/UpdateNameScreen/types';
import {
  getConfigsFailure,
  getConfigsRequest,
  getConfigsSuccess,
  getProfileFailure,
  getProfileSuccess,
  getTwilioAccessTokenFailure,
  getTwilioAccessTokenRequest,
  getTwilioAccessTokenSuccess
} from './actions';
import {
  GET_CONFIGS_REQUEST,
  GET_PROFILE_REQUEST,
  GET_TWILIO_ACCESS_TOKEN_REQUEST,
  LOG_ERROR,
  UPDATE_PROFILE_REQUEST,
  REMOTE_LOGGER_KEY,
  TOKEN_KEY,
  USER_PHONE_KEY,
} from './constants';
import { makeSelectTwilioInitialized, makeSelectUser } from './selectors';
import { LogErrorAction } from './types';

const checkExpiresIn = (token: AccessToken): AccessToken => {
  if (!token.expires_in) return token;
  return {
    ...token,
    expires_at: Date.now() + token.expires_in * 1000,
  };
};

export function* saveToken({ payload }: LoginSuccessAction) {
  console.log("Save Token -->", payload)
  const token = checkExpiresIn(payload);
  console.log("Token -->", token)
  yield call(AsyncStorage.setItem, TOKEN_KEY, JSON.stringify(token));
}

export function* saveUserPhone({ payload }: UpdateNameSuccessAction) {
  if (payload.phone) {
    yield call(AsyncStorage.setItem, USER_PHONE_KEY, payload.phone);
  }
}

export function* getConfigs() {

  try {
    const response: AxiosResponse<Config> = yield call(api.configs.getConfigs);
    // console.log("configs response=>",response)
    const remoteLogger = response.data.remoteLogger || '';
    yield call(
      AsyncStorage.setItem,
      REMOTE_LOGGER_KEY,
      JSON.stringify(remoteLogger),
    );
    // console.log("configs response=>",response)
    yield put(getConfigsSuccess(response.data));
    // console.log("user configs ===>",JSON.stringify(response.data))
    api.logger.debug('App Config', 'Get Success', response.data);
  } catch (error) {
    // console.log("configs response error=>",error)
    api.logger.warn('App Config', 'Get Failed', error);
    yield put(getConfigsFailure(handleError(error)));
  }
}

export function* triggerOnboardForInactiveUser() {
  const active = yield select(state => {
    const {
      incidentPassiveEscortData,
      incidentEscortData,
      nextOnboardingScreen,
    } = state.app;

    return (
      !!incidentEscortData ||
      !!incidentPassiveEscortData ||
      nextOnboardingScreen !== 'Home'
    );
  });
  if (!active) {
    yield call(() => persistor.purge());
    yield put({ type: 'USER_DELETED' });
    yield put(getConfigsRequest());
    yield put(getTwilioAccessTokenRequest());
    return true;
  }
  return false;
}

export function* getProfile() {
  // console.log("get profile api call=>")
  try {
    const response: AxiosResponse<AppUser> = yield call(api.user.getProfile);
    // console.log("🚀 ~ file: saga.ts ~ line 119 ~ function*getProfile ~ response", JSON.stringify(response));
    const { isDeleted } = response.data as any;

    if (isDeleted) {
      if (!(yield* triggerOnboardForInactiveUser())) {
        yield put(getProfileSuccess(response.data));

        const userId = response.data.id as string;
        const topic = `${sdkConfigs.configs.sdkStage}_user_${userId}`;
        AsyncStorage.setItem('userId', userId);
        AsyncStorage.setItem('userData', JSON.stringify(response.data));
        yield call(setUserId, userId);
        yield call(subscribeToTopic, topic);
        // console.log("user configs ===>",JSON.stringify(response.data))
        api.logger.debug('User Profile', 'Get Success', response.data);
        yield call(setupFirebaseMessage);
        yield spawn(setupAndWatchIOSForegroundNotifications);
        console.log("getAllgeofene request : DELETED BLOCK")
        // yield put(getAllGeofenceRequest(userId));
        // yield call(initBackgroundGeolocationService);
      }
    } else {
      yield put(getProfileSuccess(response.data));

      const userId = response.data.id as string;
      const topic = `${sdkConfigs.configs.sdkStage}_user_${userId}`;
      // console.log("topic=======***>",topic)
      AsyncStorage.setItem('userId', userId);
      AsyncStorage.setItem('userData', JSON.stringify(response.data));
      yield call(setUserId, userId);
      yield call(subscribeToTopic, topic);
      // console.log("user configs ===>",JSON.stringify(response.data))
      api.logger.debug('User Profile', 'Get Success', response.data);
      yield call(setupFirebaseMessage);
      yield spawn(setupAndWatchIOSForegroundNotifications);
      // console.log("getAllgeofene request : SUCCESS BLOCK")
      // yield put(getAllGeofenceRequest(userId));

      // yield call(initBackgroundGeolocationService);
    }
  } catch (error) {
    console.log("get profile api call error=>", error)
    api.logger.warn('User Profile', 'Get Failed', error);
    yield put(getProfileFailure(handleError(error)));
  }
}

export function* updateProfile() {
  // console.log("get profile api call=>")
  try {
    const response: AxiosResponse<AppUser> = yield call(api.user.getProfile);
    // console.log("🚀 ~ file: saga.ts ~ line 119 ~ function*getProfile ~ response", JSON.stringify(response));
    const { isDeleted } = response.data as any;

    if (isDeleted) {
      if (!(yield* triggerOnboardForInactiveUser())) {
        yield put(getProfileSuccess(response.data));

      }
    } else {
      yield put(getProfileSuccess(response.data));

    }
  } catch (error) {
    console.log("get profile api call error=>", error)
    api.logger.warn('User Profile', 'Get Failed', error);
    yield put(getProfileFailure(handleError(error)));
  }
}


function* setupAndWatchIOSForegroundNotifications() {
  while (true) {
    const iosForegroundNotification = yield call(setupNotifications);
    if (iosForegroundNotification) {
      yield put(
        showIOSForegroundNotification({
          title: iosForegroundNotification.message?.title,
          message: iosForegroundNotification.message?.body,
          action: iosForegroundNotification.data?.link
            ? noop
            : () => {
              NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
                incident: {
                  id: iosForegroundNotification.data?.incidentId,
                },
                showChat: true,
              });
              Notification.hide();
            },
        }),
      );
      Notification.show();
    }
  }
}

function* setAccessTokenFromStorage() {
  return yield call(
    JSON.parse,
    yield call(AsyncStorage.getItem, KeyTwilioAccessToken),
  );
}

function* setAccessTokenFromApi() {
  const token = yield call(api.twilio.getToken);
  return saveAccessToken(token);
}

function* saveAccessToken(token: AccessToken) {
  const tokenWithExpire = !token.expires_at
    ? {
      ...token,
      expires_at: Date.now() + (token.expires_in || 1) * 1000 - ExpireOffset,
    }
    : token;

  yield call(
    AsyncStorage.setItem,
    KeyTwilioAccessToken,
    JSON.stringify(tokenWithExpire),
  );

  return tokenWithExpire;
}

export function* getTwilioAccessToken() {
  const twilioInitialized: boolean = yield select(
    makeSelectTwilioInitialized(),
  );
  try {
    const token: AccessToken = yield twilioInitialized
      ? yield call(setAccessTokenFromStorage)
      : yield call(setAccessTokenFromApi);

    yield call(api.twilio.init, token);
    yield put(getTwilioAccessTokenSuccess(token));
  } catch (error) {
    yield put(getTwilioAccessTokenFailure(handleError(error)));
  }
}

export function* logErrorToDB({ payload }: LogErrorAction) {
  const user: AppUser = yield select(makeSelectUser());
  try {
    const error: ErrorLog = {
      source: payload.source,
      message: payload.message,
      device: getInfo(),
      user,
      raw: JSON.stringify(payload.raw),
    };
    yield call(api.logger.logError, error);
  } catch (error) {
    const newError: ErrorLog = {
      source: 'logErrorToDB',
      message: error.message,
      device: getInfo(),
      user,
      raw: JSON.stringify(error),
    };
    yield call(api.logger.logError, newError);
  }
}

export default function* appSaga() {
  yield takeLatest(LOGIN_SUCCESS, saveToken);
  yield takeLatest(REGISTER_USER_SUCCESS, saveToken);
  yield takeLatest(UPDATE_NAME_SUCCESS, saveUserPhone);
  yield takeLatest(GET_PROFILE_REQUEST, getProfile);
  yield takeLatest(UPDATE_PROFILE_REQUEST, updateProfile);
  yield takeLatest(GET_CONFIGS_REQUEST, getConfigs);
  yield takeLatest(GET_TWILIO_ACCESS_TOKEN_REQUEST, getTwilioAccessToken);
  yield takeLatest(LOG_ERROR, logErrorToDB);
}
