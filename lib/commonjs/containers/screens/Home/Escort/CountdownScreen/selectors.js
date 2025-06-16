"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectShouldShowSafeModal = exports.makeSelectShouldShowPanicInfo = exports.makeSelectShouldShowExitPanicModal = exports.makeSelectShouldShowCallModal = exports.makeSelectSafetyTimer = exports.makeSelectRequestingImSafe = exports.makeSelectProcedureTimer = exports.makeSelectProcedureActions = exports.makeSelectProcedure = exports.makeSelectIsWarningActive = exports.makeSelectIsUserDefinedTimer = exports.makeSelectIsRequestingEscort = exports.makeSelectIsPanicMode = exports.makeSelectIsLoading = exports.makeSelectIncident = exports.makeSelectFinalActionCompleted = exports.makeSelectErrorMessage = exports.makeSelectError = exports.makeSelectEnableStartButton = exports.makeSelectDisplaySetTimerModal = exports.makeSelectCountdownIsActive = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * countdownClockScreen selectors
 *
 */

const countdownScreenStateDomain = state => state.escortCountdownScreen || _reducer.initialState;
const makeSelectProcedure = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  procedure
}) => procedure);
exports.makeSelectProcedure = makeSelectProcedure;
const makeSelectProcedureActions = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  actions
}) => actions);
exports.makeSelectProcedureActions = makeSelectProcedureActions;
const makeSelectProcedureTimer = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  timer
}) => timer);
exports.makeSelectProcedureTimer = makeSelectProcedureTimer;
const makeSelectIsLoading = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  isLoadingProcedure
}) => isLoadingProcedure);
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectEnableStartButton = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  timer
}) => {
  return !!(timer && timer >= 1);
});
exports.makeSelectEnableStartButton = makeSelectEnableStartButton;
const makeSelectDisplaySetTimerModal = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  shouldShowSetTimerModal
}) => shouldShowSetTimerModal);
exports.makeSelectDisplaySetTimerModal = makeSelectDisplaySetTimerModal;
const makeSelectIsUserDefinedTimer = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  isUserDefinedTimer
}) => isUserDefinedTimer);
exports.makeSelectIsUserDefinedTimer = makeSelectIsUserDefinedTimer;
const makeSelectFinalActionCompleted = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  actions
}) => {
  return actions === null || actions === void 0 ? void 0 : actions.some(act => act.finalAction && act.isCompleted);
});
exports.makeSelectFinalActionCompleted = makeSelectFinalActionCompleted;
const makeSelectShouldShowCallModal = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
exports.makeSelectShouldShowCallModal = makeSelectShouldShowCallModal;
const makeSelectShouldShowSafeModal = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  shouldShowSafeModal
}) => shouldShowSafeModal);
exports.makeSelectShouldShowSafeModal = makeSelectShouldShowSafeModal;
const makeSelectIsPanicMode = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  isPanicMode
}) => isPanicMode);
exports.makeSelectIsPanicMode = makeSelectIsPanicMode;
const makeSelectRequestingImSafe = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  requestingImSafe
}) => requestingImSafe);
exports.makeSelectRequestingImSafe = makeSelectRequestingImSafe;
const makeSelectShouldShowPanicInfo = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  shouldShowPanicInfo
}) => shouldShowPanicInfo);
exports.makeSelectShouldShowPanicInfo = makeSelectShouldShowPanicInfo;
const makeSelectShouldShowExitPanicModal = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  shouldShowExitPanicModal
}) => shouldShowExitPanicModal);
exports.makeSelectShouldShowExitPanicModal = makeSelectShouldShowExitPanicModal;
const makeSelectIsWarningActive = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  warningTriggered
}) => warningTriggered);
exports.makeSelectIsWarningActive = makeSelectIsWarningActive;
const makeSelectIsRequestingEscort = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  requestingVirtualEscort
}) => requestingVirtualEscort);
exports.makeSelectIsRequestingEscort = makeSelectIsRequestingEscort;
const makeSelectIncident = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  incident
}) => incident);
exports.makeSelectIncident = makeSelectIncident;
const makeSelectCountdownIsActive = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  activeCountdown
}) => activeCountdown);
exports.makeSelectCountdownIsActive = makeSelectCountdownIsActive;
const makeSelectError = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  error
}) => error);
exports.makeSelectError = makeSelectError;
const makeSelectErrorMessage = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  errorMessage
}) => errorMessage);
exports.makeSelectErrorMessage = makeSelectErrorMessage;
const makeSelectSafetyTimer = () => (0, _reselect.createSelector)(countdownScreenStateDomain, ({
  safetyTimer
}) => safetyTimer);
/**
 * Default selector used by countdownScreen
 */
exports.makeSelectSafetyTimer = makeSelectSafetyTimer;
const makeSelectSelectCountdownScreenState = () => (0, _reselect.createSelector)(countdownScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectSelectCountdownScreenState;
//# sourceMappingURL=selectors.js.map