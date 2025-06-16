/**
 *
 * MyTipsScreen actions
 *
 */

import {
  ADD_PAGE_INDEX,
  GET_TIPS_FAILURE,
  GET_TIPS_REQUEST,
  GET_TIPS_SUCCESS,
  RESET_STATE,
  SET_HAS_MORE_DATA,
} from './constants';
import {
  GetTipsRequestPayload,
  GetTipSuccessPayload,
  HasMoreDataPayload,
  MyTipsActionTypes,
  TipStatus,
} from './types';

export const getTipsRequest = (
  payload: GetTipsRequestPayload,
): MyTipsActionTypes => ({
  type: GET_TIPS_REQUEST,
  payload,
});

export const getTipsSuccess = (
  payload: GetTipSuccessPayload,
): MyTipsActionTypes => ({
  type: GET_TIPS_SUCCESS,
  payload,
});

export const getTipsFailure = (error: Error): MyTipsActionTypes => ({
  type: GET_TIPS_FAILURE,
  payload: error,
  error: true,
});

export const addPageIndex = (tipStatus: TipStatus): MyTipsActionTypes => ({
  type: ADD_PAGE_INDEX,
  payload: tipStatus,
});

export const setHasMoreData = (
  payload: HasMoreDataPayload,
): MyTipsActionTypes => ({
  type: SET_HAS_MORE_DATA,
  payload,
});

export const resetState = (): MyTipsActionTypes => ({
  type: RESET_STATE,
});
