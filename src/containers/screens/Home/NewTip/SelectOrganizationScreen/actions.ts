/**
 *
 * SelectOrganizationScreen actions
 *
 */

import { Id, OrganizationWithArea } from 'incident-code-core';
import { IntersectOrganizationSelection } from 'types';

import {
  GET_INTERSECT_ORGANIZATIONS_FAILURE,
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  SELECT_INCIDENT_ORGANIZATION_FAILURE,
  SELECT_INCIDENT_ORGANIZATION_REQUEST,
  SELECT_INCIDENT_ORGANIZATION_SUCCESS,
  TOGGLE_SELECT_ORGANIZATION,
} from './constants';
import { SelectOrganizationActionTypes } from './types';

export const getIntersectOrganizationsRequest = (): SelectOrganizationActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST,
});

export const getIntersectOrganizationsSuccess = (
  organizations: IntersectOrganizationSelection[],
): SelectOrganizationActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: organizations,
});

export const getIntersectOrganizationsFailure = (
  error: Error,
): SelectOrganizationActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});

export const toggleSelectOrganization = (
  id: Id,
): SelectOrganizationActionTypes => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id,
});

export const addSelectedOrganizationRequest = (): SelectOrganizationActionTypes => ({
  type: SELECT_INCIDENT_ORGANIZATION_REQUEST,
});

export const addSelectedOrganizationSuccess = (
  organization: OrganizationWithArea,
): SelectOrganizationActionTypes => ({
  type: SELECT_INCIDENT_ORGANIZATION_SUCCESS,
  payload: organization,
});

export const addSelectedOrganizationFailure = (
  error: Error,
): SelectOrganizationActionTypes => ({
  type: SELECT_INCIDENT_ORGANIZATION_FAILURE,
  payload: error,
  error: true,
});
