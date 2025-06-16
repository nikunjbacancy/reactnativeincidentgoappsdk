/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  ADD_PENDING_ESCORT,
  CANCEL_ESCORT_SUCCESS,
  HIDE_CANCEL_ESCORT_MODAL,
  SHOW_CANCEL_ESCORT_MODAL,
  START_ESCORT_FAILURE,
  START_ESCORT_REQUEST,
  START_ESCORT_SUCCESS,
} from './constants';
import { RequestEscortActionTypes, RequestEscortState } from './types';

export const initialState: RequestEscortState = {
  requestingEscort: false,
  error: false,
  errorMessage: '',
  shouldShowCancelEscortModal: false,
  pendingEscort: undefined,
};

const selectOrganizationScreenReducer = produce(
  (draft: Draft<RequestEscortState>, action: RequestEscortActionTypes) => {
    switch (action.type) {
      case START_ESCORT_REQUEST:
        draft.requestingEscort = true;
        break;
      case START_ESCORT_SUCCESS:
        draft.requestingEscort = false;
        break;
      case START_ESCORT_FAILURE:
        draft.error = action.error;
        draft.errorMessage = action.payload.message;
        draft.requestingEscort = false;
        break;
      case SHOW_CANCEL_ESCORT_MODAL:
        draft.shouldShowCancelEscortModal = true;
        break;
      case HIDE_CANCEL_ESCORT_MODAL:
        draft.shouldShowCancelEscortModal = false;
        break;
      case ADD_PENDING_ESCORT:
        draft.pendingEscort = action.payload;
        break;
      case CANCEL_ESCORT_SUCCESS:
        draft.requestingEscort = false;
        draft.error = false;
        draft.errorMessage = '';
        draft.shouldShowCancelEscortModal = false;
        draft.pendingEscort = undefined;
        break;
      default:
    }
  },
  initialState,
);

export default selectOrganizationScreenReducer;
