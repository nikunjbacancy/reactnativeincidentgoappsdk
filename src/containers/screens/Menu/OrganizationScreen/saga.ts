/**
 *
 * OrganizationScreen saga
 *
 */

import * as api from '../../../../api';
import { AxiosResponse } from 'axios';
import { Id, Organization } from 'incident-code-core';
import map from 'lodash/map';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';

import {
  deleteUserOrganizationFailure,
  deleteUserOrganizationSuccess,
  getUserOrganizationsFailure,
  getUserOrganizationsSuccess,
} from './actions';
import {
  DELETE_USER_ORGANIZATION_REQUEST,
  GET_USER_ORGANIZATIONS_REQUEST,
} from './constants';
import { DeleteUserOrganizationRequestAction } from './types';

export function* getUserOrganizations() {
  try {
    const response: AxiosResponse<Organization[]> = yield call(
      api.organizations.getUserOrganizations,
    );
    yield put(getUserOrganizationsSuccess(response.data));
  } catch (error: any) {
    yield put(getUserOrganizationsFailure(handleError(error)));
  }
}

export function* deleteUserOrganization({
  payload,
}: DeleteUserOrganizationRequestAction) {
  try {
    const organizationIds = map(payload, 'id') as Id[];
    yield call(api.user.updateOrganizations, organizationIds);
    yield put(deleteUserOrganizationSuccess(payload));
  } catch (error: any) {
    yield put(deleteUserOrganizationFailure(handleError(error)));
  }
}

export default function* organizationScreenSaga() {
  yield takeLatest(GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
  yield takeLatest(DELETE_USER_ORGANIZATION_REQUEST, deleteUserOrganization);
}
