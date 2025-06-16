/**
 *
 * App actions
 *
 */
import { TipCameraMode } from 'components/TipCamera/types';
import { AccessToken, AppUser, Config, ErrorLog } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { AppActionTypes, PassiveEscortData, SetIncidentEscortDataPayload } from './types';
export declare const getConfigsRequest: () => AppActionTypes;
export declare const getConfigsSuccess: (config: Config) => AppActionTypes;
export declare const getConfigsFailure: (error: Error) => AppActionTypes;
export declare const getProfileRequest: () => AppActionTypes;
export declare const getProfileSuccess: (user: AppUser) => AppActionTypes;
export declare const getProfileFailure: (error: Error) => AppActionTypes;
export declare const setTipCameraMode: (mode: TipCameraMode) => AppActionTypes;
export declare const setTipCameraVideoIndex: (index: number) => AppActionTypes;
export declare const getTwilioAccessTokenRequest: () => AppActionTypes;
export declare const getTwilioAccessTokenSuccess: (twilioAccessToken: AccessToken) => AppActionTypes;
export declare const getTwilioAccessTokenFailure: (error: Error) => AppActionTypes;
export declare const setIncidentEscortData: (payload: SetIncidentEscortDataPayload) => AppActionTypes;
export declare const clearIncidentEscortData: () => AppActionTypes;
export declare const setPassiveEscortData: (payload: PassiveEscortData) => AppActionTypes;
export declare const clearPassiveEscortData: () => AppActionTypes;
export declare const updateUserPortrait: (portraitUrl: string | undefined) => AppActionTypes;
export declare const updateProfileRequest: () => AppActionTypes;
export declare const UpdateLocationData: (location: Location | undefined) => AppActionTypes;
export declare const ClearLocationData: () => AppActionTypes;
export declare const LogErrorToDb: (error: ErrorLog) => AppActionTypes;
