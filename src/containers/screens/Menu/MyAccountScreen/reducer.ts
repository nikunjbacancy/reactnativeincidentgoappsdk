/**
 *
 * MyAccountScreen reducer
 *
 */

import { PortraitMessageType } from '../../../../components/ImageUpload';
import produce, { Draft } from 'immer';

import {
  CLEAR_MESSAGE_TYPE,
  DELETE_PORTRAIT,
  DELETE_PORTRAIT_FAILURE,
  DELETE_PORTRAIT_SUCCESS,
  UPDATE_MY_ACCOUNT_NAME_FAILURE,
  UPDATE_MY_ACCOUNT_NAME_REQUEST,
  UPDATE_MY_ACCOUNT_NAME_SUCCESS,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';
import { MyAccountActionTypes, MyAccountState } from './types';

export const initialState: MyAccountState = {
  isUpdating: false,
  uploadMessageType: undefined,
};

const myAccountScreenReducer = produce(
  (draft: Draft<MyAccountState>, action: MyAccountActionTypes) => {
    switch (action.type) {
      case UPDATE_MY_ACCOUNT_NAME_REQUEST:
        draft.isUpdating = true;
        break;
      case UPDATE_MY_ACCOUNT_NAME_SUCCESS:
      case UPDATE_MY_ACCOUNT_NAME_FAILURE:
        draft.isUpdating = false;
        break;
      case UPDATE_PORTRAIT_REQUEST:
        draft.isUpdating = true;
        break;
      case UPDATE_PORTRAIT_SUCCESS:
        draft.isUpdating = false;
        draft.uploadMessageType = PortraitMessageType.UploadSuccess;
        break;
      case UPDATE_PORTRAIT_FAILURE:
        draft.isUpdating = false;
        draft.uploadMessageType = PortraitMessageType.UploadFail;
        break;
      case DELETE_PORTRAIT:
        draft.isUpdating = true;
        break;
      case DELETE_PORTRAIT_FAILURE:
        draft.isUpdating = false;
        draft.uploadMessageType = PortraitMessageType.DeleteFail;
        break;
      case DELETE_PORTRAIT_SUCCESS:
        draft.isUpdating = false;
        draft.uploadMessageType = PortraitMessageType.DeleteSuccess;
        break;
      case CLEAR_MESSAGE_TYPE:
        draft.uploadMessageType = undefined;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default myAccountScreenReducer;
