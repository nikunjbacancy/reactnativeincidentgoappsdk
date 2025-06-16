/**
 *
 * RoutesProvider actions
 *
 */

import {
  ADD_SCREEN_ACTION,
  HIDE_DURESS_INFO_ACTION,
  REMOVE_SCREEN_ACTION,
  SHOW_DURESS_INFO_ACTION,
} from './constants';
import { RoutesProviderActionTypes, ScreenAction } from './types';

export const addScreenAction = (
  screenAction: ScreenAction,
): RoutesProviderActionTypes => ({
  type: ADD_SCREEN_ACTION,
  payload: screenAction,
});

export const removeScreenAction = (): RoutesProviderActionTypes => ({
  type: REMOVE_SCREEN_ACTION,
});

export const showDuressInfoAction = (): RoutesProviderActionTypes => ({
  type: SHOW_DURESS_INFO_ACTION,
});

export const hideDuressInfoAction = (): RoutesProviderActionTypes => ({
  type: HIDE_DURESS_INFO_ACTION,
});
