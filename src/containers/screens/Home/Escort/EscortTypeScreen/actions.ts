/**
 *
 * EscortTypeScreen actions
 *
 */

import { TOGGLE_ESCORT_TYPE, SHOW_SITE_KEY_MODAL, HIDE_SITE_KEY_MODAL } from './constants';
import { EscortType, EscortTypeScreenActionTypes } from './types';

export const toggleEscortType = (
  type: EscortType,
): EscortTypeScreenActionTypes => ({
  type: TOGGLE_ESCORT_TYPE,
  payload: type,
});

export const showSiteKeyModal = (): EscortTypeScreenActionTypes => ({
  type: SHOW_SITE_KEY_MODAL,
});

export const hideSiteKeyModal = (): EscortTypeScreenActionTypes => ({
  type: HIDE_SITE_KEY_MODAL,
});
