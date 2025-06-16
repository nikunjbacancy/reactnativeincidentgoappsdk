/**
 *
 * FeedbackScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the FeedbackScreen state domain
 */

const selectFeedbackScreenStateDomain = state => state.feedbackScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIsSending = () => createSelector(selectFeedbackScreenStateDomain, ({
  isSending
}) => isSending);
const makeSelectShowSuccessModal = () => createSelector(selectFeedbackScreenStateDomain, ({
  showSuccessModal
}) => showSuccessModal);

/**
 * Default selector used by FeedbackScreen
 */

const makeSelectFeedbackScreenState = () => createSelector(selectFeedbackScreenStateDomain, subState => subState);
export default makeSelectFeedbackScreenState;
export { makeSelectIsSending, makeSelectShowSuccessModal };
//# sourceMappingURL=selectors.js.map