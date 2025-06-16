/**
 *
 * OrganizationScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  DELETE_USER_ORGANIZATION_FAILURE,
  DELETE_USER_ORGANIZATION_REQUEST,
  DELETE_USER_ORGANIZATION_SUCCESS,
  GET_USER_ORGANIZATIONS_FAILURE,
  GET_USER_ORGANIZATIONS_REQUEST,
  GET_USER_ORGANIZATIONS_SUCCESS,
} from './constants';
import { OrganizationActionTypes, OrganizationState } from './types';

export const initialState: OrganizationState = {
  isLoading: false,
  organizations: [],
};

const organizationScreenReducer = produce(
  (draft: Draft<OrganizationState>, action: OrganizationActionTypes) => {
    switch (action.type) {
      case GET_USER_ORGANIZATIONS_REQUEST:
      case DELETE_USER_ORGANIZATION_REQUEST:
        draft.isLoading = true;
        break;
      case GET_USER_ORGANIZATIONS_SUCCESS:
        draft.organizations = action.payload;
        draft.isLoading = false;
        break;
      case DELETE_USER_ORGANIZATION_SUCCESS:
        draft.organizations = action.payload;
        draft.isLoading = false;
        break;
      case GET_USER_ORGANIZATIONS_FAILURE:
      case DELETE_USER_ORGANIZATION_FAILURE:
        draft.isLoading = false;
        break;
      default:
    }
  },
  initialState,
);

export default organizationScreenReducer;
