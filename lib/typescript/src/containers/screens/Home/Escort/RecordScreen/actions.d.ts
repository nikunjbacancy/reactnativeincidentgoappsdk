/**
 *
 * RecordScreen actions
 *
 */
import { Id, IncidentEscort } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { AppStateStatusChangePayload, ImSafeRequestPayload, RecordScreenActionTypes, SendMessageRequestPayload } from './types';
export declare const showCallModal: () => RecordScreenActionTypes;
export declare const hideCallModal: () => RecordScreenActionTypes;
export declare const toggleRecordType: (incident: IncidentEscort) => RecordScreenActionTypes;
export declare const showSafeModal: () => RecordScreenActionTypes;
export declare const hideSafeModal: () => RecordScreenActionTypes;
export declare const showChatModal: () => RecordScreenActionTypes;
export declare const hideChatModal: () => RecordScreenActionTypes;
export declare const startChat: (incident: IncidentEscort) => RecordScreenActionTypes;
export declare const startChatSuccess: (messages: GiftedChatMessage[]) => RecordScreenActionTypes;
export declare const startChatFailure: (error: Error) => RecordScreenActionTypes;
export declare const addMessage: (message: GiftedChatMessage) => RecordScreenActionTypes;
export declare const sendMessageRequest: (payload: SendMessageRequestPayload) => RecordScreenActionTypes;
export declare const sendMessageSuccess: () => RecordScreenActionTypes;
export declare const sendMessageFailure: (error: Error) => RecordScreenActionTypes;
export declare const imSafeRequest: (payload: ImSafeRequestPayload) => RecordScreenActionTypes;
export declare const imSafeSuccess: () => RecordScreenActionTypes;
export declare const imSafeFailure: (error: Error) => RecordScreenActionTypes;
export declare const showPanicInfo: () => RecordScreenActionTypes;
export declare const hidePanicInfo: () => RecordScreenActionTypes;
export declare const enterPanicMode: (incident: IncidentEscort) => RecordScreenActionTypes;
export declare const exitPanicMode: (incident: IncidentEscort) => RecordScreenActionTypes;
export declare const showExitPanicModal: () => RecordScreenActionTypes;
export declare const hideExitPanicModal: () => RecordScreenActionTypes;
export declare const appStateChangeAction: (payload: AppStateStatusChangePayload) => RecordScreenActionTypes;
export declare const clearDataAndGoBack: (id?: Id) => RecordScreenActionTypes;
export declare const setEscortFromPassive: () => RecordScreenActionTypes;
export declare const handleErrorFailure: (error: Error) => RecordScreenActionTypes;
