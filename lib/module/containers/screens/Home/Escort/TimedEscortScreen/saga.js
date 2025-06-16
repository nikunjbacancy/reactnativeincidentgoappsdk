/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../../api';
import { triggerOnboardForInactiveUser } from '../../../../../containers/app/saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import { getIntersectOrganizationsFailure, getIntersectOrganizationsSuccess, getOrganizationProceduresFailure, getOrganizationProceduresSuccess, toggleSelectOrganization } from './actions';
import { GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_ORGANIZATION_PROCEDURES_REQUEST } from './constants';
function* getIntersectOrganizations() {
  try {
    console.log("===getIntersectOrganizations=====");
    const location = yield call(getCachedFineGeoPoint);
    console.log("getIntersectOrganizations location==>", location);
    const response = yield call(api.organizations.findIntersectOrganizations, location);
    console.log("getIntersectOrganizations location response==>", response);
    yield put(getIntersectOrganizationsSuccess(response.data));
    if (response.data.organizations.length === 0) {
      yield* triggerOnboardForInactiveUser();
    }
    if (response.data.organizations.length === 1) {
      var _response$data$organi;
      yield put(toggleSelectOrganization((_response$data$organi = response.data.organizations[0]) === null || _response$data$organi === void 0 ? void 0 : _response$data$organi.id));
    }
  } catch (error) {
    console.log("getIntersectOrganizationsFailure location error==>", error);
    yield put(getIntersectOrganizationsFailure(handleError(error)));
  }
}
function* getOrganizationProcedures({
  payload
}) {
  try {
    const response = yield call(api.organizations.getOrganizationProcedures, payload);
    console.log("getOrganizationProcedures success==>", response);
    yield put(getOrganizationProceduresSuccess(response.data));
  } catch (error) {
    console.log("getOrganizationProcedures error==>", error);
    yield put(getOrganizationProceduresFailure(handleError(error)));
  }
}
export default function* organizationNotifyScreenSaga() {
  yield takeLatest(GET_INTERSECT_ORGANIZATIONS_REQUEST, getIntersectOrganizations);
  yield takeLatest(GET_ORGANIZATION_PROCEDURES_REQUEST, getOrganizationProcedures);
}
//# sourceMappingURL=saga.js.map