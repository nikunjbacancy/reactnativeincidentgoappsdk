/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce from 'immer';
import map from 'lodash/map';
import { GET_INTERSECT_ORGANIZATIONS_FAILURE, GET_INTERSECT_ORGANIZATIONS_REQUEST, GET_INTERSECT_ORGANIZATIONS_SUCCESS, SELECT_INCIDENT_ORGANIZATION_FAILURE, TOGGLE_SELECT_ORGANIZATION } from './constants';
export const initialState = {
  organizations: undefined,
  requestingOrganizations: false,
  error: false,
  errorMessage: ''
};
const organizationNotifyScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_INTERSECT_ORGANIZATIONS_REQUEST:
      draft.requestingOrganizations = true;
      break;
    case GET_INTERSECT_ORGANIZATIONS_SUCCESS:
      draft.requestingOrganizations = false;
      draft.organizations = action.payload.organizations;
      break;
    case TOGGLE_SELECT_ORGANIZATION:
      draft.organizations = map(draft.organizations, organization => {
        if (organization.id === action.payload) {
          return {
            ...organization,
            isSelected: !organization.isSelected
          };
        }
        return {
          ...organization,
          isSelected: false
        };
      });
      break;
    case GET_INTERSECT_ORGANIZATIONS_FAILURE:
    case SELECT_INCIDENT_ORGANIZATION_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingOrganizations = false;
      break;
    default:
  }
}, initialState);
export default organizationNotifyScreenReducer;
//# sourceMappingURL=reducer.js.map