/**
 *
 * MyTipsScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import { Incident, QueryResult, QuerySpecification } from 'incident-code-core';
import { call, put, select, spawn, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';

import {
  addPageIndex,
  getTipsFailure,
  getTipsSuccess,
  setHasMoreData,
} from './actions';
import { GET_TIPS_REQUEST } from './constants';
import { makeSelectTips } from './selectors';
import {
  GetTipsRequestAction,
  GetTipsRequestPayload,
  Tips,
  TipStatus,
} from './types';

function* getTips({ payload }: GetTipsRequestAction) {
  yield spawn(getTipsInParallel, payload);
}

function* getTipsInParallel(payload: GetTipsRequestPayload) {
  const { tipStatus, paging } = payload;
  const tips: Tips = yield select(makeSelectTips());
  const query: QuerySpecification = {
    pagination: paging
      ? {
          index: tips[tipStatus].pageIndex,
        }
      : { index: 0 },
    filter: {
      isResolved: tipStatus === TipStatus.Closed,
    },
  };
  try {
    const response: AxiosResponse<QueryResult<Incident>> = yield call(
      api.incidents.getIncidents,
      query,
    );
    yield put(
      setHasMoreData({
        data: response.data.pagination?.hasMore || false,
        tipStatus,
      }),
    );
    if (paging) {
      yield put(addPageIndex(tipStatus));
    }
    yield put(
      getTipsSuccess({ data: response.data.data || [], tipStatus, paging }),
    );
  } catch (error: any) {
    yield put(getTipsFailure(handleError(error)));
  }
}

export default function* myTipsScreenSaga() {
  yield takeLatest(GET_TIPS_REQUEST, getTips);
}
