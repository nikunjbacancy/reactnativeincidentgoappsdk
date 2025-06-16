/**
 *
 * OrganizationScreen reducer
 *
 */

import produce from 'immer';
import { DELETE_USER_ORGANIZATION_FAILURE, DELETE_USER_ORGANIZATION_REQUEST, DELETE_USER_ORGANIZATION_SUCCESS, GET_USER_ORGANIZATIONS_FAILURE, GET_USER_ORGANIZATIONS_REQUEST, GET_USER_ORGANIZATIONS_SUCCESS } from './constants';
export const initialState = {
  isLoading: false,
  organizations: []
};
const organizationScreenReducer = produce((draft, action) => {
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
}, initialState);
export default organizationScreenReducer;
//# sourceMappingURL=reducer.js.map