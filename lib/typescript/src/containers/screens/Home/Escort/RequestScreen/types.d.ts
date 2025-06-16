import { Incident } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { ADD_PENDING_ESCORT, CANCEL_ESCORT_FAILURE, CANCEL_ESCORT_REQUEST, CANCEL_ESCORT_SUCCESS, HIDE_CANCEL_ESCORT_MODAL, SHOW_CANCEL_ESCORT_MODAL, START_ESCORT_FAILURE, START_ESCORT_REQUEST, START_ESCORT_SUCCESS } from './constants';
export interface RequestEscortState {
    requestingEscort: boolean;
    error: boolean;
    errorMessage: string;
    shouldShowCancelEscortModal: boolean;
    pendingEscort?: Incident;
}
export interface StartEscortRequestAction {
    type: typeof START_ESCORT_REQUEST;
    payload: {
        comment: string | undefined;
        onLocation: (location: Location) => void;
        isPanic: boolean | undefined;
    };
}
export interface StartEscortSuccessAction {
    type: typeof START_ESCORT_SUCCESS;
}
export interface StartEscortFailureAction {
    type: typeof START_ESCORT_FAILURE;
    payload: Error;
    error: boolean;
}
export interface CancelEscortRequestAction {
    type: typeof CANCEL_ESCORT_REQUEST;
}
export interface CancelEscortSuccessAction {
    type: typeof CANCEL_ESCORT_SUCCESS;
}
export interface CancelEscortFailureAction {
    type: typeof CANCEL_ESCORT_FAILURE;
    payload: Error;
    error: boolean;
}
export interface ShowCancelEscortModalAction {
    type: typeof SHOW_CANCEL_ESCORT_MODAL;
}
export interface HideCancelEscortModalAction {
    type: typeof HIDE_CANCEL_ESCORT_MODAL;
}
export interface AddPendingEscortAction {
    type: typeof ADD_PENDING_ESCORT;
    payload: Incident;
}
export declare enum EscortType {
    Timed = "Timed",
    Live = "Live",
    Duress = "Duress",
    Safety = "Safety,"
}
export type RequestEscortActionTypes = StartEscortRequestAction | StartEscortSuccessAction | StartEscortFailureAction | CancelEscortRequestAction | CancelEscortSuccessAction | CancelEscortFailureAction | ShowCancelEscortModalAction | HideCancelEscortModalAction | AddPendingEscortAction;
