/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce, { Draft } from 'immer';
import map from 'lodash/map';

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
import { TimedEscortActionTypes, TimedEscortState } from './types';

export const initialState: TimedEscortState = {
  organizations: undefined,
  requestingOrganizations: true,
  requestingProcedures: false,
  procedures: undefined,
  error: false,
  errorMessage: '',
};

const timedEscortScreenReducer = produce(
  (draft: Draft<TimedEscortState>, action: TimedEscortActionTypes) => {
    switch (action.type) {
      case GET_INTERSECT_ORGANIZATIONS_REQUEST:
        draft.requestingOrganizations = true;
        draft.organizations = [];
        draft.organizationGroups = [];
        break;
      case GET_INTERSECT_ORGANIZATIONS_SUCCESS:
        draft.requestingOrganizations = false;
        draft.organizations = action.payload.organizations;
        draft.organizationGroups = map(
          action.payload.organizationGroups,
          (group: any) => {
            // eslint-disable-next-line no-underscore-dangle
            group.id = group._id;
            return group;
          },
        );
        break;
      case GET_ORGANIZATION_PROCEDURES_REQUEST:
        draft.requestingOrganizations = true;
        break;
      case GET_ORGANIZATION_PROCEDURES_SUCCESS:
        draft.requestingOrganizations = false;
        draft.procedures = action.payload;
        break;
      case TOGGLE_SELECT_ORGANIZATION:
        draft.error = false;
        draft.organizations = map(draft.organizations, organization => {
          if (organization.id === action.payload) {
            return {
              ...organization,
              isSelected: true,
            };
          }
          return {
            ...organization,
            isSelected: false,
          };
        });
        draft.organizationGroups = map(
          draft.organizationGroups,
          organization => {
            if (organization.organization === action.payload) {
              return {
                ...organization,
                isSelected: true,
              };
            }
            return {
              ...organization,
              isSelected: false,
            };
          },
        );
        break;
      case TOGGLE_SELECT_PROCEDURE:
        draft.error = false;
        draft.procedures = map(draft.procedures, procedure => {
          if (procedure.id === action.payload) {
            return {
              ...procedure,
              isSelected: !procedure.isSelected,
            };
          }
          return {
            ...procedure,
            isSelected: false,
          };
        });
        break;
      case GET_INTERSECT_ORGANIZATIONS_FAILURE:
        draft.error = action.error;
        draft.errorMessage = action.payload.message;
        draft.requestingOrganizations = false;
        break;
      case GET_ORGANIZATION_PROCEDURES_FAILURE:
        draft.error = action.error;
        draft.errorMessage = action.payload.message;
        draft.requestingProcedures = false;
        break;
      case CLEAR_SELECTIONS:
        draft.organizations = map(draft.organizations, org => ({
          ...org,
          isSelected: false,
        }));
        draft.procedures = map(draft.procedures, procedure => ({
          ...procedure,
          isSelected: false,
        }));
        break;
      default:
    }
  },
  initialState,
);

export default timedEscortScreenReducer;
