/**
 *
 * AddCommentScreen types
 *
 */
import { CreateTipMode } from '../VideoRecordScreen/types';
import { ADD_INCIDENT_COMMENT, CREATE_TIP_FAILURE, CREATE_TIP_REQUEST, CREATE_TIP_SUCCESS } from './constants';
export type CreateTipRequestPayload = {
    comment: string;
    createTipMode: CreateTipMode;
};
export interface AddCommentState {
    creatingTip: boolean;
}
export interface AddIncidentCommentAction {
    type: typeof ADD_INCIDENT_COMMENT;
    payload: string;
}
export interface CreateTipRequestAction {
    type: typeof CREATE_TIP_REQUEST;
    payload: CreateTipRequestPayload;
}
export interface CreateTipSuccessAction {
    type: typeof CREATE_TIP_SUCCESS;
}
export interface CreateTipFailureAction {
    type: typeof CREATE_TIP_FAILURE;
    payload: Error;
    error: boolean;
}
export type AddCommentActionTypes = AddIncidentCommentAction | CreateTipRequestAction | CreateTipSuccessAction | CreateTipFailureAction;
