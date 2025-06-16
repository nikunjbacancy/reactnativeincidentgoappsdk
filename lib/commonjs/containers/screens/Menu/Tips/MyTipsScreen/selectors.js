"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectMyTipsScreenStateDomain = exports.makeSelectTips = exports.makeSelectLastActiveTip = exports.makeSelectIsLoading = exports.default = void 0;
var _filter = _interopRequireDefault(require("lodash/filter"));
var _reselect = require("reselect");
var _reducer = require("./reducer");
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * MyTipsScreen selectors
 *
 */

/**
 * Direct selector to the MyTipsScreen state domain
 */

const selectMyTipsScreenStateDomain = state => state.myTipsScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectMyTipsScreenStateDomain = selectMyTipsScreenStateDomain;
const makeSelectTips = () => (0, _reselect.createSelector)(selectMyTipsScreenStateDomain, ({
  tips
}) => tips);
exports.makeSelectTips = makeSelectTips;
const makeSelectLastActiveTip = () => (0, _reselect.createSelector)(selectMyTipsScreenStateDomain, ({
  tips
}) => {
  const activeTips = (0, _filter.default)(tips[_types.TipStatus.Active].data, 'organization');
  return activeTips[0];
});
exports.makeSelectLastActiveTip = makeSelectLastActiveTip;
const makeSelectIsLoading = () => (0, _reselect.createSelector)(selectMyTipsScreenStateDomain, ({
  isLoading
}) => isLoading);

/**
 * Default selector used by MyTipsScreen
 */
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectMyTipsScreenState = () => (0, _reselect.createSelector)(selectMyTipsScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectMyTipsScreenState;
//# sourceMappingURL=selectors.js.map