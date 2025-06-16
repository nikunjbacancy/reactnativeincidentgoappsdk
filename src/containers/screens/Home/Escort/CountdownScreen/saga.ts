/**
 *
 * CountdownScreen saga
 *
 */
 import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import {
  clearIncidentEscortData,
  clearPassiveEscortData,
  setIncidentEscortData,
  setPassiveEscortData,
} from '../../../../../containers/app/actions';
import { makeSelectPassiveEscortData } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import {
  GeoPoint,
  Id,
  Incident,
  IncidentAction,
  IncidentActionRequest,
  IncidentEscort,
  IncidentEscortState,
  IncidentPassive,
  IncidentPassiveEscortRequest,
  Organization,
  OrganizationArea,
  OrganizationProcedure,
} from 'incident-code-core';
import moment from 'moment';
import { Vibration } from 'react-native';
import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';

import {
  getTipsRequest,
  resetState,
} from '../../../Menu/Tips/MyTipsScreen/actions';
import { TipStatus } from '../../../Menu/Tips/MyTipsScreen/types';
import { EscortType } from '../EscortTypeScreen/types';
import { PANIC_MODE_KEY } from '../RecordScreen/constants';
import { clearSelections } from '../TimedEscortScreen/actions';
import {
  enterPanicModeFailure,
  enterPanicModeSuccess,
  getProcedureFailure,
  getProcedureSuccess,
  hidePanicInfo,
  hideSafeModal,
  imSafeFailure,
  imSafeSuccess,
  logPassiveEscortActionFailure,
  setTimerFailure,
  setTimerSuccess,
  startPassiveEscortFailure,
  startPassiveEscortSuccess,
  startVirtualEscortFailure,
  startVirtualEscortSuccess,
} from './actions';
import {
  CANCEL_COUNTDOWN_WARNING,
  ENTER_PANIC_MODE,
  GET_PROCEDURE_REQUEST,
  IM_SAFE_REQUEST,
  LOG_ESCORT_ACTION_REQUEST,
  SET_TIMER_VALUE_REQUEST,
  SHOW_PANIC_INFO,
  START_PASSIVE_ESCORT_REQUEST,
  START_VIRTUAL_ESCORT_REQUEST,
  TRIGGER_COUNTDOWN_WARNING,
} from './constants';
import { makeSelectIncident, makeSelectProcedure } from './selectors';
import {
  EnterPanicModeAction,
  GetProcedureRequestAction,
  ImSafeRequestAction,
  LogEscortActionRequestAction,
  PanicMode,
  SetTimerValueRequestAction,
  StartPassiveEscortRequestAction,
  StartVirtualEscortRequestAction,
  TimerForm,
} from './types';

function* getProcedureById({ payload }: GetProcedureRequestAction) {
  try {
    if (!payload) {
      const passiveData = yield select(makeSelectPassiveEscortData());
      if (passiveData.id) {
        const response: AxiosResponse<IncidentPassive> = yield call(
          api.incidents.getPassiveEscort,
          passiveData.id,
        );
        const procedure = response.data.procedure as OrganizationProcedure;
        yield put(getProcedureSuccess(procedure));
      } else {
        const error = new Error('Unable to retrieve procedure');
        yield put(getProcedureFailure(error as Error));
      }
    } else {
      const response: AxiosResponse<OrganizationProcedure> = yield call(
        api.procedures.getProcedure,
        payload,
      );
      yield put(getProcedureSuccess(response.data));
    }
  } catch (error) {
    yield put(getProcedureFailure(error as Error));
  }
}

const calculateTimer = ({ hours, minutes, seconds }: TimerForm) => {
  return (+hours * 60 + +minutes) * 60 + +seconds;
};

function* updateTimer({ payload }: SetTimerValueRequestAction) {
  const time = calculateTimer(payload);
  if (time < 60) {
    const error: Error = new Error(
      'Countdown timer must be set to at least a minute',
    );
    yield put(setTimerFailure(error));
  } else {
    yield put(setTimerSuccess(time));
  }
}

function* delayHidePanicInfo() {
  yield delay(4500);
  yield put(hidePanicInfo());
}

function* enterPanicMode({ payload }: EnterPanicModeAction) {
  // Vibrates every 5 secs
  yield call(Vibration.vibrate, [5000, 800], true);
  const incident = yield select(makeSelectIncident());
  console.log("enterPanicMode incident===>",incident)
  const organization = payload;
  try {
    yield call(AsyncStorage.setItem, PANIC_MODE_KEY, PanicMode.Active);
    yield call(api.incidents.passiveToPanicEscort, incident);
    yield call(alertOrganization, incident, organization);
    yield call(startChat, incident, organization);
    yield call(checkIncidentStartCompletion, incident, organization);
    yield put(enterPanicModeSuccess());
  } catch (error) {
    yield put(enterPanicModeFailure((error as Error)));
  }
}

function* imSafe({ payload }: ImSafeRequestAction) {
  const incident = yield select(makeSelectIncident());
  try {
    yield call(api.incidents.updatePassiveEscortState, incident.id, {
      state: IncidentEscortState.Safe,
      comment: payload.comment,
    });
    yield call(clearDataAndGoBack);
  } catch (error) {
    yield put(imSafeFailure((error as Error)));
  }
}

function* clearDataAndGoBack() {
  yield put(clearIncidentEscortData());
  yield put(clearPassiveEscortData());
  yield put(clearSelections());
  yield put(hideSafeModal());
  yield delay(300);
  yield call(NavigatorService.navigate, Screens.Home.Escort.EscortType);
  yield put(imSafeSuccess());
  yield delay(2000);
  yield put(resetState());
  yield put(getTipsRequest({ tipStatus: TipStatus.Active, paging: false }));
  yield put(getTipsRequest({ tipStatus: TipStatus.Closed, paging: false }));
}

function* startCountdownWarning() {
  // Vibrates every 5 secs
  console.log("phont vibrate")
  yield call(Vibration.vibrate, [5000, 800], true);
}

function* clearCountdownWarning() {
  yield call(Vibration.cancel);
}

function* createPassiveEscort({ payload }: StartPassiveEscortRequestAction): Generator<any, void, any> {
  const { organization } = payload;
  const { id } = payload;
  const { safetyTimer } = payload;
  const procedure = yield select(makeSelectProcedure());
  let incident;
  try {
    if (id) {
      console.log("createPassiveEscort 1 ===>",id)
      const response = yield call(api.incidents.getIncident, id);
      incident = response.data;
    } else {
      const geoPoint: GeoPoint = yield call(getCachedFineGeoPoint);
      let orgAreaId;
      if (organization.id) {
        const areaResp: AxiosResponse<OrganizationArea> = yield call(
          api.organizations.findOrganizationArea,
          organization.id,
          geoPoint,
        );
        orgAreaId = areaResp.data.id;
      }
      const request: IncidentPassiveEscortRequest = {
        location: geoPoint,
        organization: organization.id,
        organizationArea: orgAreaId,
        procedure: procedure.id === EscortType.Safety ? null : procedure.id,
      };
      // console.log("IncidentPassiveEscortRequest ===>",JSON.stringify(request))
      const response: AxiosResponse<Incident> = yield call(
        api.incidents.createPassiveEscort,
        request,
      );
      // console.log("createPassiveEscort 2 ===>",JSON.stringify(response.data))
      incident = response.data;
      // console.log("createPassiveEscort 3 ===>",JSON.stringify(incident))
    }
    yield put(
      setPassiveEscortData({
        id: incident.id,
        procedure,
        isSafetyTimer: safetyTimer,
      }),
    );
    yield put(startPassiveEscortSuccess(incident));
  } catch (error) {
    yield put(startPassiveEscortFailure((error as Error)));
  }
}

function* logPassiveEscortAction({ payload }: LogEscortActionRequestAction) {
  try {
    yield call(api.incidents.updatePassiveEscortLog, payload);
  } catch (error) {
    yield put(logPassiveEscortActionFailure((error as Error)));
  }
}

function* startVirtualEscortConnection({
  payload,
}: StartVirtualEscortRequestAction) {
  try {
    const organization = payload;
    const incident = yield select(makeSelectIncident());
    // console.log("startVirtualEscortConnection organization ==>",JSON.stringify(organization))
    // console.log("startVirtualEscortConnection incident ==>",JSON.stringify(incident))
    yield call(api.incidents.passiveToActiveEscort, incident);
    yield call(alertOrganization, incident, organization);
    yield call(startChat, incident, organization);
    yield call(checkIncidentStartCompletion, incident, organization);
  } catch (error) {
    yield put(startPassiveEscortFailure((error as Error)));
  }
}

function* checkIncidentStartCompletion(
  incident: Incident,
  organization: Organization,
) {
  const start = moment();
  while (moment().diff(start, 'minute') <= 5) {
    try {
      const response: AxiosResponse<IncidentEscort> = yield call(
        api.incidents.getEscort,
        incident.id as Id,
      );
      // console.log("incident ===>",JSON.stringify(incident))
      // console.log("checkIncidentStartCompletion ===>",JSON.stringify(response))
      // if (response.data.state === IncidentEscortState.Active) {
        const incidentEscortData = {
          incidentEscort: response.data,
          organization,
          fromPassive: true,
        };
        // console.log("incidentEscortData ===>",JSON.stringify(incidentEscortData))
        yield put(setIncidentEscortData(incidentEscortData));
        yield call(clearCountdownWarning);
        yield call(
          NavigatorService.navigate,
          Screens.Home.Escort.Record,
          incidentEscortData,
        );
        yield put(startVirtualEscortSuccess());
        api.logger.debug('Countdown CheckVideoUpload', 'Success', response.data);
        return;
      // }
    } catch (error) {
      api.logger.warn('Countdown CheckVideoUpload', 'Failed', error);
    } finally {
      yield delay(5000);
    }
  }
  yield put(
    startVirtualEscortFailure(
      new Error(
        'We´re sorry, no security personnel are available now. If this is an emergency, please either contact your organization directly or call 911.',
      ),
    ),
  );
  yield call(clearCountdownWarning);
  yield call(AsyncStorage.setItem, PANIC_MODE_KEY, PanicMode.Inactive);
}

function* alertOrganization(incident: Incident, organization: Organization) {
  const incidentActionRequest: IncidentActionRequest = {
    id: incident.id as Id,
    action: IncidentAction.AlertOrganization,
    args: {
      organization: organization.id as Id,
    },
  };
  yield call(api.incidents.doIncidentAction, incidentActionRequest);
}

function* startChat(incident: Incident, organization: Organization) {
  const location = yield call(getCachedFineGeoPoint);
  yield call(api.incidents.startChat, {
    incident: incident.id as Id,
    organization: organization.id as Id,
    location,
  });
}

export default function* countdownScreenSaga() {
  yield takeLatest(GET_PROCEDURE_REQUEST, getProcedureById);
  yield takeLatest(SET_TIMER_VALUE_REQUEST, updateTimer);
  yield takeLatest(SHOW_PANIC_INFO, delayHidePanicInfo);
  yield takeLatest(ENTER_PANIC_MODE, enterPanicMode);
  yield takeLatest(IM_SAFE_REQUEST, imSafe);
  yield takeLatest(TRIGGER_COUNTDOWN_WARNING, startCountdownWarning);
  yield takeLatest(CANCEL_COUNTDOWN_WARNING, clearCountdownWarning);
  yield takeLatest(START_PASSIVE_ESCORT_REQUEST, createPassiveEscort);
  yield takeLatest(START_VIRTUAL_ESCORT_REQUEST, startVirtualEscortConnection);
  yield takeLatest(LOG_ESCORT_ACTION_REQUEST, logPassiveEscortAction);
}
