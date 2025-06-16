/**
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';
import { getSystemLocale } from '../../../utils/locale/getSystemLocale';
// import { getSystemLocale } from '../../../utils/locale/getSystemLocale'

import { CHANGE_LOCALE } from './constants';
const locale = getSystemLocale();
export const initialState = {
  locale: locale
};
const languageProviderReducer = produce((draft, action) => {
  if (action.type === CHANGE_LOCALE) {
    draft.locale = action.payload;
  }
}, initialState);
export default languageProviderReducer;
//# sourceMappingURL=reducer.js.map