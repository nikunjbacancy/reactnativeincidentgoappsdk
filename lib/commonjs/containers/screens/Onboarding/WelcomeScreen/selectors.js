"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectWelcomeScreenStateDomain = exports.makeSelectWelcomeItems = exports.makeSelectLastIndex = exports.makeSelectCurrentPage = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * WelcomeScreen selectors
 *
 */

/**
 * Direct selector to the WelcomeScreen state domain
 */

const selectWelcomeScreenStateDomain = state => state.welcomeScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectWelcomeScreenStateDomain = selectWelcomeScreenStateDomain;
const makeSelectCurrentPage = () => (0, _reselect.createSelector)(selectWelcomeScreenStateDomain, ({
  currentPage
}) => currentPage);
exports.makeSelectCurrentPage = makeSelectCurrentPage;
const makeSelectLastIndex = () => (0, _reselect.createSelector)(selectWelcomeScreenStateDomain, ({
  welcomeItems
}) => welcomeItems.length);
exports.makeSelectLastIndex = makeSelectLastIndex;
const makeSelectWelcomeItems = () => (0, _reselect.createSelector)(selectWelcomeScreenStateDomain, ({
  welcomeItems
}) => welcomeItems);

/**
 * Default selector used by WelcomeScreen
 */
exports.makeSelectWelcomeItems = makeSelectWelcomeItems;
const makeSelectWelcomeScreenState = () => (0, _reselect.createSelector)(selectWelcomeScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectWelcomeScreenState;
//# sourceMappingURL=selectors.js.map