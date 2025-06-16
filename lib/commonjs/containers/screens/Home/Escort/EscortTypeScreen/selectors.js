"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectShouldShowSiteKeyModal = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * RecordScreen selectors
 *
 */

const escortTypeScreenStateDomain = state => state.escortTypeScreen || _reducer.initialState;
const makeSelectShouldShowSiteKeyModal = () => (0, _reselect.createSelector)(escortTypeScreenStateDomain, ({
  showSiteKeyModel
}) => showSiteKeyModel);

/**
 * Default selector used by countdownScreen
 */
exports.makeSelectShouldShowSiteKeyModal = makeSelectShouldShowSiteKeyModal;
const makeSelectSelectEscortTypeScreenState = () => (0, _reselect.createSelector)(escortTypeScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectSelectEscortTypeScreenState;
//# sourceMappingURL=selectors.js.map