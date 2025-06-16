/**
 *
 * Routes reducer
 *
 */

import produce from 'immer';
import { ADD_SCREEN_ACTION, HIDE_DURESS_INFO_ACTION, REMOVE_SCREEN_ACTION, SHOW_DURESS_INFO_ACTION } from './constants';
export const initialState = {
  screenAction: undefined,
  showDuressInfo: false
};
const routesProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_SCREEN_ACTION:
      draft.screenAction = action.payload;
      break;
    case REMOVE_SCREEN_ACTION:
      draft.screenAction = undefined;
      break;
    case SHOW_DURESS_INFO_ACTION:
      draft.showDuressInfo = true;
      break;
    case HIDE_DURESS_INFO_ACTION:
      draft.showDuressInfo = false;
      break;
    default:
  }
}, initialState);
export default routesProviderReducer;
//# sourceMappingURL=reducer.js.map