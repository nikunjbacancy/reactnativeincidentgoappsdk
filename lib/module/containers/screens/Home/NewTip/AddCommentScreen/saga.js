/**
 *
 * AddCommentScreen saga
 *
 */

import * as api from '../../../../../api';
import { makeSelectNewTipIncidentActionRequest, makeSelectNewTipOrganization } from '../../../../../containers/app/selectors';
import { removeScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';
import { deleteIncidentSuccess, showTipCreatedModal } from '../VideoRecordScreen/actions';
import { CreateTipMode } from '../VideoRecordScreen/types';
import { addComment, createTipFailure, createTipSuccess } from './actions';
import { CREATE_TIP_REQUEST } from './constants';
function* createTip({
  payload
}) {
  yield put(addComment(payload.comment));
  const incidentActionRequest = yield select(makeSelectNewTipIncidentActionRequest());
  const organization = yield select(makeSelectNewTipOrganization());
  try {
    yield call(api.incidents.doIncidentAction, incidentActionRequest);
    yield put(deleteIncidentSuccess());
    yield put(removeScreenAction());
    const response = yield call(api.incidents.getIncident, incidentActionRequest.id);
    const incident = response.data;
    if (!incident.hasChat && payload.createTipMode === CreateTipMode.Chat) {
      const location = yield call(getCachedFineGeoPoint);
      yield call(api.incidents.startChat, {
        incident: incident.id,
        organization: organization.id,
        category: incident.category,
        comment: incident.comment,
        location
      });
      incident.hasChat = true;
    }
    yield put(createTipSuccess());
    yield put(showTipCreatedModal({
      incident,
      organizationName: organization.name
    }));
    yield call(NavigatorService.popToTop);
  } catch (error) {
    yield put(createTipFailure(handleError(error)));
  }
}
export default function* addCommentScreenSaga() {
  yield takeLatest(CREATE_TIP_REQUEST, createTip);
}
//# sourceMappingURL=saga.js.map