/**
 *
 * VideoRecordScreen actions
 *
 */
import { Id, Incident, IncidentVideo, Organization } from 'incident-code-core';
import { NewTipActionTypes, TipCreatedData } from './types';
export declare const uploadVideoRequest: (uri: string) => NewTipActionTypes;
export declare const uploadVideoSuccess: () => NewTipActionTypes;
export declare const uploadVideoFailure: (error: Error) => NewTipActionTypes;
export declare const createIncidentSuccess: (incident: Incident) => NewTipActionTypes;
export declare const createIncidentFailure: (error: Error) => NewTipActionTypes;
export declare const deleteIncidentRequest: () => NewTipActionTypes;
export declare const deleteIncidentFailure: (error: Error) => NewTipActionTypes;
export declare const deleteIncidentSuccess: () => NewTipActionTypes;
export declare const addIncidentVideo: (video: IncidentVideo) => NewTipActionTypes;
export declare const showCancelIncidentModal: () => NewTipActionTypes;
export declare const hideCancelIncidentModal: () => NewTipActionTypes;
export declare const showCallModal: () => NewTipActionTypes;
export declare const hideCallModal: () => NewTipActionTypes;
export declare const getUserOrganizationsRequest: () => NewTipActionTypes;
export declare const getUserOrganizationsFailure: (error: Error) => NewTipActionTypes;
export declare const getUserOrganizationsSuccess: (userOrganizations: Organization[]) => NewTipActionTypes;
export declare const showTipCreatedModal: (tipCreatedData: TipCreatedData) => NewTipActionTypes;
export declare const hideTipCreatedModal: () => NewTipActionTypes;
export declare const createTipWithChatRequest: () => NewTipActionTypes;
export declare const createTipWithChatSuccess: () => NewTipActionTypes;
export declare const createTipWithChatFailure: (error: Error) => NewTipActionTypes;
export declare const showFastAccessModal: () => NewTipActionTypes;
export declare const hideFastAccessModal: () => NewTipActionTypes;
export declare const getLastActiveTipOrganization: (organizationId: Id) => NewTipActionTypes;
export declare const getLastTipOrganizationSuccess: (organization: Organization) => NewTipActionTypes;
export declare const getLastTipOrganizationFailure: (error: Error) => NewTipActionTypes;
