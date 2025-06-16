/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../api';
import { makeSelectUser } from '../../../../containers/app/selectors';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { getUserOrganizationsRequest } from '../../../../containers/screens/Menu/OrganizationScreen/actions';
import includes from 'lodash/includes';
import map from 'lodash/map';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import NavigatorService from '../../../../utils/navigation';
import { getOrganizationsFailure, getOrganizationsSuccess, updateOrganizationsFailure, updateOrganizationsSuccess } from './actions';
import { GET_ORGANIZATIONS_REQUEST, UPDATE_ORGANIZATIONS_REQUEST } from './constants';
export function* getOrganizations({
  payload
}) {
  try {
    const response = yield call(api.organizations.getOrganizations, payload);
    const user = yield select(makeSelectUser());
    const organizations = map(response.data.data, organization => ({
      ...organization,
      isSelected: includes(user.organizations, organization.id)
    }));
    yield put(getOrganizationsSuccess(organizations));
  } catch (error) {
    yield put(getOrganizationsFailure(handleError(error)));
  }
}
export function* updateOrganizations({
  payload
}) {
  try {
    const organizationIds = map(payload.data, 'id');
    yield call(api.user.updateOrganizations, organizationIds);
    yield put(updateOrganizationsSuccess({
      data: organizationIds,
      fromMenu: payload.fromMenu
    }));
    if (payload.fromMenu) {
      yield put(getUserOrganizationsRequest());
      return yield call(NavigatorService.back);
    }
    yield call(NavigatorService.navigate, Screens.Onboarding.Permission);
  } catch (error) {
    yield put(updateOrganizationsFailure(handleError(error)));
  }
}
export default function* selectOrganizationScreenSaga() {
  yield takeLatest(GET_ORGANIZATIONS_REQUEST, getOrganizations);
  yield takeLatest(UPDATE_ORGANIZATIONS_REQUEST, updateOrganizations);
}
//# sourceMappingURL=saga.js.map