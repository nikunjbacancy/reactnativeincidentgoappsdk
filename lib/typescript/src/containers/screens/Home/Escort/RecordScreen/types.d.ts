/**
 *
 * RecordScreen types
 *
 */
import { Id, IncidentEscort } from 'incident-code-core';
import { AppStateStatus } from 'react-native';
import { Location } from 'react-native-background-geolocation';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { ADD_MESSAGE, APP_STATE_STATUS_CHANGE, CLEAR_DATA_AND_GO_BACK, ENTER_PANIC_MODE, EXIT_PANIC_MODE, HANDLE_ERROR_FAILURE, HIDE_CALL_MODAL, HIDE_CHAT_MODAL, HIDE_EXIT_PANIC_MODAL, HIDE_PANIC_INFO, HIDE_SAFE_MODAL, IM_SAFE_FAILURE, IM_SAFE_REQUEST, IM_SAFE_SUCCESS, SEND_MESSAGE_FAILURE, SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SET_TRIGGERED_FROM_PASSIVE, SHOW_CALL_MODAL, SHOW_CHAT_MODAL, SHOW_EXIT_PANIC_MODAL, SHOW_PANIC_INFO, SHOW_SAFE_MODAL, START_CHAT_FAILURE, START_CHAT_REQUEST, START_CHAT_SUCCESS, TOGGLE_RECORD_TYPE } from './constants';
export declare enum EscortState {
    Started = "Started",
    Finished = "Finished"
}
export declare enum RecordType {
    Video = "Video",
    Audio = "Audio"
}
export declare enum PanicMode {
    Active = "Active",
    Inactive = "Inactive"
}
export type SendMessageRequestPayload = {
    incidentEscort: IncidentEscort;
    message: GiftedChatMessage;
    location: Location;
};
export type ImSafeRequestPayload = {
    incidentEscort: IncidentEscort;
    comment?: string;
};
export type AppStateStatusChangePayload = {
    state: AppStateStatus;
    incidentEscort: IncidentEscort;
};
export interface RecordState {
    shouldShowCallModal: boolean;
    shouldShowSafeModal: boolean;
    shouldShowExitPanicModal: boolean;
    shouldShowPanicInfo: boolean;
    recordType: RecordType;
    shouldShowChatModal: boolean;
    messages: GiftedChatMessage[];
    requestingImSafe: boolean;
    isPanicMode: boolean;
    fromPassiveEscort: boolean;
    error: boolean;
    errorMessage: string;
    appState: AppStateStatus;
}
export interface ShowCallModalAction {
    type: typeof SHOW_CALL_MODAL;
}
export interface HideCallModalAction {
    type: typeof HIDE_CALL_MODAL;
}
export interface ToggleRecordTypeAction {
    type: typeof TOGGLE_RECORD_TYPE;
    payload: IncidentEscort;
}
export interface ShowSafeModalAction {
    type: typeof SHOW_SAFE_MODAL;
}
export interface HideSafeModalAction {
    type: typeof HIDE_SAFE_MODAL;
}
export interface ShowChatModalAction {
    type: typeof SHOW_CHAT_MODAL;
}
export interface HideChatModalAction {
    type: typeof HIDE_CHAT_MODAL;
}
export interface StartChatRequestAction {
    type: typeof START_CHAT_REQUEST;
    payload: IncidentEscort;
}
export interface StartChatSuccessAction {
    type: typeof START_CHAT_SUCCESS;
    payload: GiftedChatMessage[];
}
export interface StartChatFailureAction {
    type: typeof START_CHAT_FAILURE;
    payload: Error;
    error: boolean;
}
export interface SendMessageRequestAction {
    type: typeof SEND_MESSAGE_REQUEST;
    payload: SendMessageRequestPayload;
}
export interface SendMessageSuccessAction {
    type: typeof SEND_MESSAGE_SUCCESS;
}
export interface SendMessageFailureAction {
    type: typeof SEND_MESSAGE_FAILURE;
    payload: Error;
    error: boolean;
}
export interface AddMessageAction {
    type: typeof ADD_MESSAGE;
    payload: GiftedChatMessage;
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
export interface ShowPanicInfoAction {
    type: typeof SHOW_PANIC_INFO;
}
export interface HidePanicInfoAction {
    type: typeof HIDE_PANIC_INFO;
}
export interface EnterPanicModeAction {
    type: typeof ENTER_PANIC_MODE;
    payload: IncidentEscort;
}
export interface ExitPanicModeAction {
    type: typeof EXIT_PANIC_MODE;
    payload: IncidentEscort;
}
export interface ShowExitPanicModalAction {
    type: typeof SHOW_EXIT_PANIC_MODAL;
}
export interface HideExitPanicModalAction {
    type: typeof HIDE_EXIT_PANIC_MODAL;
}
export interface ClearDataAndGoBackAction {
    type: typeof CLEAR_DATA_AND_GO_BACK;
    payload?: Id;
}
export interface SetTriggeredFromPassiveAction {
    type: typeof SET_TRIGGERED_FROM_PASSIVE;
}
export interface HandleErrorFailureAction {
    type: typeof HANDLE_ERROR_FAILURE;
    payload: Error;
    error: boolean;
}
export interface AppStateStatusChangeAction {
    type: typeof APP_STATE_STATUS_CHANGE;
    payload: AppStateStatusChangePayload;
}
export type RecordScreenActionTypes = ShowCallModalAction | HideCallModalAction | ToggleRecordTypeAction | ShowSafeModalAction | HideSafeModalAction | ShowChatModalAction | HideChatModalAction | StartChatRequestAction | StartChatSuccessAction | StartChatFailureAction | SendMessageRequestAction | SendMessageSuccessAction | SendMessageFailureAction | AddMessageAction | ImSafeRequestAction | ImSafeSuccessAction | ImSafeFailureAction | ShowPanicInfoAction | HidePanicInfoAction | EnterPanicModeAction | ExitPanicModeAction | ShowExitPanicModalAction | HideExitPanicModalAction | ClearDataAndGoBackAction | SetTriggeredFromPassiveAction | HandleErrorFailureAction | AppStateStatusChangeAction;
