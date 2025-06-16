/**
 *
 * OrganizationScreen actions
 *
 */

import { Organization } from 'incident-code-core';

import {
  DELETE_USER_ORGANIZATION_FAILURE,
  DELETE_USER_ORGANIZATION_REQUEST,
  DELETE_USER_ORGANIZATION_SUCCESS,
  GET_USER_ORGANIZATIONS_FAILURE,
  GET_USER_ORGANIZATIONS_REQUEST,
  GET_USER_ORGANIZATIONS_SUCCESS,
} from './constants';
import { OrganizationActionTypes } from './types';

export const getUserOrganizationsRequest = (): OrganizationActionTypes => ({
  type: GET_USER_ORGANIZATIONS_REQUEST,
});

export const getUserOrganizationsSuccess = (
  organizations: Organization[],
): OrganizationActionTypes => ({
  type: GET_USER_ORGANIZATIONS_SUCCESS,
  payload: organizations,
});

export const getUserOrganizationsFailure = (
  error: Error,
): OrganizationActionTypes => ({
  type: GET_USER_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});

export const deleteUserOrganizationRequest = (
  organizations: Organization[],
): OrganizationActionTypes => ({
  type: DELETE_USER_ORGANIZATION_REQUEST,
  payload: organizations,
});

export const deleteUserOrganizationSuccess = (
  organizations: Organization[],
): OrganizationActionTypes => ({
  type: DELETE_USER_ORGANIZATION_SUCCESS,
  payload: organizations,
});

export const deleteUserOrganizationFailure = (
  error: Error,
): OrganizationActionTypes => ({
  type: DELETE_USER_ORGANIZATION_FAILURE,
  payload: error,
  error: true,
});
