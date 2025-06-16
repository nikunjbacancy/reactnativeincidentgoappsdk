import { CHANGE_LOCALE } from './constants';

export interface LanguageProviderState {
  locale: string;
}

export interface ChangeLocaleAction {
  type: typeof CHANGE_LOCALE;
  payload: string;
}

export type LanguageActionTypes = ChangeLocaleAction;
