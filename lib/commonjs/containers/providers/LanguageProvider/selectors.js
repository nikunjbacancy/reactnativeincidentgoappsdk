"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectLanguageProviderDomain = exports.makeSelectLocale = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * LanguageProvider selectors
 *
 */

// import { initialState } from './reducer';

// //("=reducer====>", initialState)

/**
 * Direct selector to the languageProvider state domain
 */

const selectLanguageProviderDomain = state => state.languageProvider || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectLanguageProviderDomain = selectLanguageProviderDomain;
const makeSelectLocale = () => (0, _reselect.createSelector)(selectLanguageProviderDomain, languageState => languageState.locale);

/**
 * Default selector used by LanguageProvider
 */
exports.makeSelectLocale = makeSelectLocale;
const makeSelectLanguageProvider = () => (0, _reselect.createSelector)(selectLanguageProviderDomain, subState => subState);
var _default = exports.default = makeSelectLanguageProvider;
//# sourceMappingURL=selectors.js.map