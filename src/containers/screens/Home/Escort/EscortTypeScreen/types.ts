/**
 *
 * EscortType types
 *
 */
/* eslint-disable import/prefer-default-export */

import { TOGGLE_ESCORT_TYPE, SHOW_SITE_KEY_MODAL, HIDE_SITE_KEY_MODAL } from './constants';

export interface EscortTypeState {
  escortType?: EscortType;
  showSiteKeyModel?: boolean;
}

export enum EscortType {
  Timed = 'Timed',
  Live = 'Live',
  Safety = 'Safety',
  NewTip = 'NewTip',
  Notification = 'Notifications',
  SiteKey = 'SiteKey',

}

export interface ShowSiteKeyModalAction {
  type: typeof SHOW_SITE_KEY_MODAL;
}

export interface HideSiteKeyModalAction {
  type: typeof HIDE_SITE_KEY_MODAL;
}

export interface ToggleEscortTypeAction {
  type: typeof TOGGLE_ESCORT_TYPE;
  payload: EscortType;
}

export type EscortTypeScreenActionTypes = ToggleEscortTypeAction | ShowSiteKeyModalAction | HideSiteKeyModalAction;
