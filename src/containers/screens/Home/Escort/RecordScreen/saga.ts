/* eslint-disable no-empty */
/**
 *
 * RecordScreen saga
 *
 */

 import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import {
  clearIncidentEscortData,
  clearPassiveEscortData,
  LogErrorToDb,
} from '../../../../../containers/app/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import {
  ErrorLog,
  GeoPoint,
  History,
  HistoryType,
  IncidentEscortState,
  PassiveEscortAction,
} from 'incident-code-core';
import { Vibration, NativeModules } from 'react-native';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { GeocodeResponse } from 'types';
import { handleError } from '../../../../../utils/error';
import { convertLocationToGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';
import { SET_BEACON_DETAILS, BEACON_CONNECTED } from '../../../../../containers/screens/Home/Settings/constants';
import { isAndroid } from '../../../../../utils/device';
import PushNotification from 'react-native-push-notification';

import {
  getTipsRequest,
  resetState,
} from '../../../Menu/Tips/MyTipsScreen/actions';
import { TipStatus } from '../../../Menu/Tips/MyTipsScreen/types';
import {
  clearDataAndGoBack,
  handleErrorFailure,
  hidePanicInfo,
  hideSafeModal,
  imSafeFailure,
  imSafeSuccess,
  sendMessageSuccess,
  startChatFailure,
  startChatSuccess,
} from './actions';
import {
  APP_STATE_STATUS_CHANGE,
  CLEAR_DATA_AND_GO_BACK,
  ENTER_PANIC_MODE,
  EXIT_PANIC_MODE,
  IM_SAFE_REQUEST,
  PANIC_MODE_KEY,
  SEND_MESSAGE_REQUEST,
  SHOW_PANIC_INFO,
  START_CHAT_REQUEST,
  TOGGLE_RECORD_TYPE,
} from './constants';
import { makeSelectFromPassiveEscort, makeSelectRecordType } from './selectors';
import {
  AppStateStatusChangeAction,
  ClearDataAndGoBackAction,
  EnterPanicModeAction,
  ExitPanicModeAction,
  ImSafeRequestAction,
  PanicMode,
  SendMessageRequestAction,
  StartChatRequestAction,
  ToggleRecordTypeAction,
} from './types';

function* startChat({ payload }: StartChatRequestAction) {
  try {
    const messages: GiftedChatMessage[] = yield call(
      api.twilio.getMessages,
      payload.id?.toString() || '',
    );
    yield put(startChatSuccess(messages));
  } catch (error: any) {
    yield put(startChatFailure(handleError(error)));
  }
}

function* sendMessage({
  payload: { incidentEscort, location, message },
}: SendMessageRequestAction) {
  try {
    const geocodeResponse: AxiosResponse<GeocodeResponse> = yield call(
      api.user.getAddress,
      location.coords.latitude,
      location.coords.longitude,
    );
    const address = geocodeResponse.data.results[0]?.formatted_address || '';
    const geoPoint: GeoPoint = yield call(convertLocationToGeoPoint, location);
    const messageAttributes = {
      location: geoPoint,
      address,
    };
    yield call(
      api.twilio.sendMessage,
      incidentEscort.id?.toString() || '',
      message.text,
      messageAttributes,
    );
    yield put(sendMessageSuccess()); // this isn't doing anything
  } catch (error: any) {
    const parsedError = handleError(error);
    const errorLog: ErrorLog = {
      source: 'Send Message error',
      message: parsedError.message,
      raw: JSON.stringify(error),
    };
    yield put(LogErrorToDb(errorLog));
  }
}

function* imSafe({ payload }: ImSafeRequestAction) {
  //("payload1:" + JSON.stringify(payload));
  try {
    //("URL1:" + api.incidents.updateEscortState)
    //("payload.incidentEscort.id1:" + payload.incidentEscort.id)
    //("State1:" + IncidentEscortState.Safe);
    yield call(api.incidents.updateEscortState, payload.incidentEscort.id, {
      state: IncidentEscortState.Safe,
      comment: payload.comment,
    });
    yield put(clearDataAndGoBack(payload.incidentEscort.id));
  } catch (error: any) {
    yield put(imSafeFailure(handleError(error)));
  }
}

function* clearDataAngGoBack({ payload }: ClearDataAndGoBackAction): any {
  yield put(clearIncidentEscortData());
  yield put(hideSafeModal());
  yield delay(300);
  const fromPassive = yield select(makeSelectFromPassiveEscort());
  if (fromPassive && payload) {
    yield call(NavigatorService.navigate, Screens.Home.Escort.Countdown, {
      id: payload,
    });
  } else {
    yield put(clearPassiveEscortData());
    PushNotification.cancelAllLocalNotifications();
    AsyncStorage.getItem(SET_BEACON_DETAILS).then((beacons) => {
      if (beacons) {
        AsyncStorage.getItem(BEACON_CONNECTED).then((value) => {
          if (value !== null) {
            if (JSON.parse(value) === true) {
              if (isAndroid)
                NativeModules.Bluetooth.cancelAckDevice(JSON.parse(beacons).address);
            }
          }

        });
      }
    });
    yield call(NavigatorService.navigate, Screens.Home.Escort.EscortType);
  }
  yield put(imSafeSuccess());
  yield delay(2000);
  yield put(resetState());
  yield put(getTipsRequest({ tipStatus: TipStatus.Active, paging: false }));
  yield put(getTipsRequest({ tipStatus: TipStatus.Closed, paging: false }));
}

function* delayHidePanicInfo() {
  yield delay(4500);
  yield put(hidePanicInfo());
}

function* enterPanicMode({ payload }: EnterPanicModeAction) {
  //("payload2:" + JSON.stringify(payload));
  try {
    // Vibrates every 5 secs
    yield call(Vibration.vibrate, [5000, 800], true);
    yield call(api.incidents.updateEscortState, payload.id, {
      state: IncidentEscortState.Panic,
    });
    yield call(AsyncStorage.setItem, PANIC_MODE_KEY, PanicMode.Active);
  } catch (error: any) {
    yield put(handleErrorFailure(handleError(error)));
  }
}

function* exitPanicMode({ payload }: ExitPanicModeAction): any {
  const fromPassive = yield select(makeSelectFromPassiveEscort());
  try {
    yield call(Vibration.cancel);
    yield call(api.incidents.updateEscortState, payload.id, {
      state: IncidentEscortState.Active,
    });
    if (fromPassive && payload.id) {
      yield call(api.incidents.updatePassiveEscortLog, {
        id: payload.id,
        action: PassiveEscortAction.PanicExited,
      });
    }
    yield call(AsyncStorage.setItem, PANIC_MODE_KEY, PanicMode.Inactive);
  } catch (error: any) {
    yield put(handleErrorFailure(handleError(error)));
  }
}

function* appStateStatusChange({ payload }: AppStateStatusChangeAction) {
  //("payload4:" + JSON.stringify(payload));
  try {
    const { state, incidentEscort } = payload;
    //("URL4:" + api.incidents.updateEscortState)
    //("payload.incidentEscort.id4:" + payload.incidentEscort.id)
    //("State4:" + state);
    if (state === 'background') {
      yield call(api.incidents.updateEscortState, incidentEscort.id, {
        state: IncidentEscortState.Background,
      });
    }
    if (state === 'active') {
      yield call(api.incidents.updateEscortState, incidentEscort.id, {
        state: IncidentEscortState.Active,
      });
    }
  } catch (err: any) {
    yield put(handleErrorFailure(handleError(err)));
  }
}

function* logRecordToggle({ payload }: ToggleRecordTypeAction): any {
  try {
    if (!payload.id) {
      return;
    }
    const recordType = yield select(makeSelectRecordType());
    const history: History = {
      id: payload.id,
      type: HistoryType.Escort,
      title: `switched media to ${recordType}`,
    };
    yield call(api.incidents.updateIncidentChatHistory, payload.id, history);
  } catch (error: any) {
    yield put(handleErrorFailure(handleError(error)));
  }
}

export default function* escortRecordScreenSaga() {
  yield takeLatest(START_CHAT_REQUEST, startChat);
  yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage);
  yield takeLatest(IM_SAFE_REQUEST, imSafe);
  yield takeLatest(SHOW_PANIC_INFO, delayHidePanicInfo);
  yield takeLatest(ENTER_PANIC_MODE, enterPanicMode);
  yield takeLatest(EXIT_PANIC_MODE, exitPanicMode);
  yield takeLatest(APP_STATE_STATUS_CHANGE, appStateStatusChange);
  yield takeLatest(CLEAR_DATA_AND_GO_BACK, clearDataAngGoBack);
  yield takeLatest(TOGGLE_RECORD_TYPE, logRecordToggle);
}
