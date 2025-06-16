/**
 *
 * RecordScreen actions
 *
 */

import { Id, IncidentEscort } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';

import {
  ADD_MESSAGE,
  APP_STATE_STATUS_CHANGE,
  CLEAR_DATA_AND_GO_BACK,
  ENTER_PANIC_MODE,
  EXIT_PANIC_MODE,
  HANDLE_ERROR_FAILURE,
  HIDE_CALL_MODAL,
  HIDE_CHAT_MODAL,
  HIDE_EXIT_PANIC_MODAL,
  HIDE_PANIC_INFO,
  HIDE_SAFE_MODAL,
  IM_SAFE_FAILURE,
  IM_SAFE_REQUEST,
  IM_SAFE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SET_TRIGGERED_FROM_PASSIVE,
  SHOW_CALL_MODAL,
  SHOW_CHAT_MODAL,
  SHOW_EXIT_PANIC_MODAL,
  SHOW_PANIC_INFO,
  SHOW_SAFE_MODAL,
  START_CHAT_FAILURE,
  START_CHAT_REQUEST,
  START_CHAT_SUCCESS,
  TOGGLE_RECORD_TYPE,
} from './constants';
import {
  AppStateStatusChangePayload,
  ImSafeRequestPayload,
  RecordScreenActionTypes,
  SendMessageRequestPayload,
} from './types';

export const showCallModal = (): RecordScreenActionTypes => ({
  type: SHOW_CALL_MODAL,
});

export const hideCallModal = (): RecordScreenActionTypes => ({
  type: HIDE_CALL_MODAL,
});

export const toggleRecordType = (
  incident: IncidentEscort,
): RecordScreenActionTypes => ({
  type: TOGGLE_RECORD_TYPE,
  payload: incident,
});

export const showSafeModal = (): RecordScreenActionTypes => ({
  type: SHOW_SAFE_MODAL,
});

export const hideSafeModal = (): RecordScreenActionTypes => ({
  type: HIDE_SAFE_MODAL,
});

export const showChatModal = (): RecordScreenActionTypes => ({
  type: SHOW_CHAT_MODAL,
});

export const hideChatModal = (): RecordScreenActionTypes => ({
  type: HIDE_CHAT_MODAL,
});

export const startChat = (
  incident: IncidentEscort,
): RecordScreenActionTypes => ({
  type: START_CHAT_REQUEST,
  payload: incident,
});

export const startChatSuccess = (
  messages: GiftedChatMessage[],
): RecordScreenActionTypes => ({
  type: START_CHAT_SUCCESS,
  payload: messages,
});

export const startChatFailure = (error: Error): RecordScreenActionTypes => ({
  type: START_CHAT_FAILURE,
  payload: error,
  error: true,
});

export const addMessage = (
  message: GiftedChatMessage,
): RecordScreenActionTypes => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const sendMessageRequest = (
  payload: SendMessageRequestPayload,
): RecordScreenActionTypes => ({
  type: SEND_MESSAGE_REQUEST,
  payload,
});

export const sendMessageSuccess = (): RecordScreenActionTypes => ({
  type: SEND_MESSAGE_SUCCESS,
});

export const sendMessageFailure = (error: Error): RecordScreenActionTypes => ({
  type: SEND_MESSAGE_FAILURE,
  payload: error,
  error: true,
});

export const imSafeRequest = (
  payload: ImSafeRequestPayload,
): RecordScreenActionTypes => ({
  type: IM_SAFE_REQUEST,
  payload,
});

export const imSafeSuccess = (): RecordScreenActionTypes => ({
  type: IM_SAFE_SUCCESS,
});

export const imSafeFailure = (error: Error): RecordScreenActionTypes => ({
  type: IM_SAFE_FAILURE,
  payload: error,
  error: true,
});

export const showPanicInfo = (): RecordScreenActionTypes => ({
  type: SHOW_PANIC_INFO,
});

export const hidePanicInfo = (): RecordScreenActionTypes => ({
  type: HIDE_PANIC_INFO,
});

export const enterPanicMode = (
  incident: IncidentEscort,
): RecordScreenActionTypes => ({
  type: ENTER_PANIC_MODE,
  payload: incident,
});

export const exitPanicMode = (
  incident: IncidentEscort,
): RecordScreenActionTypes => ({
  type: EXIT_PANIC_MODE,
  payload: incident,
});

export const showExitPanicModal = (): RecordScreenActionTypes => ({
  type: SHOW_EXIT_PANIC_MODAL,
});

export const hideExitPanicModal = (): RecordScreenActionTypes => ({
  type: HIDE_EXIT_PANIC_MODAL,
});

export const appStateChangeAction = (
  payload: AppStateStatusChangePayload,
): RecordScreenActionTypes => ({
  type: APP_STATE_STATUS_CHANGE,
  payload,
});

export const clearDataAndGoBack = (id?: Id): RecordScreenActionTypes => ({
  type: CLEAR_DATA_AND_GO_BACK,
  payload: id,
});

export const setEscortFromPassive = (): RecordScreenActionTypes => ({
  type: SET_TRIGGERED_FROM_PASSIVE,
});

export const handleErrorFailure = (error: Error): RecordScreenActionTypes => ({
  type: HANDLE_ERROR_FAILURE,
  payload: error,
  error: true,
});
