/**
 *
 * OrganizationScreen saga
 *
 */

import * as api from '../../../../api';
import map from 'lodash/map';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import { deleteUserOrganizationFailure, deleteUserOrganizationSuccess, getUserOrganizationsFailure, getUserOrganizationsSuccess } from './actions';
import { DELETE_USER_ORGANIZATION_REQUEST, GET_USER_ORGANIZATIONS_REQUEST } from './constants';
export function* getUserOrganizations() {
  try {
    const response = yield call(api.organizations.getUserOrganizations);
    yield put(getUserOrganizationsSuccess(response.data));
  } catch (error) {
    yield put(getUserOrganizationsFailure(handleError(error)));
  }
}
export function* deleteUserOrganization({
  payload
}) {
  try {
    const organizationIds = map(payload, 'id');
    yield call(api.user.updateOrganizations, organizationIds);
    yield put(deleteUserOrganizationSuccess(payload));
  } catch (error) {
    yield put(deleteUserOrganizationFailure(handleError(error)));
  }
}
export default function* organizationScreenSaga() {
  yield takeLatest(GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
  yield takeLatest(DELETE_USER_ORGANIZATION_REQUEST, deleteUserOrganization);
}
//# sourceMappingURL=saga.js.map