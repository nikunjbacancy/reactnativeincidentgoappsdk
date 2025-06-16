"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * SelectOrganizationScreen reducer
 *
 */

const initialState = exports.initialState = {
  shouldShowCallModal: false,
  shouldShowSafeModal: false,
  shouldShowExitPanicModal: false,
  shouldShowPanicInfo: false,
  recordType: _types.RecordType.Audio,
  shouldShowChatModal: false,
  messages: [],
  requestingImSafe: false,
  isPanicMode: false,
  fromPassiveEscort: false,
  error: false,
  errorMessage: '',
  appState: 'active'
};
const recordScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
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
    case _constants.SHOW_CHAT_MODAL:
      draft.shouldShowChatModal = true;
      break;
    case _constants.HIDE_CHAT_MODAL:
      draft.shouldShowChatModal = false;
      break;
    case _constants.START_CHAT_SUCCESS:
      //("-message success action.payload->",action.payload)
      draft.messages = action.payload;
      break;
    case _constants.ADD_MESSAGE:
      draft.messages.unshift(action.payload);
      break;
    case _constants.TOGGLE_RECORD_TYPE:
      draft.recordType = draft.recordType === _types.RecordType.Audio ? _types.RecordType.Video : _types.RecordType.Audio;
      break;
    case _constants.IM_SAFE_REQUEST:
      draft.requestingImSafe = true;
      break;
    case _constants.IM_SAFE_SUCCESS:
      draft.shouldShowCallModal = false;
      draft.shouldShowExitPanicModal = false;
      draft.shouldShowPanicInfo = false;
      draft.recordType = _types.RecordType.Audio;
      draft.shouldShowChatModal = false;
      draft.messages = [];
      draft.requestingImSafe = false;
      draft.isPanicMode = false;
      draft.fromPassiveEscort = false;
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
      break;
    case _constants.EXIT_PANIC_MODE:
      draft.isPanicMode = false;
      break;
    case _constants.SHOW_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = true;
      break;
    case _constants.HIDE_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = false;
      break;
    case _constants.SET_TRIGGERED_FROM_PASSIVE:
      draft.fromPassiveEscort = true;
      break;
    case _constants.HANDLE_ERROR_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    case _constants.APP_STATE_STATUS_CHANGE:
      draft.appState = action.payload.state;
      break;
    default:
  }
}, initialState);
var _default = exports.default = recordScreenReducer;
//# sourceMappingURL=reducer.js.map