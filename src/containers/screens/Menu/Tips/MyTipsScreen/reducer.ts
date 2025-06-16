/**
 *
 * MyTipsScreen reducer
 *
 */

import produce, { Draft } from 'immer';
import uniqBy from 'lodash/uniqBy';

import {
  ADD_PAGE_INDEX,
  GET_TIPS_FAILURE,
  GET_TIPS_REQUEST,
  GET_TIPS_SUCCESS,
  RESET_STATE,
  SET_HAS_MORE_DATA,
} from './constants';
import { MyTipsActionTypes, MyTipsState, TipStatus } from './types';

export const initialState: MyTipsState = {
  tips: {
    [TipStatus.Active]: {
      data: [],
      pageIndex: 0,
      hasMoreData: false,
    },
    [TipStatus.Closed]: {
      data: [],
      pageIndex: 0,
      hasMoreData: false,
    },
  },
  isLoading: true,
  isDeleting: false,
};

const myTipsScreenReducer = produce(
  (draft: Draft<MyTipsState>, action: MyTipsActionTypes) => {
    switch (action.type) {
      case GET_TIPS_REQUEST:
        draft.isLoading = true;
        break;
      case GET_TIPS_SUCCESS:
        if (action.payload.paging) {
          draft.tips[action.payload.tipStatus].data = uniqBy(
            [
              ...draft.tips[action.payload.tipStatus].data,
              ...action.payload.data,
            ],
            'id',
          );
        } else {
          draft.tips[action.payload.tipStatus].data = action.payload.data;
        }
        draft.isLoading = false;
        break;
      case GET_TIPS_FAILURE:
        draft.isLoading = false;
        break;
      case ADD_PAGE_INDEX:
        if (draft.tips[action.payload].hasMoreData) {
          draft.tips[action.payload].pageIndex += 1;
        }
        break;
      case SET_HAS_MORE_DATA:
        draft.tips[action.payload.tipStatus].hasMoreData = action.payload.data;
        break;
      case RESET_STATE:
        draft.tips = initialState.tips;
        draft.isLoading = initialState.isLoading;
        draft.isDeleting = initialState.isDeleting;
        break;
      default:
    }
  },
  initialState,
);

export default myTipsScreenReducer;
