/**
 *
 * MyAccountScreen reducer
 *
 */
import produce, { Draft } from 'immer';

import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './constants';

import { RegisterUserActionTypes, RegisterUserState } from './types';

export const initialState: RegisterUserState = {
  access_token: '',
};

const RegisterUserScreenReducer = produce(
  (draft: Draft<RegisterUserState>, action: RegisterUserActionTypes) => {
    console.log(draft)
    switch (action.type) {
      case REGISTER_USER_REQUEST:
        // draft.isUpdating = true;
        break;
      case REGISTER_USER_SUCCESS:
        // draft.isUpdating = false;
        // draft.uploadMessageType = PortraitMessageType.UploadSuccess;
        break;
      case REGISTER_USER_FAILURE:
        // draft.isUpdating = false;
        // draft.uploadMessageType = PortraitMessageType.UploadFail;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default RegisterUserScreenReducer;
