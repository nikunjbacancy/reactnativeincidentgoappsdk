/**
 *
 * SelectCategoryScreen reducer
 *
 */

import produce from 'immer';
import { DELETE_INCIDENT_SUCCESS } from '../VideoRecordScreen/constants';
import { SELECT_INCIDENT_CATEGORY } from './constants';
export const initialState = {
  category: undefined
};
const incidentCategoryScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case SELECT_INCIDENT_CATEGORY:
      draft.category = action.payload;
      break;
    case DELETE_INCIDENT_SUCCESS:
      draft.category = undefined;
      break;
    default:
  }
}, initialState);
export default incidentCategoryScreenReducer;
//# sourceMappingURL=reducer.js.map