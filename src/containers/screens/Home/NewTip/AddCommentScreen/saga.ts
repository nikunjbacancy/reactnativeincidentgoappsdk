/**
 *
 * AddCommentScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import {
  makeSelectNewTipIncidentActionRequest,
  makeSelectNewTipOrganization,
} from '../../../../../containers/app/selectors';
import { removeScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import {
  Id,
  Incident,
  IncidentActionRequest,
  Organization,
} from 'incident-code-core';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';

import {
  deleteIncidentSuccess,
  showTipCreatedModal,
} from '../VideoRecordScreen/actions';
import { CreateTipMode } from '../VideoRecordScreen/types';
import { addComment, createTipFailure, createTipSuccess } from './actions';
import { CREATE_TIP_REQUEST } from './constants';
import { CreateTipRequestAction } from './types';

function* createTip({ payload }: CreateTipRequestAction): any {
  yield put(addComment(payload.comment));
  const incidentActionRequest: IncidentActionRequest = yield select(
    makeSelectNewTipIncidentActionRequest(),
  );
  const organization: Organization = yield select(
    makeSelectNewTipOrganization(),
  );
  try {
    yield call(api.incidents.doIncidentAction, incidentActionRequest);
    yield put(deleteIncidentSuccess());
    yield put(removeScreenAction());
    const response: AxiosResponse<Incident> = yield call(
      api.incidents.getIncident,
      incidentActionRequest.id as Id,
    );

    const incident = response.data;

    if (!incident.hasChat && payload.createTipMode === CreateTipMode.Chat) {
      const location = yield call(getCachedFineGeoPoint);
      yield call(api.incidents.startChat, {
        incident: incident.id as Id,
        organization: organization.id as Id,
        category: incident.category,
        comment: incident.comment,
        location,
      });

      incident.hasChat = true;
    }

    yield put(createTipSuccess());

    yield put(
      showTipCreatedModal({
        incident,
        organizationName: organization.name,
      }),
    );
    yield call(NavigatorService.popToTop);
  } catch (error: any) {
    yield put(createTipFailure(handleError(error)));
  }
}

export default function* addCommentScreenSaga() {
  yield takeLatest(CREATE_TIP_REQUEST, createTip);
}
