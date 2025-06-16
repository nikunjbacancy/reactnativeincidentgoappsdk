import * as api from '../../../../../api';
import { setIncidentEscortData } from '../../../../../containers/app/actions';
import { removeScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { IncidentAction, IncidentEscortState } from 'incident-code-core';
import moment from 'moment';
import { call, cancel, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import { startBackgroundGeolocationToEscort } from '../../../../../utils/location/backgroundGeolocation';
import NavigatorService from '../../../../../utils/navigation';
import { isAndroid } from '../../../../../utils/device';
import { makeSelectSelectedOrganization } from '../SelectOrganizationScreen/selectors';
import { addPendingEscort, cancelEscortFailure, cancelEscortSuccess, hideCancelEscortModal, startEscortFailure, startEscortSuccess } from './actions';
import { CANCEL_ESCORT_REQUEST, CANCEL_ESCORT_SUCCESS, START_ESCORT_REQUEST } from './constants';
import { makeSelectPendingEscort } from './selectors';
import { NativeModules } from 'react-native';
function* startEscortSync(action) {
  console.log("startEscortSync===>", action);
  const startEscortTask = yield fork(startEscort, action);
  yield take(CANCEL_ESCORT_REQUEST);
  yield fork(cancelEscort);
  yield cancel(startEscortTask);
  yield put(removeScreenAction());
}
function* startEscort({
  payload
}) {
  // make param?
  const selectedOrganization = yield select(makeSelectSelectedOrganization());
  try {
    const geoPoint = yield call(getCachedFineGeoPoint);
    const request = {
      location: geoPoint,
      organization: selectedOrganization.id,
      organizationArea: selectedOrganization.area,
      comment: payload.comment,
      isPanic: payload.isPanic
    };
    const response = yield call(api.incidents.startEscort, request);
    yield put(addPendingEscort(response.data));
    yield call(alertOrganization, response.data, selectedOrganization);
    yield call(startChat, response.data, selectedOrganization);
    console.log("================================Request screen saga startBackgroundGeolocationToEscort================================");
    yield call(startBackgroundGeolocationToEscort, response.data.id, payload.onLocation);
    yield call(checkIncidentStartCompletion, response.data, selectedOrganization);
  } catch (error) {
    yield put(startEscortFailure(error));
  }
}
function* alertOrganization(incident, organization) {
  const incidentActionRequest = {
    id: incident.id,
    action: IncidentAction.AlertOrganization,
    args: {
      organization: organization.id,
      organizationArea: organization.area
    }
  };
  yield call(api.incidents.doIncidentAction, incidentActionRequest);
}
function* startChat(incident, organization) {
  const location = yield call(getCachedFineGeoPoint);
  yield call(api.incidents.startChat, {
    incident: incident.id,
    organization: organization.id,
    location
  });
}
function* checkIncidentStartCompletion(incident, organization) {
  const start = moment();
  while (moment().diff(start, 'minutes') <= 5) {
    try {
      const response = yield call(api.incidents.getEscort, incident.id);
      // if (response.data.state === IncidentEscortState.Active) {
      if (isAndroid) {
        NativeModules.Bluetooth.awakeLockScreen();
      }
      const incidentEscortData = {
        incidentEscort: response.data,
        organization
      };
      yield put(setIncidentEscortData(incidentEscortData));
      yield call(NavigatorService.navigate, Screens.Home.Escort.Record, incidentEscortData);
      yield put(startEscortSuccess());
      yield put(hideCancelEscortModal());
      yield put(removeScreenAction());
      api.logger.debug('Request screen CheckVideoUpload', 'Success', response.data);
      return;
      // }
    } catch (error) {
      api.logger.warn('Request screen CheckVideoUpload', 'Failed', error);
    }
    // finally {
    //   yield delay(5000);
    // }
  }
  yield put(hideCancelEscortModal());
  yield put(removeScreenAction());
  yield put(startEscortFailure(new Error('We´re sorry, no security personnel are available now. Please either select a different organization or try again later.')));
}
function* cancelEscort() {
  console.log("Cancel Escort");
  try {
    const incident = yield select(makeSelectPendingEscort());
    yield call(api.incidents.updateEscortState, incident.id, {
      state: IncidentEscortState.Canceled
    });
    yield put(cancelEscortSuccess());
  } catch (error) {
    yield put(cancelEscortFailure(error));
  }
}
function* navToEscortType() {
  yield call(NavigatorService.navigate, Screens.Home.Escort.EscortType);
}
export default function* organizationNotifyScreenSaga() {
  yield takeLatest(START_ESCORT_REQUEST, startEscortSync);
  yield takeLatest(CANCEL_ESCORT_SUCCESS, navToEscortType);
}
//# sourceMappingURL=saga.js.map