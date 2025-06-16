/**
 *
 * FeedbackScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the FeedbackScreen state domain
 */

const selectFeedbackScreenStateDomain = (state: RootState) =>
  state.feedbackScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIsSending = () =>
  createSelector(selectFeedbackScreenStateDomain, ({ isSending }) => isSending);

const makeSelectShowSuccessModal = () =>
  createSelector(
    selectFeedbackScreenStateDomain,
    ({ showSuccessModal }) => showSuccessModal,
  );

/**
 * Default selector used by FeedbackScreen
 */

const makeSelectFeedbackScreenState = () =>
  createSelector(selectFeedbackScreenStateDomain, subState => subState);

export default makeSelectFeedbackScreenState;
export { makeSelectIsSending, makeSelectShowSuccessModal };
