
/**
 *
 * LanguageProvider reducer
 *
 */

import produce, { Draft } from 'immer';
import { getSystemLocale } from '../../../utils/locale/getSystemLocale';
// import { getSystemLocale } from '../../../utils/locale/getSystemLocale'


import { CHANGE_LOCALE } from './constants';
import { LanguageActionTypes, LanguageProviderState } from './types';

const locale = getSystemLocale();

export const initialState: LanguageProviderState = {
  locale: locale,
};

const languageProviderReducer = produce(
  (draft: Draft<LanguageProviderState>, action: LanguageActionTypes) => {
    if (action.type === CHANGE_LOCALE) {
      draft.locale = action.payload;
    }
  },
  initialState,
);

export default languageProviderReducer;
