/**
 *
 * WelcomeScreen actions
 *
 */

import { CHANGE_PAGE, FINISH_WELCOME, NEXT_PAGE, RESET_CURRENT_PAGE } from './constants';
export const changePage = index => ({
  type: CHANGE_PAGE,
  payload: index
});
export const nextPage = () => ({
  type: NEXT_PAGE
});
export const finishWelcome = () => ({
  type: FINISH_WELCOME
});
export const resetCurrentPage = () => ({
  type: RESET_CURRENT_PAGE
});
//# sourceMappingURL=actions.js.map