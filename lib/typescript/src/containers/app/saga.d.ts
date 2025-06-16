import { AxiosResponse } from 'axios';
import { LoginSuccessAction } from '../../containers/screens/Onboarding/SignInCodeScreen/types';
import { AccessToken, AppUser, Config } from 'incident-code-core';
import { UpdateNameSuccessAction } from '../screens/Onboarding/UpdateNameScreen/types';
import { LogErrorAction } from './types';
export declare function saveToken({ payload }: LoginSuccessAction): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function saveUserPhone({ payload }: UpdateNameSuccessAction): Generator<import("redux-saga/effects").CallEffect<void>, void, unknown>;
export declare function getConfigs(): Generator<import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").CallEffect<AxiosResponse<Config>> | import("redux-saga/effects").PutEffect<import("./types").AppActionTypes>, void, AxiosResponse<Config>>;
export declare function triggerOnboardForInactiveUser(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, boolean, unknown>;
export declare function getProfile(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}> | import("redux-saga/effects").ForkEffect<void>, void, AxiosResponse<AppUser>>;
export declare function updateProfile(): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, AxiosResponse<AppUser>>;
export declare function getTwilioAccessToken(): Generator<any, void, boolean & AccessToken>;
export declare function logErrorToDB({ payload }: LogErrorAction): Generator<import("redux-saga/effects").CallEffect<void> | import("redux-saga/effects").SelectEffect, void, AppUser>;
export default function appSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
