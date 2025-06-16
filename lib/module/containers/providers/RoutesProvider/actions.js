/**
 *
 * RoutesProvider actions
 *
 */

import { ADD_SCREEN_ACTION, HIDE_DURESS_INFO_ACTION, REMOVE_SCREEN_ACTION, SHOW_DURESS_INFO_ACTION } from './constants';
export const addScreenAction = screenAction => ({
  type: ADD_SCREEN_ACTION,
  payload: screenAction
});
export const removeScreenAction = () => ({
  type: REMOVE_SCREEN_ACTION
});
export const showDuressInfoAction = () => ({
  type: SHOW_DURESS_INFO_ACTION
});
export const hideDuressInfoAction = () => ({
  type: HIDE_DURESS_INFO_ACTION
});
//# sourceMappingURL=actions.js.map