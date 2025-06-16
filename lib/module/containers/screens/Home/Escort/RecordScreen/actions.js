/**
 *
 * RecordScreen actions
 *
 */

import { ADD_MESSAGE, APP_STATE_STATUS_CHANGE, CLEAR_DATA_AND_GO_BACK, ENTER_PANIC_MODE, EXIT_PANIC_MODE, HANDLE_ERROR_FAILURE, HIDE_CALL_MODAL, HIDE_CHAT_MODAL, HIDE_EXIT_PANIC_MODAL, HIDE_PANIC_INFO, HIDE_SAFE_MODAL, IM_SAFE_FAILURE, IM_SAFE_REQUEST, IM_SAFE_SUCCESS, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SET_TRIGGERED_FROM_PASSIVE, SHOW_CALL_MODAL, SHOW_CHAT_MODAL, SHOW_EXIT_PANIC_MODAL, SHOW_PANIC_INFO, SHOW_SAFE_MODAL, START_CHAT_FAILURE, START_CHAT_REQUEST, START_CHAT_SUCCESS, TOGGLE_RECORD_TYPE } from './constants';
export const showCallModal = () => ({
  type: SHOW_CALL_MODAL
});
export const hideCallModal = () => ({
  type: HIDE_CALL_MODAL
});
export const toggleRecordType = incident => ({
  type: TOGGLE_RECORD_TYPE,
  payload: incident
});
export const showSafeModal = () => ({
  type: SHOW_SAFE_MODAL
});
export const hideSafeModal = () => ({
  type: HIDE_SAFE_MODAL
});
export const showChatModal = () => ({
  type: SHOW_CHAT_MODAL
});
export const hideChatModal = () => ({
  type: HIDE_CHAT_MODAL
});
export const startChat = incident => ({
  type: START_CHAT_REQUEST,
  payload: incident
});
export const startChatSuccess = messages => ({
  type: START_CHAT_SUCCESS,
  payload: messages
});
export const startChatFailure = error => ({
  type: START_CHAT_FAILURE,
  payload: error,
  error: true
});
export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message
});
export const sendMessageRequest = payload => ({
  type: SEND_MESSAGE_REQUEST,
  payload
});
export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS
});
export const sendMessageFailure = error => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
  error: true
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
export const showPanicInfo = () => ({
  type: SHOW_PANIC_INFO
});
export const hidePanicInfo = () => ({
  type: HIDE_PANIC_INFO
});
export const enterPanicMode = incident => ({
  type: ENTER_PANIC_MODE,
  payload: incident
});
export const exitPanicMode = incident => ({
  type: EXIT_PANIC_MODE,
  payload: incident
});
export const showExitPanicModal = () => ({
  type: SHOW_EXIT_PANIC_MODAL
});
export const hideExitPanicModal = () => ({
  type: HIDE_EXIT_PANIC_MODAL
});
export const appStateChangeAction = payload => ({
  type: APP_STATE_STATUS_CHANGE,
  payload
});
export const clearDataAndGoBack = id => ({
  type: CLEAR_DATA_AND_GO_BACK,
  payload: id
});
export const setEscortFromPassive = () => ({
  type: SET_TRIGGERED_FROM_PASSIVE
});
export const handleErrorFailure = error => ({
  type: HANDLE_ERROR_FAILURE,
  payload: error,
  error: true
});
//# sourceMappingURL=actions.js.map