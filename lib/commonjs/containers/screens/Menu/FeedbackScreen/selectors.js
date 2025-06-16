"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectShowSuccessModal = exports.makeSelectIsSending = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * FeedbackScreen selectors
 *
 */

/**
 * Direct selector to the FeedbackScreen state domain
 */

const selectFeedbackScreenStateDomain = state => state.feedbackScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectIsSending = () => (0, _reselect.createSelector)(selectFeedbackScreenStateDomain, ({
  isSending
}) => isSending);
exports.makeSelectIsSending = makeSelectIsSending;
const makeSelectShowSuccessModal = () => (0, _reselect.createSelector)(selectFeedbackScreenStateDomain, ({
  showSuccessModal
}) => showSuccessModal);

/**
 * Default selector used by FeedbackScreen
 */
exports.makeSelectShowSuccessModal = makeSelectShowSuccessModal;
const makeSelectFeedbackScreenState = () => (0, _reselect.createSelector)(selectFeedbackScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectFeedbackScreenState;
//# sourceMappingURL=selectors.js.map