/**
 *
 * CountdownScreen types
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
import { CountdownAction } from 'types';

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
  SET_TIMER_VALUE_REQUEST,
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

export enum PanicMode {
  Active = 'Active',
  Inactive = 'Inactive',
}

export enum EscortState {
  Started = 'Started',
  Finished = 'Finished',
}

export interface CountdownState {
  procedure?: OrganizationProcedure;
  actions?: CountdownAction[];
  timer?: number;
  error: boolean;
  errorMessage: string;
  isLoadingProcedure: boolean;
  shouldShowSetTimerModal: boolean;
  isUserDefinedTimer: boolean;
  shouldShowCallModal: boolean;
  shouldShowSafeModal: boolean;
  shouldShowExitPanicModal: boolean;
  shouldShowPanicInfo: boolean;
  requestingImSafe: boolean;
  isPanicMode: boolean;
  warningTriggered: boolean;
  isCreatingPassiveEscort: boolean;
  incident?: Incident;
  requestingVirtualEscort: boolean;
  activeCountdown: boolean;
  safetyTimer: boolean;
}

export interface TimerForm {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface GetProcedureRequestAction {
  type: typeof GET_PROCEDURE_REQUEST;
  payload?: Id;
}

export interface GetProcedureSuccessAction {
  type: typeof GET_PROCEDURE_SUCCESS;
  payload: OrganizationProcedure;
}

export interface GetProcedureFailureAction {
  type: typeof GET_PROCEDURE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ShowSetTimerModalAction {
  type: typeof SHOW_SET_TIMER_MODAL;
}

export interface HideSetTimerModalAction {
  type: typeof HIDE_SET_TIMER_MODAL;
}

export interface SetTimerValueRequestAction {
  type: typeof SET_TIMER_VALUE_REQUEST;
  payload: TimerForm;
}

export interface SetTimerValueSuccessAction {
  type: typeof SET_TIMER_VALUE_SUCCESS;
  payload: number;
}

export interface SetTimerValueFailureAction {
  type: typeof SET_TIMER_VALUE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface CompleteProcedureActionAction {
  type: typeof COMPLETE_PROCEDURE_ACTION;
  payload: string;
}

export interface ShowSafeModalAction {
  type: typeof SHOW_SAFE_MODAL;
}

export interface HideSafeModalAction {
  type: typeof HIDE_SAFE_MODAL;
}

export interface ShowCallModalAction {
  type: typeof SHOW_CALL_MODAL;
}

export interface HideCallModalAction {
  type: typeof HIDE_CALL_MODAL;
}

export interface ShowPanicInfoAction {
  type: typeof SHOW_PANIC_INFO;
}

export interface HidePanicInfoAction {
  type: typeof HIDE_PANIC_INFO;
}

export interface EnterPanicModeAction {
  type: typeof ENTER_PANIC_MODE;
  payload: Organization;
}

export interface EnterPanicModeSuccessAction {
  type: typeof ENTER_PANIC_MODE_SUCCESS;
}

export interface EnterPanicModeFailureAction {
  type: typeof ENTER_PANIC_MODE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ShowExitPanicModalAction {
  type: typeof SHOW_EXIT_PANIC_MODAL;
}

export interface HideExitPanicModalAction {
  type: typeof HIDE_EXIT_PANIC_MODAL;
}

export interface ImSafeRequestAction {
  type: typeof IM_SAFE_REQUEST;
  payload: ImSafeRequestPayload;
}

export interface ImSafeSuccessAction {
  type: typeof IM_SAFE_SUCCESS;
}

export interface ImSafeFailureAction {
  type: typeof IM_SAFE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface TriggerCountdownWarningAction {
  type: typeof TRIGGER_COUNTDOWN_WARNING;
}

export interface CancelCountdownWarningAction {
  type: typeof CANCEL_COUNTDOWN_WARNING;
}

export interface StartPassiveEscortRequestAction {
  type: typeof START_PASSIVE_ESCORT_REQUEST;
  payload: { organization: Organization; id?: Id; safetyTimer: boolean };
}

export interface StartPassiveEscortSuccessAction {
  type: typeof START_PASSIVE_ESCORT_SUCCESS;
  payload: Incident;
}

export interface StartPassiveEscortFailureAction {
  type: typeof START_PASSIVE_ESCORT_FAILURE;
  payload: Error;
  error: boolean;
}

export interface StartVirtualEscortRequestAction {
  type: typeof START_VIRTUAL_ESCORT_REQUEST;
  payload: Organization;
}

export interface StartVirtualEscortSuccessAction {
  type: typeof START_VIRTUAL_ESCORT_SUCCESS;
}

export interface StartVirtualEscortFailureAction {
  type: typeof START_VIRTUAL_ESCORT_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ClearAreYouSafeAction {
  type: typeof CLEAR_ARE_YOU_SAFE;
}

export interface LogEscortActionRequestAction {
  type: typeof LOG_ESCORT_ACTION_REQUEST;
  payload: IncidentPassiveLogRequest;
}

export interface LogEscortActionRequestFailure {
  type: typeof LOG_ESCORT_ACTION_FAILURE;
  payload: Error;
  error: boolean;
}

export interface ClearEscortErrorAction {
  type: typeof CLEAR_ESCORT_ERROR;
}

export type ImSafeRequestPayload = {
  comment: string;
};

export type ClearProcedure = {
  type: typeof CLEAR_PROCEDURE;
};

export interface SetSafetyTimerAction {
  type: typeof SET_SAFETY_TIMER;
  payload: Ref<Organization>;
}

export type CountdownClockActionTypes =
  | GetProcedureRequestAction
  | GetProcedureSuccessAction
  | GetProcedureFailureAction
  | ShowSetTimerModalAction
  | HideSetTimerModalAction
  | SetTimerValueRequestAction
  | SetTimerValueSuccessAction
  | SetTimerValueFailureAction
  | CompleteProcedureActionAction
  | ShowSafeModalAction
  | HideSafeModalAction
  | ShowCallModalAction
  | HideCallModalAction
  | ShowPanicInfoAction
  | HidePanicInfoAction
  | EnterPanicModeAction
  | EnterPanicModeSuccessAction
  | ShowExitPanicModalAction
  | HideExitPanicModalAction
  | ImSafeRequestAction
  | ImSafeSuccessAction
  | ImSafeFailureAction
  | TriggerCountdownWarningAction
  | CancelCountdownWarningAction
  | StartPassiveEscortRequestAction
  | StartPassiveEscortSuccessAction
  | StartPassiveEscortFailureAction
  | StartVirtualEscortRequestAction
  | StartVirtualEscortSuccessAction
  | StartVirtualEscortFailureAction
  | ClearAreYouSafeAction
  | LogEscortActionRequestAction
  | LogEscortActionRequestFailure
  | EnterPanicModeFailureAction
  | ClearEscortErrorAction
  | ClearProcedure
  | SetSafetyTimerAction;
