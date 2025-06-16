/* eslint-disable import/prefer-default-export */
/**
 *
 * MyTipsScreen types
 *
 */

import { Incident } from 'incident-code-core';

import {
  ADD_PAGE_INDEX,
  GET_TIPS_FAILURE,
  GET_TIPS_REQUEST,
  GET_TIPS_SUCCESS,
  RESET_STATE,
  SET_HAS_MORE_DATA,
} from './constants';

export enum TipStatus {
  Active = 'Active',
  Closed = 'Closed',
}

export type Tips = {
  [TipStatus.Active]: {
    data: Incident[];
    pageIndex: number;
    hasMoreData: boolean;
  };
  [TipStatus.Closed]: {
    data: Incident[];
    pageIndex: number;
    hasMoreData: boolean;
  };
};

export type HasMoreDataPayload = {
  data: boolean;
  tipStatus: TipStatus;
};

export type GetTipSuccessPayload = {
  data: Incident[];
  tipStatus: TipStatus;
  paging: boolean;
};

export type GetTipsRequestPayload = {
  tipStatus: TipStatus;
  paging: boolean;
};

export interface MyTipsState {
  tips: Tips;
  isLoading: boolean;
  isDeleting: boolean;
}

export interface GetTipsRequestAction {
  type: typeof GET_TIPS_REQUEST;
  payload: GetTipsRequestPayload;
}

export interface GetTipsSuccessAction {
  type: typeof GET_TIPS_SUCCESS;
  payload: GetTipSuccessPayload;
}

export interface GetTipsFailureAction {
  type: typeof GET_TIPS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface AddPageIndexAction {
  type: typeof ADD_PAGE_INDEX;
  payload: TipStatus;
}

export interface SetHasMoreDataAction {
  type: typeof SET_HAS_MORE_DATA;
  payload: HasMoreDataPayload;
}

export interface ResetStateAction {
  type: typeof RESET_STATE;
}

export type MyTipsActionTypes =
  | GetTipsRequestAction
  | GetTipsSuccessAction
  | GetTipsFailureAction
  | AddPageIndexAction
  | SetHasMoreDataAction
  | ResetStateAction;
