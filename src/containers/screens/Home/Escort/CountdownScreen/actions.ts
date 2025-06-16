/**
 *
 * CountdownClock screen actions
 *
 */
import {
  Id,
  Incident,
  IncidentPassiveLogRequest,
  Organization,
  OrganizationProcedure,
  Ref,
} from 'incident-code-core';

import {
  CANCEL_COUNTDOWN_WARNING,
  CLEAR_ARE_YOU_SAFE,
  CLEAR_ESCORT_ERROR,
  CLEAR_PROCEDURE,
  COMPLETE_PROCEDURE_ACTION,
  ENTER_PANIC_MODE,
  ENTER_PANIC_MODE_FAILURE,
  ENTER_PANIC_MODE_SUCCESS,
  GET_PROCEDURE_FAILURE,
  GET_PROCEDURE_REQUEST,
  GET_PROCEDURE_SUCCESS,
  HIDE_CALL_MODAL,
  HIDE_EXIT_PANIC_MODAL,
  HIDE_PANIC_INFO,
  HIDE_SAFE_MODAL,
  HIDE_SET_TIMER_MODAL,
  IM_SAFE_FAILURE,
  IM_SAFE_REQUEST,
  IM_SAFE_SUCCESS,
  LOG_ESCORT_ACTION_FAILURE,
  LOG_ESCORT_ACTION_REQUEST,
  SET_SAFETY_TIMER,
  SET_TIMER_VALUE_FAILURE,
  SET_TIMER_VALUE_SUCCESS,
  SHOW_CALL_MODAL,
  SHOW_EXIT_PANIC_MODAL,
  SHOW_PANIC_INFO,
  SHOW_SAFE_MODAL,
  SHOW_SET_TIMER_MODAL,
  START_PASSIVE_ESCORT_FAILURE,
  START_PASSIVE_ESCORT_REQUEST,
  START_PASSIVE_ESCORT_SUCCESS,
  START_VIRTUAL_ESCORT_FAILURE,
  START_VIRTUAL_ESCORT_REQUEST,
  START_VIRTUAL_ESCORT_SUCCESS,
  TRIGGER_COUNTDOWN_WARNING,
} from './constants';
import { CountdownClockActionTypes, ImSafeRequestPayload } from './types';

export const getProcedureRequest = (id: Id): CountdownClockActionTypes => ({
  type: GET_PROCEDURE_REQUEST,
  payload: id,
});

export const getProcedureSuccess = (
  procedure: OrganizationProcedure,
): CountdownClockActionTypes => ({
  type: GET_PROCEDURE_SUCCESS,
  payload: procedure,
});

export const getProcedureFailure = (
  error: Error,
): CountdownClockActionTypes => ({
  type: GET_PROCEDURE_FAILURE,
  payload: error,
  error: true,
});

export const showSetTimerModal = (): CountdownClockActionTypes => ({
  type: SHOW_SET_TIMER_MODAL,
});

export const hideSetTimerModal = (): CountdownClockActionTypes => ({
  type: HIDE_SET_TIMER_MODAL,
});

export const setTimerSuccess = (timer: number): CountdownClockActionTypes => ({
  payload: timer,
  type: SET_TIMER_VALUE_SUCCESS,
});

export const setTimerFailure = (error: Error): CountdownClockActionTypes => ({
  type: SET_TIMER_VALUE_FAILURE,
  payload: error,
  error: true,
});

export const completeProcedureAction = (
  id: string,
): CountdownClockActionTypes => ({
  type: COMPLETE_PROCEDURE_ACTION,
  payload: id,
});

export const showCallModal = (): CountdownClockActionTypes => ({
  type: SHOW_CALL_MODAL,
});

export const hideCallModal = (): CountdownClockActionTypes => ({
  type: HIDE_CALL_MODAL,
});

export const showSafeModal = (): CountdownClockActionTypes => ({
  type: SHOW_SAFE_MODAL,
});

export const hideSafeModal = (): CountdownClockActionTypes => ({
  type: HIDE_SAFE_MODAL,
});

export const showPanicInfo = (): CountdownClockActionTypes => ({
  type: SHOW_PANIC_INFO,
});

export const hidePanicInfo = (): CountdownClockActionTypes => ({
  type: HIDE_PANIC_INFO,
});

export const enterPanicMode = (
  organization: Organization,
): CountdownClockActionTypes => ({
  type: ENTER_PANIC_MODE,
  payload: organization,
});

export const enterPanicModeSuccess = (): CountdownClockActionTypes => ({
  type: ENTER_PANIC_MODE_SUCCESS,
});

export const enterPanicModeFailure = (
  error: Error,
): CountdownClockActionTypes => ({
  type: ENTER_PANIC_MODE_FAILURE,
  payload: error,
  error: true,
});

export const showExitPanicModal = (): CountdownClockActionTypes => ({
  type: SHOW_EXIT_PANIC_MODAL,
});

export const hideExitPanicModal = (): CountdownClockActionTypes => ({
  type: HIDE_EXIT_PANIC_MODAL,
});

export const imSafeRequest = (
  payload: ImSafeRequestPayload,
): CountdownClockActionTypes => ({
  type: IM_SAFE_REQUEST,
  payload,
});

export const imSafeSuccess = (): CountdownClockActionTypes => ({
  type: IM_SAFE_SUCCESS,
});

export const imSafeFailure = (error: Error): CountdownClockActionTypes => ({
  type: IM_SAFE_FAILURE,
  payload: error,
  error: true,
});

export const startCountdownWarning = (): CountdownClockActionTypes => ({
  type: TRIGGER_COUNTDOWN_WARNING,
});

export const cancelCountdownWarning = (): CountdownClockActionTypes => ({
  type: CANCEL_COUNTDOWN_WARNING,
});

export const startPassiveEscortRequest = (payload: {
  organization: Organization;
  id?: Id;
  safetyTimer: boolean;
}): CountdownClockActionTypes => ({
  type: START_PASSIVE_ESCORT_REQUEST,
  payload,
});

export const startPassiveEscortSuccess = (
  incident: Incident,
): CountdownClockActionTypes => ({
  type: START_PASSIVE_ESCORT_SUCCESS,
  payload: incident,
});

export const startPassiveEscortFailure = (
  error: Error,
): CountdownClockActionTypes => ({
  type: START_PASSIVE_ESCORT_FAILURE,
  payload: error,
  error: true,
});

export const startVirtualEscortRequest = (
  organization: Organization,
): CountdownClockActionTypes => ({
  type: START_VIRTUAL_ESCORT_REQUEST,
  payload: organization,
});

export const startVirtualEscortSuccess = (): CountdownClockActionTypes => ({
  type: START_VIRTUAL_ESCORT_SUCCESS,
});

export const startVirtualEscortFailure = (
  error: Error,
): CountdownClockActionTypes => ({
  type: START_VIRTUAL_ESCORT_FAILURE,
  payload: error,
  error: true,
});

export const clearAreYouSafe = (): CountdownClockActionTypes => ({
  type: CLEAR_ARE_YOU_SAFE,
});

export const logEscortAction = (
  payload: IncidentPassiveLogRequest,
): CountdownClockActionTypes => ({
  type: LOG_ESCORT_ACTION_REQUEST,
  payload,
});

export const logPassiveEscortActionFailure = (
  error: Error,
): CountdownClockActionTypes => ({
  type: LOG_ESCORT_ACTION_FAILURE,
  payload: error,
  error: true,
});

export const clearEscortErrorAction = (): CountdownClockActionTypes => ({
  type: CLEAR_ESCORT_ERROR,
});

export const clearProcedure = (): CountdownClockActionTypes => ({
  type: CLEAR_PROCEDURE,
});

export const setSafetyTimer = (
  org: Ref<Organization>,
): CountdownClockActionTypes => ({
  type: SET_SAFETY_TIMER,
  payload: org,
});
