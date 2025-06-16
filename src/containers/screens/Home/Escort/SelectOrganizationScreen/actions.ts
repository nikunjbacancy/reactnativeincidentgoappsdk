/**
 *
 * SelectOrganizationScreen actions
 *
 */

import { Id } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { IntersectOrganizationSelection } from 'types';

import {
  GET_INTERSECT_ORGANIZATIONS_FAILURE,
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  TOGGLE_SELECT_ORGANIZATION,
} from './constants';
import { SelectOrganizationActionTypes } from './types';

export const getIntersectOrganizationsRequest = (
  onLocation: (location: Location) => void,
): SelectOrganizationActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST,
  payload: { onLocation },
});

export const getIntersectOrganizationsSuccess = (
  organizations: IntersectOrganizationSelection[],
): any => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload: { organizations },
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
