/**
 *
 * EscortTypeScreen actions
 *
 */

import { TOGGLE_ESCORT_TYPE, SHOW_SITE_KEY_MODAL, HIDE_SITE_KEY_MODAL } from './constants';
export const toggleEscortType = type => ({
  type: TOGGLE_ESCORT_TYPE,
  payload: type
});
export const showSiteKeyModal = () => ({
  type: SHOW_SITE_KEY_MODAL
});
export const hideSiteKeyModal = () => ({
  type: HIDE_SITE_KEY_MODAL
});
//# sourceMappingURL=actions.js.map