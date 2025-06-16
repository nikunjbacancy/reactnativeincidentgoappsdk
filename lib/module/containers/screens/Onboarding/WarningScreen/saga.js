import AsyncStorage from '@react-native-async-storage/async-storage';
import * as api from '../../../../api';
import { triggerOnboardForInactiveUser } from '../../../../containers/app/saga';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { PANIC_MODE_KEY } from '../../../../containers/screens/Home/Escort/RecordScreen/constants';
import { PanicMode } from '../../../../containers/screens/Home/Escort/RecordScreen/types';
import { startEscortRequest } from '../../../../containers/screens/Home/Escort/RequestScreen/actions';
import { getIntersectOrganizationsSuccess, toggleSelectOrganization } from '../../../../containers/screens/Home/Escort/SelectOrganizationScreen/actions';
import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getCachedFineGeoPoint } from '../../../../utils/location';
import NavigatorService from '../../../../utils/navigation';
import { duressRequestError, hidePanicInfo } from './actions';
import { SHOW_PANIC_INFO, TRIGGER_DURESS_REQUEST } from './constants';
function* delayHidePanicInfo() {
  yield delay(3000);
  yield put(hidePanicInfo());
}
function* startDuressRequest({
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
    } else {
      var _organizations$;
      yield put(toggleSelectOrganization((_organizations$ = organizations[0]) === null || _organizations$ === void 0 ? void 0 : _organizations$.id));
    }
    yield call(AsyncStorage.setItem, PANIC_MODE_KEY, PanicMode.Active);
    yield put(startEscortRequest(payload.onLocation, 'Duress triggered', true));
    yield call(NavigatorService.navigate, Screens.Home.Escort.EscortRequest, {
      isPanic: true
    });
  } catch (error) {
    yield call(duressRequestError, error.message);
  }
}
export default function* warningScreenSaga() {
  yield takeLatest(SHOW_PANIC_INFO, delayHidePanicInfo);
  yield takeLatest(TRIGGER_DURESS_REQUEST, startDuressRequest);
}
//# sourceMappingURL=saga.js.map