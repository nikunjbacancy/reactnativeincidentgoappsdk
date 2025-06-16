"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectSelectedCategory = exports.makeSelectIncidentCategories = exports.default = void 0;
var _selectors = require("../../../../../containers/app/selectors");
var _filter = _interopRequireDefault(require("lodash/filter"));
var _reselect = require("reselect");
var _reducer = require("./reducer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * SelectCategoryScreen selectors
 *
 */

/**
 * Direct selector to the SelectCategoryScreen state domain
 */

const selectIncidentCategoryScreenStateDomain = state => state.incidentCategoryScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectIncidentCategories = () => (0, _reselect.createSelector)(_selectors.selectAppStateDomain, ({
  configs
}) => {
  const result = [];
  const categories = (0, _filter.default)(configs.incidentCategories, 'enabled');
  for (let i = 0; i < categories.length; i += 3) {
    const row = [];
    for (let j = 0; j < 3; j += 1) {
      const category = categories[i + j];
      if (category) {
        row.push(category);
      }
    }
    result.push(row);
  }
  return result;
});
exports.makeSelectIncidentCategories = makeSelectIncidentCategories;
const makeSelectSelectedCategory = () => (0, _reselect.createSelector)(selectIncidentCategoryScreenStateDomain, ({
  category
}) => category);

/**
 * Default selector used by SelectCategoryScreen
 */
exports.makeSelectSelectedCategory = makeSelectSelectedCategory;
const makeSelectIncidentCategoryScreenState = () => (0, _reselect.createSelector)(selectIncidentCategoryScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectIncidentCategoryScreenState;
//# sourceMappingURL=selectors.js.map