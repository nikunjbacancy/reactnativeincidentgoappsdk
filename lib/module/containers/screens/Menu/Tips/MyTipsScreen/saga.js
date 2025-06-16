/**
 *
 * MyTipsScreen saga
 *
 */

import * as api from '../../../../../api';
import { call, put, select, spawn, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';
import { addPageIndex, getTipsFailure, getTipsSuccess, setHasMoreData } from './actions';
import { GET_TIPS_REQUEST } from './constants';
import { makeSelectTips } from './selectors';
import { TipStatus } from './types';
function* getTips({
  payload
}) {
  yield spawn(getTipsInParallel, payload);
}
function* getTipsInParallel(payload) {
  const {
    tipStatus,
    paging
  } = payload;
  const tips = yield select(makeSelectTips());
  const query = {
    pagination: paging ? {
      index: tips[tipStatus].pageIndex
    } : {
      index: 0
    },
    filter: {
      isResolved: tipStatus === TipStatus.Closed
    }
  };
  try {
    var _response$data$pagina;
    const response = yield call(api.incidents.getIncidents, query);
    yield put(setHasMoreData({
      data: ((_response$data$pagina = response.data.pagination) === null || _response$data$pagina === void 0 ? void 0 : _response$data$pagina.hasMore) || false,
      tipStatus
    }));
    if (paging) {
      yield put(addPageIndex(tipStatus));
    }
    yield put(getTipsSuccess({
      data: response.data.data || [],
      tipStatus,
      paging
    }));
  } catch (error) {
    yield put(getTipsFailure(handleError(error)));
  }
}
export default function* myTipsScreenSaga() {
  yield takeLatest(GET_TIPS_REQUEST, getTips);
}
//# sourceMappingURL=saga.js.map