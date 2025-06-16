/**
 *
 * TimedEscortScreen actions
 *
 */

import { Id } from 'incident-code-core';
import { IntersectOrganizationSelection, ProcedureSelection } from 'types';

import {
  CLEAR_SELECTIONS,
  GET_INTERSECT_ORGANIZATIONS_FAILURE,
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  GET_ORGANIZATION_PROCEDURES_FAILURE,
  GET_ORGANIZATION_PROCEDURES_REQUEST,
  GET_ORGANIZATION_PROCEDURES_SUCCESS,
  TOGGLE_SELECT_ORGANIZATION,
  TOGGLE_SELECT_PROCEDURE,
} from './constants';
import { TimedEscortActionTypes } from './types';

export const getIntersectOrganizationsRequest = (): TimedEscortActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_REQUEST,
});

export const getIntersectOrganizationsSuccess = (payload: {
  organizations: IntersectOrganizationSelection[];
  organizationGroups: any[];
}): TimedEscortActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  payload,
});

export const getIntersectOrganizationsFailure = (
  error: Error,
): TimedEscortActionTypes => ({
  type: GET_INTERSECT_ORGANIZATIONS_FAILURE,
  payload: error,
  error: true,
});

export const getOrganizationProceduresRequest = (
  id: Id,
): TimedEscortActionTypes => ({
  type: GET_ORGANIZATION_PROCEDURES_REQUEST,
  payload: id,
});

export const getOrganizationProceduresSuccess = (
  procedures: ProcedureSelection[],
): TimedEscortActionTypes => ({
  type: GET_ORGANIZATION_PROCEDURES_SUCCESS,
  payload: procedures,
});

export const getOrganizationProceduresFailure = (
  error: Error,
): TimedEscortActionTypes => ({
  type: GET_ORGANIZATION_PROCEDURES_FAILURE,
  payload: error,
  error: true,
});

export const toggleSelectOrganization = (id: Id): TimedEscortActionTypes => ({
  type: TOGGLE_SELECT_ORGANIZATION,
  payload: id,
});

export const toggleSelectProcedure = (id: Id): TimedEscortActionTypes => ({
  type: TOGGLE_SELECT_PROCEDURE,
  payload: id,
});

export const clearSelections = () => ({ type: CLEAR_SELECTIONS });
