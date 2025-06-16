/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce from 'immer';
import map from 'lodash/map';
import { GET_ORGANIZATIONS_FAILURE, GET_ORGANIZATIONS_SUCCESS, TOGGLE_SELECT_ORGANIZATION, UPDATE_ORGANIZATIONS_FAILURE } from './constants';
export const initialState = {
  organizations: undefined,
  error: false,
  errorMessage: ''
};
const selectOrganizationScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_ORGANIZATIONS_SUCCESS:
      draft.organizations = action.payload;
      break;
    case TOGGLE_SELECT_ORGANIZATION:
      draft.organizations = map(draft.organizations, organization => {
        if (organization.id === action.payload) {
          return {
            ...organization,
            isSelected: !organization.isSelected
          };
        }
        return organization;
      });
      break;
    case GET_ORGANIZATIONS_FAILURE:
    case UPDATE_ORGANIZATIONS_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    default:
  }
}, initialState);
export default selectOrganizationScreenReducer;
//# sourceMappingURL=reducer.js.map