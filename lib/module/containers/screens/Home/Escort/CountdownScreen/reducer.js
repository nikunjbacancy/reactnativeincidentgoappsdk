/**
 *
 * CountdownScreen reducer
 *
 */

import produce from 'immer';
import map from 'lodash/map';
import { EscortType } from '../EscortTypeScreen/types';
import { CANCEL_COUNTDOWN_WARNING, CLEAR_ARE_YOU_SAFE, CLEAR_ESCORT_ERROR, CLEAR_PROCEDURE, COMPLETE_PROCEDURE_ACTION, ENTER_PANIC_MODE, ENTER_PANIC_MODE_FAILURE, ENTER_PANIC_MODE_SUCCESS, GET_PROCEDURE_FAILURE, GET_PROCEDURE_REQUEST, GET_PROCEDURE_SUCCESS, HIDE_CALL_MODAL, HIDE_EXIT_PANIC_MODAL, HIDE_PANIC_INFO, HIDE_SAFE_MODAL, HIDE_SET_TIMER_MODAL, IM_SAFE_FAILURE, IM_SAFE_REQUEST, IM_SAFE_SUCCESS, LOG_ESCORT_ACTION_FAILURE, SET_SAFETY_TIMER, SET_TIMER_VALUE_SUCCESS, SHOW_CALL_MODAL, SHOW_EXIT_PANIC_MODAL, SHOW_PANIC_INFO, SHOW_SAFE_MODAL, SHOW_SET_TIMER_MODAL, START_PASSIVE_ESCORT_FAILURE, START_PASSIVE_ESCORT_REQUEST, START_PASSIVE_ESCORT_SUCCESS, START_VIRTUAL_ESCORT_FAILURE, START_VIRTUAL_ESCORT_REQUEST, START_VIRTUAL_ESCORT_SUCCESS, TRIGGER_COUNTDOWN_WARNING } from './constants';
export const initialState = {
  timer: undefined,
  procedure: undefined,
  actions: undefined,
  error: false,
  errorMessage: '',
  isLoadingProcedure: false,
  shouldShowSetTimerModal: false,
  isUserDefinedTimer: false,
  shouldShowCallModal: false,
  shouldShowSafeModal: false,
  shouldShowExitPanicModal: false,
  shouldShowPanicInfo: false,
  requestingImSafe: false,
  isPanicMode: false,
  warningTriggered: false,
  isCreatingPassiveEscort: false,
  incident: undefined,
  requestingVirtualEscort: false,
  activeCountdown: false,
  safetyTimer: false
};
const countdownClockScreenReducer = produce((draft, action) => {
  // //("action type--->",action.type)
  // //("action --->",JSON.stringify(action))
  switch (action.type) {
    case GET_PROCEDURE_REQUEST:
      draft.isLoadingProcedure = true;
      break;
    case GET_PROCEDURE_SUCCESS:
      draft.procedure = action.payload;
      draft.actions = action.payload.actions;
      draft.timer = action.payload.timer;
      draft.isUserDefinedTimer = action.payload.timer <= 0;
      draft.isLoadingProcedure = false;
      break;
    case GET_PROCEDURE_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.isLoadingProcedure = false;
      break;
    case SHOW_SET_TIMER_MODAL:
      draft.shouldShowSetTimerModal = true;
      break;
    case HIDE_SET_TIMER_MODAL:
      draft.shouldShowSetTimerModal = false;
      break;
    case SET_TIMER_VALUE_SUCCESS:
      draft.timer = action.payload;
      // //("draft timer --->",draft.timer)
      break;
    case COMPLETE_PROCEDURE_ACTION:
      draft.actions = map(draft.actions, act => {
        if (act.id === action.payload) {
          return {
            ...act,
            isCompleted: !act.isCompleted
          };
        }
        return {
          ...act
        };
      });
      break;
    case SHOW_CALL_MODAL:
      draft.shouldShowCallModal = true;
      break;
    case HIDE_CALL_MODAL:
      draft.shouldShowCallModal = false;
      break;
    case SHOW_SAFE_MODAL:
      draft.shouldShowSafeModal = true;
      break;
    case HIDE_SAFE_MODAL:
      draft.shouldShowSafeModal = false;
      break;
    case IM_SAFE_REQUEST:
      draft.requestingImSafe = true;
      break;
    case IM_SAFE_SUCCESS:
      draft.requestingImSafe = false;
      draft.isPanicMode = false;
      draft.activeCountdown = false;
      draft.procedure = undefined;
      draft.actions = undefined;
      draft.timer = undefined;
      draft.incident = undefined;
      draft.safetyTimer = false;
      break;
    case IM_SAFE_FAILURE:
      draft.requestingImSafe = false;
      break;
    case SHOW_PANIC_INFO:
      draft.shouldShowPanicInfo = true;
      break;
    case HIDE_PANIC_INFO:
      draft.shouldShowPanicInfo = false;
      break;
    case ENTER_PANIC_MODE:
      draft.isPanicMode = true;
      draft.activeCountdown = false;
      draft.requestingVirtualEscort = true;
      break;
    case ENTER_PANIC_MODE_SUCCESS:
      draft.isPanicMode = false;
      draft.requestingVirtualEscort = false;
      break;
    case ENTER_PANIC_MODE_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingVirtualEscort = false;
      break;
    case SHOW_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = true;
      break;
    case HIDE_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = false;
      break;
    case TRIGGER_COUNTDOWN_WARNING:
      draft.warningTriggered = true;
      break;
    case CANCEL_COUNTDOWN_WARNING:
      draft.warningTriggered = false;
      break;
    case START_PASSIVE_ESCORT_REQUEST:
      draft.isCreatingPassiveEscort = true;
      break;
    case START_PASSIVE_ESCORT_SUCCESS:
      draft.isCreatingPassiveEscort = false;
      draft.activeCountdown = true;
      draft.incident = action.payload;
      break;
    case START_PASSIVE_ESCORT_FAILURE:
      draft.isCreatingPassiveEscort = false;
      break;
    case START_VIRTUAL_ESCORT_REQUEST:
      draft.activeCountdown = false;
      draft.requestingVirtualEscort = true;
      break;
    case START_VIRTUAL_ESCORT_SUCCESS:
      draft.requestingVirtualEscort = false;
      break;
    case START_VIRTUAL_ESCORT_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingVirtualEscort = false;
      break;
    case CLEAR_ARE_YOU_SAFE:
      draft.actions = map(draft.actions, act => {
        if (act.finalAction) {
          return {
            ...act,
            isCompleted: false
          };
        }
        return {
          ...act
        };
      });
      break;
    case LOG_ESCORT_ACTION_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    case CLEAR_ESCORT_ERROR:
      draft.error = false;
      draft.errorMessage = '';
      break;
    case CLEAR_PROCEDURE:
      draft.procedure = undefined;
      draft.actions = undefined;
      draft.timer = undefined;
      draft.isUserDefinedTimer = false;
      draft.safetyTimer = false;
      break;
    case SET_SAFETY_TIMER:
      draft.isUserDefinedTimer = true;
      draft.timer = draft.timer ? draft.timer : 0; // Don't overwrite a timer that's been set already
      draft.procedure = {
        id: EscortType.Safety,
        timer: 0,
        name: 'Safety Timer',
        actions: [],
        organization: action.payload
      };
      draft.safetyTimer = true;
      break;
    default:
      break;
  }
}, initialState);
export default countdownClockScreenReducer;
//# sourceMappingURL=reducer.js.map