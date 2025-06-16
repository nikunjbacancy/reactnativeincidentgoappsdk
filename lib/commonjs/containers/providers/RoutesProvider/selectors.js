"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectRoutesProviderStateDomain = exports.makeSelectShowDuressInfo = exports.makeSelectScreenAction = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * RoutesProvider selectors
 *
 */

/**
 * Direct selector to the RoutesProvider state domain
 */

const selectRoutesProviderStateDomain = state => state.routesProvider || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectRoutesProviderStateDomain = selectRoutesProviderStateDomain;
const makeSelectScreenAction = () => (0, _reselect.createSelector)(selectRoutesProviderStateDomain, ({
  screenAction
}) => screenAction);
exports.makeSelectScreenAction = makeSelectScreenAction;
const makeSelectShowDuressInfo = () => (0, _reselect.createSelector)(selectRoutesProviderStateDomain, ({
  showDuressInfo
}) => showDuressInfo);

/**
 * Default selector used by RoutesProvider
 */
exports.makeSelectShowDuressInfo = makeSelectShowDuressInfo;
const makeSelectRoutesProviderState = () => (0, _reselect.createSelector)(selectRoutesProviderStateDomain, subState => subState);
var _default = exports.default = makeSelectRoutesProviderState;
//# sourceMappingURL=selectors.js.map