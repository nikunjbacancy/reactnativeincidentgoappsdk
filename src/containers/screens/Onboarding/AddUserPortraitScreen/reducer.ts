/**
 *
 * MyAccountScreen reducer
 *
 */

import { PortraitMessageType } from '../../../../components/ImageUpload';
import produce, { Draft } from 'immer';

import {
  CLEAR_MESSAGE_TYPE,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';
import { AddUserPortraitActionTypes, AddUserPortraitState } from './types';

export const initialState: AddUserPortraitState = {
  isUpdating: false,
  uploadMessageType: undefined,
};

const addUserPortraitScreenReducer = produce(
  (draft: Draft<AddUserPortraitState>, action: AddUserPortraitActionTypes) => {
    switch (action.type) {
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
      case CLEAR_MESSAGE_TYPE:
        draft.uploadMessageType = undefined;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default addUserPortraitScreenReducer;
