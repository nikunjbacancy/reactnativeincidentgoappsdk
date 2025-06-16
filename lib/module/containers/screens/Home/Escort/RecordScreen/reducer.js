/**
 *
 * SelectOrganizationScreen reducer
 *
 */

import produce from 'immer';
import { ADD_MESSAGE, APP_STATE_STATUS_CHANGE, ENTER_PANIC_MODE, EXIT_PANIC_MODE, HANDLE_ERROR_FAILURE, HIDE_CALL_MODAL, HIDE_CHAT_MODAL, HIDE_EXIT_PANIC_MODAL, HIDE_PANIC_INFO, HIDE_SAFE_MODAL, IM_SAFE_FAILURE, IM_SAFE_REQUEST, IM_SAFE_SUCCESS, SET_TRIGGERED_FROM_PASSIVE, SHOW_CALL_MODAL, SHOW_CHAT_MODAL, SHOW_EXIT_PANIC_MODAL, SHOW_PANIC_INFO, SHOW_SAFE_MODAL, START_CHAT_SUCCESS, TOGGLE_RECORD_TYPE } from './constants';
import { RecordType } from './types';
export const initialState = {
  shouldShowCallModal: false,
  shouldShowSafeModal: false,
  shouldShowExitPanicModal: false,
  shouldShowPanicInfo: false,
  recordType: RecordType.Audio,
  shouldShowChatModal: false,
  messages: [],
  requestingImSafe: false,
  isPanicMode: false,
  fromPassiveEscort: false,
  error: false,
  errorMessage: '',
  appState: 'active'
};
const recordScreenReducer = produce((draft, action) => {
  switch (action.type) {
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
    case SHOW_CHAT_MODAL:
      draft.shouldShowChatModal = true;
      break;
    case HIDE_CHAT_MODAL:
      draft.shouldShowChatModal = false;
      break;
    case START_CHAT_SUCCESS:
      //("-message success action.payload->",action.payload)
      draft.messages = action.payload;
      break;
    case ADD_MESSAGE:
      draft.messages.unshift(action.payload);
      break;
    case TOGGLE_RECORD_TYPE:
      draft.recordType = draft.recordType === RecordType.Audio ? RecordType.Video : RecordType.Audio;
      break;
    case IM_SAFE_REQUEST:
      draft.requestingImSafe = true;
      break;
    case IM_SAFE_SUCCESS:
      draft.shouldShowCallModal = false;
      draft.shouldShowExitPanicModal = false;
      draft.shouldShowPanicInfo = false;
      draft.recordType = RecordType.Audio;
      draft.shouldShowChatModal = false;
      draft.messages = [];
      draft.requestingImSafe = false;
      draft.isPanicMode = false;
      draft.fromPassiveEscort = false;
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
      break;
    case EXIT_PANIC_MODE:
      draft.isPanicMode = false;
      break;
    case SHOW_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = true;
      break;
    case HIDE_EXIT_PANIC_MODAL:
      draft.shouldShowExitPanicModal = false;
      break;
    case SET_TRIGGERED_FROM_PASSIVE:
      draft.fromPassiveEscort = true;
      break;
    case HANDLE_ERROR_FAILURE:
      draft.error = action.error;
      draft.errorMessage = action.payload.message;
      break;
    case APP_STATE_STATUS_CHANGE:
      draft.appState = action.payload.state;
      break;
    default:
  }
}, initialState);
export default recordScreenReducer;
//# sourceMappingURL=reducer.js.map