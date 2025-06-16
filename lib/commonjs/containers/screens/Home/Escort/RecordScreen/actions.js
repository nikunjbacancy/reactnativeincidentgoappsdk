"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleRecordType = exports.startChatSuccess = exports.startChatFailure = exports.startChat = exports.showSafeModal = exports.showPanicInfo = exports.showExitPanicModal = exports.showChatModal = exports.showCallModal = exports.setEscortFromPassive = exports.sendMessageSuccess = exports.sendMessageRequest = exports.sendMessageFailure = exports.imSafeSuccess = exports.imSafeRequest = exports.imSafeFailure = exports.hideSafeModal = exports.hidePanicInfo = exports.hideExitPanicModal = exports.hideChatModal = exports.hideCallModal = exports.handleErrorFailure = exports.exitPanicMode = exports.enterPanicMode = exports.clearDataAndGoBack = exports.appStateChangeAction = exports.addMessage = void 0;
var _constants = require("./constants");
/**
 *
 * RecordScreen actions
 *
 */

const showCallModal = () => ({
  type: _constants.SHOW_CALL_MODAL
});
exports.showCallModal = showCallModal;
const hideCallModal = () => ({
  type: _constants.HIDE_CALL_MODAL
});
exports.hideCallModal = hideCallModal;
const toggleRecordType = incident => ({
  type: _constants.TOGGLE_RECORD_TYPE,
  payload: incident
});
exports.toggleRecordType = toggleRecordType;
const showSafeModal = () => ({
  type: _constants.SHOW_SAFE_MODAL
});
exports.showSafeModal = showSafeModal;
const hideSafeModal = () => ({
  type: _constants.HIDE_SAFE_MODAL
});
exports.hideSafeModal = hideSafeModal;
const showChatModal = () => ({
  type: _constants.SHOW_CHAT_MODAL
});
exports.showChatModal = showChatModal;
const hideChatModal = () => ({
  type: _constants.HIDE_CHAT_MODAL
});
exports.hideChatModal = hideChatModal;
const startChat = incident => ({
  type: _constants.START_CHAT_REQUEST,
  payload: incident
});
exports.startChat = startChat;
const startChatSuccess = messages => ({
  type: _constants.START_CHAT_SUCCESS,
  payload: messages
});
exports.startChatSuccess = startChatSuccess;
const startChatFailure = error => ({
  type: _constants.START_CHAT_FAILURE,
  payload: error,
  error: true
});
exports.startChatFailure = startChatFailure;
const addMessage = message => ({
  type: _constants.ADD_MESSAGE,
  payload: message
});
exports.addMessage = addMessage;
const sendMessageRequest = payload => ({
  type: _constants.SEND_MESSAGE_REQUEST,
  payload
});
exports.sendMessageRequest = sendMessageRequest;
const sendMessageSuccess = () => ({
  type: _constants.SEND_MESSAGE_SUCCESS
});
exports.sendMessageSuccess = sendMessageSuccess;
const sendMessageFailure = error => ({
  type: _constants.SEND_MESSAGE_FAILURE,
  payload: error,
  error: true
});
exports.sendMessageFailure = sendMessageFailure;
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
const showPanicInfo = () => ({
  type: _constants.SHOW_PANIC_INFO
});
exports.showPanicInfo = showPanicInfo;
const hidePanicInfo = () => ({
  type: _constants.HIDE_PANIC_INFO
});
exports.hidePanicInfo = hidePanicInfo;
const enterPanicMode = incident => ({
  type: _constants.ENTER_PANIC_MODE,
  payload: incident
});
exports.enterPanicMode = enterPanicMode;
const exitPanicMode = incident => ({
  type: _constants.EXIT_PANIC_MODE,
  payload: incident
});
exports.exitPanicMode = exitPanicMode;
const showExitPanicModal = () => ({
  type: _constants.SHOW_EXIT_PANIC_MODAL
});
exports.showExitPanicModal = showExitPanicModal;
const hideExitPanicModal = () => ({
  type: _constants.HIDE_EXIT_PANIC_MODAL
});
exports.hideExitPanicModal = hideExitPanicModal;
const appStateChangeAction = payload => ({
  type: _constants.APP_STATE_STATUS_CHANGE,
  payload
});
exports.appStateChangeAction = appStateChangeAction;
const clearDataAndGoBack = id => ({
  type: _constants.CLEAR_DATA_AND_GO_BACK,
  payload: id
});
exports.clearDataAndGoBack = clearDataAndGoBack;
const setEscortFromPassive = () => ({
  type: _constants.SET_TRIGGERED_FROM_PASSIVE
});
exports.setEscortFromPassive = setEscortFromPassive;
const handleErrorFailure = error => ({
  type: _constants.HANDLE_ERROR_FAILURE,
  payload: error,
  error: true
});
exports.handleErrorFailure = handleErrorFailure;
//# sourceMappingURL=actions.js.map