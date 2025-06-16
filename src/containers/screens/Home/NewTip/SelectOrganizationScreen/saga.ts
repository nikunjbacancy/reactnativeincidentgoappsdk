/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../../api';
import {
  makeSelectNewTipIncidentExpired,
  makeSelectNewTipIncidentLocation,
} from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { GeoPoint, OrganizationWithArea } from 'incident-code-core';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import NavigatorService from '../../../../../utils/navigation';

import {
  addSelectedOrganizationFailure,
  addSelectedOrganizationSuccess,
  getIntersectOrganizationsFailure,
  getIntersectOrganizationsSuccess,
} from './actions';
import {
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  SELECT_INCIDENT_ORGANIZATION_REQUEST,
} from './constants';
import { makeSelectSelectedOrganization } from './selectors';

function* getIntersectOrganizations(): any {
  try {
    const location: GeoPoint = yield select(makeSelectNewTipIncidentLocation());
    const response = yield call(
      api.organizations.findIntersectOrganizations,
      location,
    );
    yield put(getIntersectOrganizationsSuccess(response.data));
    if (response.data.organizations.length === 1) {
      yield put(addSelectedOrganizationSuccess(response.data.organizations[0]));
      yield call(NavigatorService.navigate, Screens.Home.NewTip.SelectCategory);
    } else {
      yield call(
        NavigatorService.navigate,
        Screens.Home.NewTip.SelectOrganization,
      );
    }
  } catch (error: any) {
    yield put(getIntersectOrganizationsFailure(handleError(error)));
  }
}

function* addSelectedOrganization() {
  const selectedOrganization: OrganizationWithArea = yield select(
    makeSelectSelectedOrganization(),
  );
  const incidentExpired: boolean = yield select(
    makeSelectNewTipIncidentExpired(),
  );
  if (!incidentExpired) {
    yield put(addSelectedOrganizationSuccess(selectedOrganization));
    yield call(NavigatorService.navigate, Screens.Home.NewTip.SelectCategory);
  } else {
    yield put(addSelectedOrganizationFailure(new Error('Tip expired')));
  }
}

export default function* organizationNotifyScreenSaga() {
  yield takeLatest(
    GET_INTERSECT_ORGANIZATIONS_REQUEST,
    getIntersectOrganizations,
  );
  yield takeLatest(
    SELECT_INCIDENT_ORGANIZATION_REQUEST,
    addSelectedOrganization,
  );
}
