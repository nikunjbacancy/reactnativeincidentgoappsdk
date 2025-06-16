/**
 *
 * AddUserPortraitScreen types
 *
 */

import { PortraitMessageType } from '../../../../components/ImageUpload';

import {
  CLEAR_MESSAGE_TYPE,
  UPDATE_PORTRAIT_FAILURE,
  UPDATE_PORTRAIT_REQUEST,
  UPDATE_PORTRAIT_SUCCESS,
} from './constants';

export interface AddUserPortraitState {
  isUpdating: boolean;
  uploadMessageType: PortraitMessageType | undefined;
}

export interface UpdatePortraitRequestAction {
  type: typeof UPDATE_PORTRAIT_REQUEST;
  payload: string;
}

export interface UpdatePortraitSuccessAction {
  type: typeof UPDATE_PORTRAIT_SUCCESS;
}

export interface UpdatePortraitFailureAction {
  type: typeof UPDATE_PORTRAIT_FAILURE;
  payload: { error: Error };
  error: boolean;
}

export interface ClearMessageTypeAction {
  type: typeof CLEAR_MESSAGE_TYPE;
}

export type AddUserPortraitActionTypes =
  | UpdatePortraitRequestAction
  | UpdatePortraitSuccessAction
  | UpdatePortraitFailureAction
  | ClearMessageTypeAction;
