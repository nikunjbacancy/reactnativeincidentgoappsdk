/**
 *
 * CountdownClock screen actions
 *
 */

import { CANCEL_COUNTDOWN_WARNING, CLEAR_ARE_YOU_SAFE, CLEAR_ESCORT_ERROR, CLEAR_PROCEDURE, COMPLETE_PROCEDURE_ACTION, ENTER_PANIC_MODE, ENTER_PANIC_MODE_FAILURE, ENTER_PANIC_MODE_SUCCESS, GET_PROCEDURE_FAILURE, GET_PROCEDURE_REQUEST, GET_PROCEDURE_SUCCESS, HIDE_CALL_MODAL, HIDE_EXIT_PANIC_MODAL, HIDE_PANIC_INFO, HIDE_SAFE_MODAL, HIDE_SET_TIMER_MODAL, IM_SAFE_FAILURE, IM_SAFE_REQUEST, IM_SAFE_SUCCESS, LOG_ESCORT_ACTION_FAILURE, LOG_ESCORT_ACTION_REQUEST, SET_SAFETY_TIMER, SET_TIMER_VALUE_FAILURE, SET_TIMER_VALUE_SUCCESS, SHOW_CALL_MODAL, SHOW_EXIT_PANIC_MODAL, SHOW_PANIC_INFO, SHOW_SAFE_MODAL, SHOW_SET_TIMER_MODAL, START_PASSIVE_ESCORT_FAILURE, START_PASSIVE_ESCORT_REQUEST, START_PASSIVE_ESCORT_SUCCESS, START_VIRTUAL_ESCORT_FAILURE, START_VIRTUAL_ESCORT_REQUEST, START_VIRTUAL_ESCORT_SUCCESS, TRIGGER_COUNTDOWN_WARNING } from './constants';
export const getProcedureRequest = id => ({
  type: GET_PROCEDURE_REQUEST,
  payload: id
});
export const getProcedureSuccess = procedure => ({
  type: GET_PROCEDURE_SUCCESS,
  payload: procedure
});
export const getProcedureFailure = error => ({
  type: GET_PROCEDURE_FAILURE,
  payload: error,
  error: true
});
export const showSetTimerModal = () => ({
  type: SHOW_SET_TIMER_MODAL
});
export const hideSetTimerModal = () => ({
  type: HIDE_SET_TIMER_MODAL
});
export const setTimerSuccess = timer => ({
  payload: timer,
  type: SET_TIMER_VALUE_SUCCESS
});
export const setTimerFailure = error => ({
  type: SET_TIMER_VALUE_FAILURE,
  payload: error,
  error: true
});
export const completeProcedureAction = id => ({
  type: COMPLETE_PROCEDURE_ACTION,
  payload: id
});
export const showCallModal = () => ({
  type: SHOW_CALL_MODAL
});
export const hideCallModal = () => ({
  type: HIDE_CALL_MODAL
});
export const showSafeModal = () => ({
  type: SHOW_SAFE_MODAL
});
export const hideSafeModal = () => ({
  type: HIDE_SAFE_MODAL
});
export const showPanicInfo = () => ({
  type: SHOW_PANIC_INFO
});
export const hidePanicInfo = () => ({
  type: HIDE_PANIC_INFO
});
export const enterPanicMode = organization => ({
  type: ENTER_PANIC_MODE,
  payload: organization
});
export const enterPanicModeSuccess = () => ({
  type: ENTER_PANIC_MODE_SUCCESS
});
export const enterPanicModeFailure = error => ({
  type: ENTER_PANIC_MODE_FAILURE,
  payload: error,
  error: true
});
export const showExitPanicModal = () => ({
  type: SHOW_EXIT_PANIC_MODAL
});
export const hideExitPanicModal = () => ({
  type: HIDE_EXIT_PANIC_MODAL
});
export const imSafeRequest = payload => ({
  type: IM_SAFE_REQUEST,
  payload
});
export const imSafeSuccess = () => ({
  type: IM_SAFE_SUCCESS
});
export const imSafeFailure = error => ({
  type: IM_SAFE_FAILURE,
  payload: error,
  error: true
});
export const startCountdownWarning = () => ({
  type: TRIGGER_COUNTDOWN_WARNING
});
export const cancelCountdownWarning = () => ({
  type: CANCEL_COUNTDOWN_WARNING
});
export const startPassiveEscortRequest = payload => ({
  type: START_PASSIVE_ESCORT_REQUEST,
  payload
});
export const startPassiveEscortSuccess = incident => ({
  type: START_PASSIVE_ESCORT_SUCCESS,
  payload: incident
});
export const startPassiveEscortFailure = error => ({
  type: START_PASSIVE_ESCORT_FAILURE,
  payload: error,
  error: true
});
export const startVirtualEscortRequest = organization => ({
  type: START_VIRTUAL_ESCORT_REQUEST,
  payload: organization
});
export const startVirtualEscortSuccess = () => ({
  type: START_VIRTUAL_ESCORT_SUCCESS
});
export const startVirtualEscortFailure = error => ({
  type: START_VIRTUAL_ESCORT_FAILURE,
  payload: error,
  error: true
});
export const clearAreYouSafe = () => ({
  type: CLEAR_ARE_YOU_SAFE
});
export const logEscortAction = payload => ({
  type: LOG_ESCORT_ACTION_REQUEST,
  payload
});
export const logPassiveEscortActionFailure = error => ({
  type: LOG_ESCORT_ACTION_FAILURE,
  payload: error,
  error: true
});
export const clearEscortErrorAction = () => ({
  type: CLEAR_ESCORT_ERROR
});
export const clearProcedure = () => ({
  type: CLEAR_PROCEDURE
});
export const setSafetyTimer = org => ({
  type: SET_SAFETY_TIMER,
  payload: org
});
//# sourceMappingURL=actions.js.map