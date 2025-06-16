/**
 *
 * AddCommentScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  CREATE_TIP_FAILURE,
  CREATE_TIP_REQUEST,
  CREATE_TIP_SUCCESS,
} from './constants';
import { AddCommentActionTypes, AddCommentState } from './types';

export const initialState: AddCommentState = {
  creatingTip: false,
};

const addCommentScreenReducer = produce(
  (draft: Draft<AddCommentState>, action: AddCommentActionTypes) => {
    switch (action.type) {
      case CREATE_TIP_REQUEST:
        draft.creatingTip = true;
        break;
      case CREATE_TIP_SUCCESS:
      case CREATE_TIP_FAILURE:
        draft.creatingTip = false;
        break;
      default:
    }
  },
  initialState,
);

export default addCommentScreenReducer;
