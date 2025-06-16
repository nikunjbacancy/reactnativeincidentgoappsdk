/**
 *
 * AddCommentScreen reducer
 *
 */

import produce from 'immer';
import { CREATE_TIP_FAILURE, CREATE_TIP_REQUEST, CREATE_TIP_SUCCESS } from './constants';
export const initialState = {
  creatingTip: false
};
const addCommentScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case CREATE_TIP_REQUEST:
      draft.creatingTip = true;
      break;
    case CREATE_TIP_SUCCESS:
    case CREATE_TIP_FAILURE:
      draft.creatingTip = false;
      break;
    default:
  }
}, initialState);
export default addCommentScreenReducer;
//# sourceMappingURL=reducer.js.map