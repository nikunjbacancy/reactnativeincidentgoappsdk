/**
 *
 * LanguageProvider actions
 *
 */

import { CHANGE_LOCALE } from './constants';
import { LanguageActionTypes } from './types';

export const changeLocale = (locale: string): LanguageActionTypes => ({
  type: CHANGE_LOCALE,
  payload: locale,
});
