/**
 *
 * LanguageProvider selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from '../../../store/types';
// import { initialState } from './reducer';
import { initialState } from './reducer'
// //("=reducer====>", initialState)


/**
 * Direct selector to the languageProvider state domain
 */

const selectLanguageProviderDomain = (state: RootState) =>
  state.languageProvider || initialState;

/**
 * Other specific selectors
 */

const makeSelectLocale = () =>
  createSelector(
    selectLanguageProviderDomain,
    languageState => languageState.locale,
  );

/**
 * Default selector used by LanguageProvider
 */

const makeSelectLanguageProvider = () =>
  createSelector(selectLanguageProviderDomain, subState => subState);

export default makeSelectLanguageProvider;
export { selectLanguageProviderDomain, makeSelectLocale };
