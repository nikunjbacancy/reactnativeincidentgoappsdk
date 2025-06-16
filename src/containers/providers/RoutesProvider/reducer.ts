/**
 *
 * Routes reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  ADD_SCREEN_ACTION,
  HIDE_DURESS_INFO_ACTION,
  REMOVE_SCREEN_ACTION,
  SHOW_DURESS_INFO_ACTION,
} from './constants';
import { RoutesProviderActionTypes, RoutesProviderState } from './types';

export const initialState: RoutesProviderState = {
  screenAction: undefined,
  showDuressInfo: false,
};

const routesProviderReducer = produce(
  (draft: Draft<RoutesProviderState>, action: RoutesProviderActionTypes) => {
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
  },
  initialState,
);

export default routesProviderReducer;
