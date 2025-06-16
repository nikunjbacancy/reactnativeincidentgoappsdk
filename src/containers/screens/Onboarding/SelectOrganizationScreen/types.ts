/**
 *
 * SelectOrganizationScreen types
 *
 */

import { Id } from 'incident-code-core';
import { OrganizationSelection } from 'types';

import {
  GET_ORGANIZATIONS_FAILURE,
  GET_ORGANIZATIONS_REQUEST,
  GET_ORGANIZATIONS_SUCCESS,
  TOGGLE_SELECT_ORGANIZATION,
  UPDATE_ORGANIZATIONS_FAILURE,
  UPDATE_ORGANIZATIONS_REQUEST,
  UPDATE_ORGANIZATIONS_SUCCESS,
} from './constants';

export type UpdateOrganizationsPayload = {
  data: OrganizationSelection[];
  fromMenu: boolean;
};

export type UpdateOrganizationsSuccessPayload = {
  data: Id[];
  fromMenu: boolean;
};

export interface SelectOrganizationState {
  organizations?: OrganizationSelection[];
  error: boolean;
  errorMessage: string;
}

export interface GetOrganizationsRequestAction {
  type: typeof GET_ORGANIZATIONS_REQUEST;
  payload?: string;
}

export interface GetOrganizationsSuccessAction {
  type: typeof GET_ORGANIZATIONS_SUCCESS;
  payload: OrganizationSelection[];
}

export interface GetOrganizationsFailureAction {
  type: typeof GET_ORGANIZATIONS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ToggleSelectOrganizationAction {
  type: typeof TOGGLE_SELECT_ORGANIZATION;
  payload: Id;
}

export interface UpdateOrganizationsRequestAction {
  type: typeof UPDATE_ORGANIZATIONS_REQUEST;
  payload: UpdateOrganizationsPayload;
}

export interface UpdateOrganizationsSuccessAction {
  type: typeof UPDATE_ORGANIZATIONS_SUCCESS;
  payload: UpdateOrganizationsSuccessPayload;
}

export interface UpdateOrganizationsFailureAction {
  type: typeof UPDATE_ORGANIZATIONS_FAILURE;
  payload: Error;
  error: boolean;
}

export type SelectOrganizationActionTypes =
  | GetOrganizationsRequestAction
  | GetOrganizationsSuccessAction
  | GetOrganizationsFailureAction
  | UpdateOrganizationsRequestAction
  | UpdateOrganizationsSuccessAction
  | UpdateOrganizationsFailureAction
  | ToggleSelectOrganizationAction;
