/**
 *
 * RecordScreen selectors
 *
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the RecordScreen state domain
 */

const recordScreenStateDomain = state => state.escortRecordScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectShouldShowCallModal = () => createSelector(recordScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
const makeSelectShouldShowSafeModal = () => createSelector(recordScreenStateDomain, ({
  shouldShowSafeModal
}) => shouldShowSafeModal);
const makeSelectShouldShowChatModal = () => createSelector(recordScreenStateDomain, ({
  shouldShowChatModal
}) => shouldShowChatModal);
const makeSelectShouldShowExitPanicModal = () => createSelector(recordScreenStateDomain, ({
  shouldShowExitPanicModal
}) => shouldShowExitPanicModal);
const makeSelectShouldShowPanicInfo = () => createSelector(recordScreenStateDomain, ({
  shouldShowPanicInfo
}) => shouldShowPanicInfo);
const makeSelectRecordType = () => createSelector(recordScreenStateDomain, ({
  recordType
}) => recordType);
const makeSelectMessages = () => createSelector(recordScreenStateDomain, ({
  messages
}) => messages);
const makeSelectRequestingImSafe = () => createSelector(recordScreenStateDomain, ({
  requestingImSafe
}) => requestingImSafe);
const makeSelectIsPanicMode = () => createSelector(recordScreenStateDomain, ({
  isPanicMode
}) => isPanicMode);
const makeSelectFromPassiveEscort = () => createSelector(recordScreenStateDomain, ({
  fromPassiveEscort
}) => fromPassiveEscort);
const makeSelectAppState = () => createSelector(recordScreenStateDomain, ({
  appState
}) => appState);

/**
 * Default selector used by RecordScreen
 */

const makeSelectRecordScreenState = () => createSelector(recordScreenStateDomain, subState => subState);
export default makeSelectRecordScreenState;
export { makeSelectShouldShowCallModal, makeSelectShouldShowSafeModal, makeSelectShouldShowChatModal, makeSelectRecordType, makeSelectMessages, makeSelectRequestingImSafe, makeSelectShouldShowExitPanicModal, makeSelectShouldShowPanicInfo, makeSelectIsPanicMode, makeSelectFromPassiveEscort, makeSelectAppState };
//# sourceMappingURL=selectors.js.map