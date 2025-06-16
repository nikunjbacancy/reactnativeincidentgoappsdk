/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../../api';
import { triggerOnboardForInactiveUser } from '../../../../../containers/app/saga';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { GeoPoint, Id } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';

import { startEscortRequest } from '../RequestScreen/actions';
import { EscortType } from '../RequestScreen/types';
// import { startChatFailure, startChatSuccess } from '../RecordScreen/actions';
import {
  getIntersectOrganizationsFailure,
  getIntersectOrganizationsSuccess,
  toggleSelectOrganization,
} from './actions';
import { GET_INTERSECT_ORGANIZATIONS_REQUEST } from './constants';
import { GetIntersectOrganizationsRequestAction } from './types';

function* getIntersectOrganizations({
  payload,
}: GetIntersectOrganizationsRequestAction): any {
  try {
    const location: GeoPoint = yield call(getCachedFineGeoPoint);
    const response = yield call(
      api.organizations.findIntersectOrganizations,
      location,
    );

    const { organizations } = response.data;

    yield put(getIntersectOrganizationsSuccess(organizations));
    if (organizations.length === 0) {
      yield* triggerOnboardForInactiveUser();
    }
    if (organizations.length === 1) {
      yield put(toggleSelectOrganization(organizations[0]?.id as Id));
      yield put(startEscortRequest(payload.onLocation));
      yield call(NavigatorService.navigate, Screens.Home.Escort.EscortRequest, {
        isPanic: false,
        requestType: EscortType.Live,
      });
    }
  } catch (error: any) {
    yield put(getIntersectOrganizationsFailure(handleError(error)));
  }
}

export default function* organizationNotifyScreenSaga() {
  yield takeLatest(
    GET_INTERSECT_ORGANIZATIONS_REQUEST,
    getIntersectOrganizations,
  );
}
