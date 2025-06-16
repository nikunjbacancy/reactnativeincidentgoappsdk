/**
 *
 * SelectOrganizationScreen saga
 *
 */

import * as api from '../../../../../api';
import { triggerOnboardForInactiveUser } from '../../../../../containers/app/saga';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint } from '../../../../../utils/location';
import NavigatorService from '../../../../../utils/navigation';
import { startEscortRequest } from '../RequestScreen/actions';
import { EscortType } from '../RequestScreen/types';
// import { startChatFailure, startChatSuccess } from '../RecordScreen/actions';
import { getIntersectOrganizationsFailure, getIntersectOrganizationsSuccess, toggleSelectOrganization } from './actions';
import { GET_INTERSECT_ORGANIZATIONS_REQUEST } from './constants';
function* getIntersectOrganizations({
  payload
}) {
  try {
    const location = yield call(getCachedFineGeoPoint);
    const response = yield call(api.organizations.findIntersectOrganizations, location);
    const {
      organizations
    } = response.data;
    yield put(getIntersectOrganizationsSuccess(organizations));
    if (organizations.length === 0) {
      yield* triggerOnboardForInactiveUser();
    }
    if (organizations.length === 1) {
      var _organizations$;
      yield put(toggleSelectOrganization((_organizations$ = organizations[0]) === null || _organizations$ === void 0 ? void 0 : _organizations$.id));
      yield put(startEscortRequest(payload.onLocation));
      yield call(NavigatorService.navigate, Screens.Home.Escort.EscortRequest, {
        isPanic: false,
        requestType: EscortType.Live
      });
    }
  } catch (error) {
    yield put(getIntersectOrganizationsFailure(handleError(error)));
  }
}
export default function* organizationNotifyScreenSaga() {
  yield takeLatest(GET_INTERSECT_ORGANIZATIONS_REQUEST, getIntersectOrganizations);
}
//# sourceMappingURL=saga.js.map