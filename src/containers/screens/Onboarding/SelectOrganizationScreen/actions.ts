/**
 *
 * SelectOrganizationScreen actions
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
import {
  SelectOrganizationActionTypes,
  UpdateOrganizationsPayload,
  UpdateOrganizationsSuccessPayload,
} from './types';

export const getOrganizationsRequest = (
  keyword?: string,
): SelectOrganizationActionTypes => ({
  type: GET_ORGANIZATIONS_REQUEST,
  payload: keyword,
});

export const getOrganizationsSuccess = (
  organizations: OrganizationSelection[],
): SelectOrganizationActionTypes => ({
  type: GET_ORGANIZATIONS_SUCCESS,
  payload: organizations,
});

export const getOrganizationsFailure = (
  error: Error,
): SelectOrganizationActionTypes => ({
  type: GET_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});

export const toggleSelectOrganization = (
  id: Id,
): SelectOrganizationActionTypes => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id,
});

export const updateOrganizationsRequest = (
  payload: UpdateOrganizationsPayload,
): SelectOrganizationActionTypes => ({
  type: UPDATE_ORGANIZATIONS_REQUEST,
  payload,
});

export const updateOrganizationsSuccess = (
  payload: UpdateOrganizationsSuccessPayload,
): SelectOrganizationActionTypes => ({
  type: UPDATE_ORGANIZATIONS_SUCCESS,
  payload,
});

export const updateOrganizationsFailure = (
  error: Error,
): SelectOrganizationActionTypes => ({
  type: UPDATE_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});
