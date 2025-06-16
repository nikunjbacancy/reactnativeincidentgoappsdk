import { AddUserPortraitActionTypes } from './types';
export declare const updatePortraitRequest: (imgString: string) => AddUserPortraitActionTypes;
export declare const updatePortraitSuccess: () => AddUserPortraitActionTypes;
export declare const updatePortraitFailure: (error: Error) => AddUserPortraitActionTypes;
export declare const clearMessageType: () => AddUserPortraitActionTypes;
