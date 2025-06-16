/**
 *
 * SelectOrganizationScreen types
 *
 */

import { Id } from 'incident-code-core';
import {
  IntersectOrganizationSelection,
  OrganizationSelection,
  ProcedureSelection,
} from 'types';

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

export interface TimedEscortState {
  organizations?: OrganizationSelection[];
  organizationGroups?: any[];
  requestingOrganizations: boolean;
  error: boolean;
  errorMessage: string;
  requestingProcedures: boolean;
  procedures?: ProcedureSelection[];
}

export interface GetIntersectOrganizationsRequestAction {
  type: typeof GET_INTERSECT_ORGANIZATIONS_REQUEST;
}

export interface GetIntersectOrganizationsSuccessAction {
  type: typeof GET_INTERSECT_ORGANIZATIONS_SUCCESS;
  payload: {
    organizations: IntersectOrganizationSelection[];
    organizationGroups: any[];
  };
}

export interface GetIntersectOrganizationsFailureAction {
  type: typeof GET_INTERSECT_ORGANIZATIONS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface GetOrganizationProceduresRequestAction {
  type: typeof GET_ORGANIZATION_PROCEDURES_REQUEST;
  payload: Id;
}

export interface GetOrganizationProceduresSuccessAction {
  type: typeof GET_ORGANIZATION_PROCEDURES_SUCCESS;
  payload: ProcedureSelection[];
}

export interface GetOrganizationProceduresFailureAction {
  type: typeof GET_ORGANIZATION_PROCEDURES_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ToggleSelectOrganizationAction {
  type: typeof TOGGLE_SELECT_ORGANIZATION;
  payload: Id;
}

export interface ToggleSelectProcedureAction {
  type: typeof TOGGLE_SELECT_PROCEDURE;
  payload: Id;
}

export interface ClearSelectionsAction {
  type: typeof CLEAR_SELECTIONS;
}

export type TimedEscortActionTypes =
  | GetIntersectOrganizationsRequestAction
  | GetIntersectOrganizationsSuccessAction
  | GetIntersectOrganizationsFailureAction
  | ToggleSelectOrganizationAction
  | GetOrganizationProceduresRequestAction
  | GetOrganizationProceduresFailureAction
  | GetOrganizationProceduresSuccessAction
  | ToggleSelectProcedureAction
  | ClearSelectionsAction;
