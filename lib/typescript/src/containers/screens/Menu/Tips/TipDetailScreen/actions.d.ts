/**
 *
 * TipDetailScreen actions
 *
 */
import { Id, Incident, IncidentVideo } from 'incident-code-core';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { GetIncidentVideosRequestPayload, GetIncidentVideosSuccessPayload, GetMessagesRequestPayload, SendMessageRequestPayload, TipDetailActionTypes, UploadVideoRequestPayload } from './types';
export declare const getIncidentVideosRequest: (payload: GetIncidentVideosRequestPayload) => TipDetailActionTypes;
export declare const getIncidentVideosSuccess: (payload: GetIncidentVideosSuccessPayload) => TipDetailActionTypes;
export declare const getIncidentVideosFailure: (error: Error) => TipDetailActionTypes;
export declare const showCallModal: () => TipDetailActionTypes;
export declare const hideCallModal: () => TipDetailActionTypes;
export declare const showChatModal: () => TipDetailActionTypes;
export declare const hideChatModal: () => TipDetailActionTypes;
export declare const uploadVideoRequest: (payload: UploadVideoRequestPayload) => TipDetailActionTypes;
export declare const uploadVideoSuccess: () => TipDetailActionTypes;
export declare const uploadVideoFailure: (error: Error) => TipDetailActionTypes;
export declare const addIncidentVideo: (video: IncidentVideo) => TipDetailActionTypes;
export declare const getMessagesRequest: (payload: GetMessagesRequestPayload) => TipDetailActionTypes;
export declare const getMessagesSuccess: (messages: GiftedChatMessage[]) => TipDetailActionTypes;
export declare const getMessagesFailure: (error: Error) => TipDetailActionTypes;
export declare const addMessage: (message: GiftedChatMessage) => TipDetailActionTypes;
export declare const sendMessageRequest: (payload: SendMessageRequestPayload) => TipDetailActionTypes;
export declare const sendMessageSuccess: () => TipDetailActionTypes;
export declare const sendMessageFailure: (error: Error) => TipDetailActionTypes;
export declare const getIncidentRequest: (incidentId: Id | undefined) => TipDetailActionTypes;
export declare const getIncidentSuccess: (incident: Incident) => TipDetailActionTypes;
export declare const getIncidentFailure: (error: Error) => TipDetailActionTypes;
