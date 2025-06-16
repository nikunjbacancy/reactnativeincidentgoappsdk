/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import { triggerOnboardForInactiveUser } from '../../../../../containers/app/saga';
import { GeoPoint, Id, OrganizationProcedure } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';

import {
  getIntersectOrganizationsFailure,
  getIntersectOrganizationsSuccess,
  getOrganizationProceduresFailure,
  getOrganizationProceduresSuccess,
  toggleSelectOrganization,
} from './actions';
import {
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  GET_ORGANIZATION_PROCEDURES_REQUEST,
} from './constants';
import { GetOrganizationProceduresRequestAction } from './types';

function* getIntersectOrganizations(): any {
  try {
    console.log("===getIntersectOrganizations=====")
    const location: GeoPoint = yield call(getCachedFineGeoPoint);
    console.log("getIntersectOrganizations location==>",location)
    const response = yield call(
      api.organizations.findIntersectOrganizations,
      location,
    );
    console.log("getIntersectOrganizations location response==>",response)
    yield put(getIntersectOrganizationsSuccess(response.data));
    if (response.data.organizations.length === 0) {
      yield* triggerOnboardForInactiveUser();
    }
    if (response.data.organizations.length === 1) {
      yield put(
        toggleSelectOrganization(response.data.organizations[0]?.id as Id),
      );
    }
  } catch (error: any) {
    console.log("getIntersectOrganizationsFailure location error==>",error)
    yield put(getIntersectOrganizationsFailure(handleError(error)));
  }
}

function* getOrganizationProcedures({
  payload,
}: GetOrganizationProceduresRequestAction) {
  try {
    const response: AxiosResponse<OrganizationProcedure[]> = yield call(
      api.organizations.getOrganizationProcedures,
      payload,
    );
    console.log("getOrganizationProcedures success==>",response)
    yield put(getOrganizationProceduresSuccess(response.data));
  } catch (error: any) {
    console.log("getOrganizationProcedures error==>",error)
    yield put(getOrganizationProceduresFailure(handleError(error)));
  }
}

export default function* organizationNotifyScreenSaga() {
  yield takeLatest(
    GET_INTERSECT_ORGANIZATIONS_REQUEST,
    getIntersectOrganizations,
  );
  yield takeLatest(
    GET_ORGANIZATION_PROCEDURES_REQUEST,
    getOrganizationProcedures,
  );
}
