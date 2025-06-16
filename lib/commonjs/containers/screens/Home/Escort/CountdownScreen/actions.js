"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startVirtualEscortSuccess = exports.startVirtualEscortRequest = exports.startVirtualEscortFailure = exports.startPassiveEscortSuccess = exports.startPassiveEscortRequest = exports.startPassiveEscortFailure = exports.startCountdownWarning = exports.showSetTimerModal = exports.showSafeModal = exports.showPanicInfo = exports.showExitPanicModal = exports.showCallModal = exports.setTimerSuccess = exports.setTimerFailure = exports.setSafetyTimer = exports.logPassiveEscortActionFailure = exports.logEscortAction = exports.imSafeSuccess = exports.imSafeRequest = exports.imSafeFailure = exports.hideSetTimerModal = exports.hideSafeModal = exports.hidePanicInfo = exports.hideExitPanicModal = exports.hideCallModal = exports.getProcedureSuccess = exports.getProcedureRequest = exports.getProcedureFailure = exports.enterPanicModeSuccess = exports.enterPanicModeFailure = exports.enterPanicMode = exports.completeProcedureAction = exports.clearProcedure = exports.clearEscortErrorAction = exports.clearAreYouSafe = exports.cancelCountdownWarning = void 0;
var _constants = require("./constants");
/**
 *
 * CountdownClock screen actions
 *
 */

const getProcedureRequest = id => ({
  type: _constants.GET_PROCEDURE_REQUEST,
  payload: id
});
exports.getProcedureRequest = getProcedureRequest;
const getProcedureSuccess = procedure => ({
  type: _constants.GET_PROCEDURE_SUCCESS,
  payload: procedure
});
exports.getProcedureSuccess = getProcedureSuccess;
const getProcedureFailure = error => ({
  type: _constants.GET_PROCEDURE_FAILURE,
  payload: error,
  error: true
});
exports.getProcedureFailure = getProcedureFailure;
const showSetTimerModal = () => ({
  type: _constants.SHOW_SET_TIMER_MODAL
});
exports.showSetTimerModal = showSetTimerModal;
const hideSetTimerModal = () => ({
  type: _constants.HIDE_SET_TIMER_MODAL
});
exports.hideSetTimerModal = hideSetTimerModal;
const setTimerSuccess = timer => ({
  payload: timer,
  type: _constants.SET_TIMER_VALUE_SUCCESS
});
exports.setTimerSuccess = setTimerSuccess;
const setTimerFailure = error => ({
  type: _constants.SET_TIMER_VALUE_FAILURE,
  payload: error,
  error: true
});
exports.setTimerFailure = setTimerFailure;
const completeProcedureAction = id => ({
  type: _constants.COMPLETE_PROCEDURE_ACTION,
  payload: id
});
exports.completeProcedureAction = completeProcedureAction;
const showCallModal = () => ({
  type: _constants.SHOW_CALL_MODAL
});
exports.showCallModal = showCallModal;
const hideCallModal = () => ({
  type: _constants.HIDE_CALL_MODAL
});
exports.hideCallModal = hideCallModal;
const showSafeModal = () => ({
  type: _constants.SHOW_SAFE_MODAL
});
exports.showSafeModal = showSafeModal;
const hideSafeModal = () => ({
  type: _constants.HIDE_SAFE_MODAL
});
exports.hideSafeModal = hideSafeModal;
const showPanicInfo = () => ({
  type: _constants.SHOW_PANIC_INFO
});
exports.showPanicInfo = showPanicInfo;
const hidePanicInfo = () => ({
  type: _constants.HIDE_PANIC_INFO
});
exports.hidePanicInfo = hidePanicInfo;
const enterPanicMode = organization => ({
  type: _constants.ENTER_PANIC_MODE,
  payload: organization
});
exports.enterPanicMode = enterPanicMode;
const enterPanicModeSuccess = () => ({
  type: _constants.ENTER_PANIC_MODE_SUCCESS
});
exports.enterPanicModeSuccess = enterPanicModeSuccess;
const enterPanicModeFailure = error => ({
  type: _constants.ENTER_PANIC_MODE_FAILURE,
  payload: error,
  error: true
});
exports.enterPanicModeFailure = enterPanicModeFailure;
const showExitPanicModal = () => ({
  type: _constants.SHOW_EXIT_PANIC_MODAL
});
exports.showExitPanicModal = showExitPanicModal;
const hideExitPanicModal = () => ({
  type: _constants.HIDE_EXIT_PANIC_MODAL
});
exports.hideExitPanicModal = hideExitPanicModal;
const imSafeRequest = payload => ({
  type: _constants.IM_SAFE_REQUEST,
  payload
});
exports.imSafeRequest = imSafeRequest;
const imSafeSuccess = () => ({
  type: _constants.IM_SAFE_SUCCESS
});
exports.imSafeSuccess = imSafeSuccess;
const imSafeFailure = error => ({
  type: _constants.IM_SAFE_FAILURE,
  payload: error,
  error: true
});
exports.imSafeFailure = imSafeFailure;
const startCountdownWarning = () => ({
  type: _constants.TRIGGER_COUNTDOWN_WARNING
});
exports.startCountdownWarning = startCountdownWarning;
const cancelCountdownWarning = () => ({
  type: _constants.CANCEL_COUNTDOWN_WARNING
});
exports.cancelCountdownWarning = cancelCountdownWarning;
const startPassiveEscortRequest = payload => ({
  type: _constants.START_PASSIVE_ESCORT_REQUEST,
  payload
});
exports.startPassiveEscortRequest = startPassiveEscortRequest;
const startPassiveEscortSuccess = incident => ({
  type: _constants.START_PASSIVE_ESCORT_SUCCESS,
  payload: incident
});
exports.startPassiveEscortSuccess = startPassiveEscortSuccess;
const startPassiveEscortFailure = error => ({
  type: _constants.START_PASSIVE_ESCORT_FAILURE,
  payload: error,
  error: true
});
exports.startPassiveEscortFailure = startPassiveEscortFailure;
const startVirtualEscortRequest = organization => ({
  type: _constants.START_VIRTUAL_ESCORT_REQUEST,
  payload: organization
});
exports.startVirtualEscortRequest = startVirtualEscortRequest;
const startVirtualEscortSuccess = () => ({
  type: _constants.START_VIRTUAL_ESCORT_SUCCESS
});
exports.startVirtualEscortSuccess = startVirtualEscortSuccess;
const startVirtualEscortFailure = error => ({
  type: _constants.START_VIRTUAL_ESCORT_FAILURE,
  payload: error,
  error: true
});
exports.startVirtualEscortFailure = startVirtualEscortFailure;
const clearAreYouSafe = () => ({
  type: _constants.CLEAR_ARE_YOU_SAFE
});
exports.clearAreYouSafe = clearAreYouSafe;
const logEscortAction = payload => ({
  type: _constants.LOG_ESCORT_ACTION_REQUEST,
  payload
});
exports.logEscortAction = logEscortAction;
const logPassiveEscortActionFailure = error => ({
  type: _constants.LOG_ESCORT_ACTION_FAILURE,
  payload: error,
  error: true
});
exports.logPassiveEscortActionFailure = logPassiveEscortActionFailure;
const clearEscortErrorAction = () => ({
  type: _constants.CLEAR_ESCORT_ERROR
});
exports.clearEscortErrorAction = clearEscortErrorAction;
const clearProcedure = () => ({
  type: _constants.CLEAR_PROCEDURE
});
exports.clearProcedure = clearProcedure;
const setSafetyTimer = org => ({
  type: _constants.SET_SAFETY_TIMER,
  payload: org
});
exports.setSafetyTimer = setSafetyTimer;
//# sourceMappingURL=actions.js.map