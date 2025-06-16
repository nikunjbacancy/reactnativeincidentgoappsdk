/**
 *
 * AddCommentScreen actions
 *
 */
import { AddCommentActionTypes, CreateTipRequestPayload } from './types';
export declare const addComment: (comment: string) => AddCommentActionTypes;
export declare const createTipRequest: (payload: CreateTipRequestPayload) => AddCommentActionTypes;
export declare const createTipSuccess: () => AddCommentActionTypes;
export declare const createTipFailure: (error: Error) => AddCommentActionTypes;
