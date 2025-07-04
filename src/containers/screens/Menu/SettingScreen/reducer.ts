/**
 *
 * AddContactScreen reducer
 *
 */

import produce, { Draft } from 'immer';


import {
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_DELETE_USER
} from './constants';
import { DeleteAccountState, NotificationActionTypes } from './types';

export const initialState: DeleteAccountState = {
  isLoading: false,
  userData: null
};

const deleteAccountReducer = produce(
  (draft: Draft<DeleteAccountState>, action: NotificationActionTypes) => {
    switch (action.type) {
      case DELETE_USER_REQUEST:
        draft.isLoading = true;
        break;
      case DELETE_USER_SUCCESS:
        console.log("DELETE_USER_SUCCESS")
        draft.isLoading = false;
        draft.userData = action.data;
        break;
      case RESET_DELETE_USER:
        console.log("RESET_DELETE_USER")
        draft.isLoading = false;
        draft.userData = null;
        break;
      case DELETE_USER_FAILURE:
        draft.isLoading = false;
        break;
      default:
    }
  },
  initialState,
);

export default deleteAccountReducer;
