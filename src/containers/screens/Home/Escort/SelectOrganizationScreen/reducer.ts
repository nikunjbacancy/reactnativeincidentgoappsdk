/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce, { Draft } from 'immer';
import map from 'lodash/map';

import {
  GET_INTERSECT_ORGANIZATIONS_FAILURE,
  GET_INTERSECT_ORGANIZATIONS_REQUEST,
  GET_INTERSECT_ORGANIZATIONS_SUCCESS,
  TOGGLE_SELECT_ORGANIZATION,
} from './constants';
import {
  SelectOrganizationActionTypes,
  SelectOrganizationState,
} from './types';

export const initialState: SelectOrganizationState = {
  organizations: undefined,
  organizationGroups: [],
  requestingOrganizations: true,
  error: false,
  errorMessage: '',
};

const selectOrganizationScreenReducer = produce(
  (
    draft: Draft<SelectOrganizationState>,
    action: SelectOrganizationActionTypes,
  ) => {
    switch (action.type) {
      case GET_INTERSECT_ORGANIZATIONS_REQUEST:
        draft.requestingOrganizations = true;
        break;
      case GET_INTERSECT_ORGANIZATIONS_SUCCESS:
        draft.requestingOrganizations = false;
        draft.organizations = action.payload.organizations;
        break;
      case TOGGLE_SELECT_ORGANIZATION:
        draft.error = false;
        draft.organizations = map(draft.organizations, organization => {
          if (organization.id === action.payload) {
            return {
              ...organization,
              isSelected: !organization.isSelected,
            };
          }
          return {
            ...organization,
            isSelected: false,
          };
        });
        break;
      case GET_INTERSECT_ORGANIZATIONS_FAILURE:
        draft.error = action.error;
        draft.errorMessage = action.payload.message;
        draft.requestingOrganizations = false;
        break;
      default:
    }
  },
  initialState,
);

export default selectOrganizationScreenReducer;
