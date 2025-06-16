/**
 *
 * AddCommentScreen actions
 *
 */

import {
  ADD_INCIDENT_COMMENT,
  CREATE_TIP_FAILURE,
  CREATE_TIP_REQUEST,
  CREATE_TIP_SUCCESS,
} from './constants';
import { AddCommentActionTypes, CreateTipRequestPayload } from './types';

export const addComment = (comment: string): AddCommentActionTypes => ({
  type: ADD_INCIDENT_COMMENT,
  payload: comment,
});

export const createTipRequest = (
  payload: CreateTipRequestPayload,
): AddCommentActionTypes => ({
  type: CREATE_TIP_REQUEST,
  payload,
});

export const createTipSuccess = (): AddCommentActionTypes => ({
  type: CREATE_TIP_SUCCESS,
});

export const createTipFailure = (error: Error): AddCommentActionTypes => ({
  type: CREATE_TIP_FAILURE,
  payload: error,
  error: true,
});
