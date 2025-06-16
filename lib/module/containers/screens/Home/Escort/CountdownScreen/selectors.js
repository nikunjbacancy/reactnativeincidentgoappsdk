/**
 *
 * countdownClockScreen selectors
 *
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';
const countdownScreenStateDomain = state => state.escortCountdownScreen || initialState;
const makeSelectProcedure = () => createSelector(countdownScreenStateDomain, ({
  procedure
}) => procedure);
const makeSelectProcedureActions = () => createSelector(countdownScreenStateDomain, ({
  actions
}) => actions);
const makeSelectProcedureTimer = () => createSelector(countdownScreenStateDomain, ({
  timer
}) => timer);
const makeSelectIsLoading = () => createSelector(countdownScreenStateDomain, ({
  isLoadingProcedure
}) => isLoadingProcedure);
const makeSelectEnableStartButton = () => createSelector(countdownScreenStateDomain, ({
  timer
}) => {
  return !!(timer && timer >= 1);
});
const makeSelectDisplaySetTimerModal = () => createSelector(countdownScreenStateDomain, ({
  shouldShowSetTimerModal
}) => shouldShowSetTimerModal);
const makeSelectIsUserDefinedTimer = () => createSelector(countdownScreenStateDomain, ({
  isUserDefinedTimer
}) => isUserDefinedTimer);
const makeSelectFinalActionCompleted = () => createSelector(countdownScreenStateDomain, ({
  actions
}) => {
  return actions === null || actions === void 0 ? void 0 : actions.some(act => act.finalAction && act.isCompleted);
});
const makeSelectShouldShowCallModal = () => createSelector(countdownScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
const makeSelectShouldShowSafeModal = () => createSelector(countdownScreenStateDomain, ({
  shouldShowSafeModal
}) => shouldShowSafeModal);
const makeSelectIsPanicMode = () => createSelector(countdownScreenStateDomain, ({
  isPanicMode
}) => isPanicMode);
const makeSelectRequestingImSafe = () => createSelector(countdownScreenStateDomain, ({
  requestingImSafe
}) => requestingImSafe);
const makeSelectShouldShowPanicInfo = () => createSelector(countdownScreenStateDomain, ({
  shouldShowPanicInfo
}) => shouldShowPanicInfo);
const makeSelectShouldShowExitPanicModal = () => createSelector(countdownScreenStateDomain, ({
  shouldShowExitPanicModal
}) => shouldShowExitPanicModal);
const makeSelectIsWarningActive = () => createSelector(countdownScreenStateDomain, ({
  warningTriggered
}) => warningTriggered);
const makeSelectIsRequestingEscort = () => createSelector(countdownScreenStateDomain, ({
  requestingVirtualEscort
}) => requestingVirtualEscort);
const makeSelectIncident = () => createSelector(countdownScreenStateDomain, ({
  incident
}) => incident);
const makeSelectCountdownIsActive = () => createSelector(countdownScreenStateDomain, ({
  activeCountdown
}) => activeCountdown);
const makeSelectError = () => createSelector(countdownScreenStateDomain, ({
  error
}) => error);
const makeSelectErrorMessage = () => createSelector(countdownScreenStateDomain, ({
  errorMessage
}) => errorMessage);
const makeSelectSafetyTimer = () => createSelector(countdownScreenStateDomain, ({
  safetyTimer
}) => safetyTimer);
/**
 * Default selector used by countdownScreen
 */

const makeSelectSelectCountdownScreenState = () => createSelector(countdownScreenStateDomain, subState => subState);
export default makeSelectSelectCountdownScreenState;
export { makeSelectProcedure, makeSelectProcedureActions, makeSelectProcedureTimer, makeSelectIsLoading, makeSelectEnableStartButton, makeSelectDisplaySetTimerModal, makeSelectIsUserDefinedTimer, makeSelectFinalActionCompleted, makeSelectShouldShowCallModal, makeSelectShouldShowSafeModal, makeSelectIsPanicMode, makeSelectRequestingImSafe, makeSelectShouldShowPanicInfo, makeSelectShouldShowExitPanicModal, makeSelectIsWarningActive, makeSelectIsRequestingEscort, makeSelectIncident, makeSelectCountdownIsActive, makeSelectError, makeSelectErrorMessage, makeSelectSafetyTimer };
//# sourceMappingURL=selectors.js.map