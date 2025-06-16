/**
 *
 * EscortTypeScreen reducer
 *
 */
import produce, { Draft } from 'immer';

import { TOGGLE_ESCORT_TYPE, SHOW_SITE_KEY_MODAL, HIDE_SITE_KEY_MODAL } from './constants';
import { EscortTypeScreenActionTypes, EscortTypeState } from './types';

export const initialState: EscortTypeState = {
  escortType: undefined,
  showSiteKeyModel: undefined
};

const escortTypeScreenReducer = produce(
  (draft: Draft<EscortTypeState>, action: EscortTypeScreenActionTypes) => {
    switch (action.type) {
      case TOGGLE_ESCORT_TYPE:
        draft.escortType = action.payload;
        break;
      case SHOW_SITE_KEY_MODAL:
        draft.showSiteKeyModel = true;
        break;
      case HIDE_SITE_KEY_MODAL:
        draft.showSiteKeyModel = false;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default escortTypeScreenReducer;
