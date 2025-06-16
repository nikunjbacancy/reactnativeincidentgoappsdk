/**
 *
 * CountdownClock screen actions
 *
 */
import { Id, Incident, IncidentPassiveLogRequest, Organization, OrganizationProcedure, Ref } from 'incident-code-core';
import { CountdownClockActionTypes, ImSafeRequestPayload } from './types';
export declare const getProcedureRequest: (id: Id) => CountdownClockActionTypes;
export declare const getProcedureSuccess: (procedure: OrganizationProcedure) => CountdownClockActionTypes;
export declare const getProcedureFailure: (error: Error) => CountdownClockActionTypes;
export declare const showSetTimerModal: () => CountdownClockActionTypes;
export declare const hideSetTimerModal: () => CountdownClockActionTypes;
export declare const setTimerSuccess: (timer: number) => CountdownClockActionTypes;
export declare const setTimerFailure: (error: Error) => CountdownClockActionTypes;
export declare const completeProcedureAction: (id: string) => CountdownClockActionTypes;
export declare const showCallModal: () => CountdownClockActionTypes;
export declare const hideCallModal: () => CountdownClockActionTypes;
export declare const showSafeModal: () => CountdownClockActionTypes;
export declare const hideSafeModal: () => CountdownClockActionTypes;
export declare const showPanicInfo: () => CountdownClockActionTypes;
export declare const hidePanicInfo: () => CountdownClockActionTypes;
export declare const enterPanicMode: (organization: Organization) => CountdownClockActionTypes;
export declare const enterPanicModeSuccess: () => CountdownClockActionTypes;
export declare const enterPanicModeFailure: (error: Error) => CountdownClockActionTypes;
export declare const showExitPanicModal: () => CountdownClockActionTypes;
export declare const hideExitPanicModal: () => CountdownClockActionTypes;
export declare const imSafeRequest: (payload: ImSafeRequestPayload) => CountdownClockActionTypes;
export declare const imSafeSuccess: () => CountdownClockActionTypes;
export declare const imSafeFailure: (error: Error) => CountdownClockActionTypes;
export declare const startCountdownWarning: () => CountdownClockActionTypes;
export declare const cancelCountdownWarning: () => CountdownClockActionTypes;
export declare const startPassiveEscortRequest: (payload: {
    organization: Organization;
    id?: Id;
    safetyTimer: boolean;
}) => CountdownClockActionTypes;
export declare const startPassiveEscortSuccess: (incident: Incident) => CountdownClockActionTypes;
export declare const startPassiveEscortFailure: (error: Error) => CountdownClockActionTypes;
export declare const startVirtualEscortRequest: (organization: Organization) => CountdownClockActionTypes;
export declare const startVirtualEscortSuccess: () => CountdownClockActionTypes;
export declare const startVirtualEscortFailure: (error: Error) => CountdownClockActionTypes;
export declare const clearAreYouSafe: () => CountdownClockActionTypes;
export declare const logEscortAction: (payload: IncidentPassiveLogRequest) => CountdownClockActionTypes;
export declare const logPassiveEscortActionFailure: (error: Error) => CountdownClockActionTypes;
export declare const clearEscortErrorAction: () => CountdownClockActionTypes;
export declare const clearProcedure: () => CountdownClockActionTypes;
export declare const setSafetyTimer: (org: Ref<Organization>) => CountdownClockActionTypes;
