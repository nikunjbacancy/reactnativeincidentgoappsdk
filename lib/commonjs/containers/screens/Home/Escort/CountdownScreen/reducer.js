"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _map = _interopRequireDefault(require("lodash/map"));
var _types = require("../EscortTypeScreen/types");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * CountdownScreen reducer
 *
 */

const initialState = exports.initialState = {
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
const countdownClockScreenReducer = (0, _immer.default)((draft, action) => {
  // //("action type--->",action.type)
  // //("action --->",JSON.stringify(action))
  switch (action.type) {
    case _constants.GET_PROCEDURE_REQUEST:
      draft.isLoadingProcedure = true;
      break;
    case _constants.GET_PROCEDURE_SUCCESS:
      draft.procedure = action.payload;
      draft.actions = action.payload.actions;
      draft.timer = action.payload.timer;
      draft.isUserDefinedTimer = action.payload.timer <= 0;
      draft.isLoadingProcedure = false;
      break;
    case _constants.GET_PROCEDURE_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.isLoadingProcedure = false;
      break;
    case _constants.SHOW_SET_TIMER_MODAL:
      draft.shouldShowSetTimerModal = true;
      break;
    case _constants.HIDE_SET_TIMER_MODAL:
      draft.shouldShowSetTimerModal = false;
      break;
    case _constants.SET_TIMER_VALUE_SUCCESS:
      draft.timer = action.payload;
      // //("draft timer --->",draft.timer)
      break;
    case _constants.COMPLETE_PROCEDURE_ACTION:
      draft.actions = (0, _map.default)(draft.actions, act => {
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
    case _constants.SHOW_CALL_MODAL:
      draft.shouldShowCallModal = true;
      break;
    case _constants.HIDE_CALL_MODAL:
      draft.shouldShowCallModal = false;
      break;
    case _constants.SHOW_SAFE_MODAL:
      draft.shouldShowSafeModal = true;
      break;
    case _constants.HIDE_SAFE_MODAL:
      draft.shouldShowSafeModal = false;
      break;
    case _constants.IM_SAFE_REQUEST:
      draft.requestingImSafe = true;
      break;
    case _constants.IM_SAFE_SUCCESS:
      draft.requestingImSafe = false;
      draft.isPanicMode = false;
      draft.activeCountdown = false;
      draft.procedure = undefined;
      draft.actions = undefined;
      draft.timer = undefined;
      draft.incident = undefined;
      draft.safetyTimer = false;
      break;
    case _constants.IM_SAFE_FAILURE:
      draft.requestingImSafe = false;
      break;
    case _constants.SHOW_PANIC_INFO:
      draft.shouldShowPanicInfo = true;
      break;
    case _constants.HIDE_PANIC_INFO:
      draft.shouldShowPanicInfo = false;
      break;
    case _constants.ENTER_PANIC_MODE:
      draft.isPanicMode = true;
      draft.activeCountdown = false;
      draft.requestingVirtualEscort = true;
      break;
    case _constants.ENTER_PANIC_MODE_SUCCESS:
      draft.isPanicMode = false;
      draft.requestingVirtualEscort = false;
      break;
    case _constants.ENTER_PANIC_MODE_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingVirtualEscort = false;
      break;
    case _constants.SHOW_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = true;
      break;
    case _constants.HIDE_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = false;
      break;
    case _constants.TRIGGER_COUNTDOWN_WARNING:
      draft.warningTriggered = true;
      break;
    case _constants.CANCEL_COUNTDOWN_WARNING:
      draft.warningTriggered = false;
      break;
    case _constants.START_PASSIVE_ESCORT_REQUEST:
      draft.isCreatingPassiveEscort = true;
      break;
    case _constants.START_PASSIVE_ESCORT_SUCCESS:
      draft.isCreatingPassiveEscort = false;
      draft.activeCountdown = true;
      draft.incident = action.payload;
      break;
    case _constants.START_PASSIVE_ESCORT_FAILURE:
      draft.isCreatingPassiveEscort = false;
      break;
    case _constants.START_VIRTUAL_ESCORT_REQUEST:
      draft.activeCountdown = false;
      draft.requestingVirtualEscort = true;
      break;
    case _constants.START_VIRTUAL_ESCORT_SUCCESS:
      draft.requestingVirtualEscort = false;
      break;
    case _constants.START_VIRTUAL_ESCORT_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      draft.requestingVirtualEscort = false;
      break;
    case _constants.CLEAR_ARE_YOU_SAFE:
      draft.actions = (0, _map.default)(draft.actions, act => {
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
    case _constants.LOG_ESCORT_ACTION_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    case _constants.CLEAR_ESCORT_ERROR:
      draft.error = false;
      draft.errorMessage = '';
      break;
    case _constants.CLEAR_PROCEDURE:
      draft.procedure = undefined;
      draft.actions = undefined;
      draft.timer = undefined;
      draft.isUserDefinedTimer = false;
      draft.safetyTimer = false;
      break;
    case _constants.SET_SAFETY_TIMER:
      draft.isUserDefinedTimer = true;
      draft.timer = draft.timer ? draft.timer : 0; // Don't overwrite a timer that's been set already
      draft.procedure = {
        id: _types.EscortType.Safety,
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
var _default = exports.default = countdownClockScreenReducer;
//# sourceMappingURL=reducer.js.map