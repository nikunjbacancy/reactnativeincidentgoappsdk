/**
 *
 * MyTipsScreen actions
 *
 */
import { GetTipsRequestPayload, GetTipSuccessPayload, HasMoreDataPayload, MyTipsActionTypes, TipStatus } from './types';
export declare const getTipsRequest: (payload: GetTipsRequestPayload) => MyTipsActionTypes;
export declare const getTipsSuccess: (payload: GetTipSuccessPayload) => MyTipsActionTypes;
export declare const getTipsFailure: (error: Error) => MyTipsActionTypes;
export declare const addPageIndex: (tipStatus: TipStatus) => MyTipsActionTypes;
export declare const setHasMoreData: (payload: HasMoreDataPayload) => MyTipsActionTypes;
export declare const resetState: () => MyTipsActionTypes;
