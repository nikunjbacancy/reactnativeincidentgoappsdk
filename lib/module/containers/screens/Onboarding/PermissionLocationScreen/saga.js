import Screens from '../../../../containers/providers/RoutesProvider/screens';
import NavigatorService from '../../../../utils/navigation';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { locationAlwaysPermissionsSuccess } from './action';
import { LOCATION_ALWAYS_PERMISSIONS_REQUEST } from './constants';
import { getAllGeofenceRequest } from '../../../../utils/location/actions';
import { makeSelectUser } from '../../../../containers/app/selectors';
export function* requestLocationAlwaysPermissionsSaga({
  payload
}) {
  const userData = yield select(makeSelectUser());
  yield put(locationAlwaysPermissionsSuccess());
  yield call(NavigatorService.navigate, Screens.Home.Index);
  yield put(getAllGeofenceRequest(userData.id));
}
export default function* permissionLocationScreenSaga() {
  yield takeLatest(LOCATION_ALWAYS_PERMISSIONS_REQUEST, requestLocationAlwaysPermissionsSaga);
}
//# sourceMappingURL=saga.js.map