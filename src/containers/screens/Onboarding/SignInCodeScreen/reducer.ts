/**
 *
 * MyAccountScreen reducer
 *
 */
import produce, { Draft } from 'immer';

import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from './constants';

import { SignInCodeActionTypes, SendCodeState } from './types';

export const initialState: SendCodeState = {
  newUser: false,
  token:''
};

const SignInCodeScreenReducer = produce(
  (draft: Draft<SendCodeState>, action: SignInCodeActionTypes) => {
    console.log("sign in code screen action-->",action)
    console.log("sign in code screen draft -->",draft)
    switch (action.type) {
      case LOGIN_REQUEST:
        // draft.isUpdating = true;
        break;
      case LOGIN_SUCCESS:
        // draft.isUpdating = false;
        // draft.uploadMessageType = PortraitMessageType.UploadSuccess;
        break;
      case LOGIN_FAILURE:
        // draft.isUpdating = false;
        // draft.uploadMessageType = PortraitMessageType.UploadFail;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default SignInCodeScreenReducer;
