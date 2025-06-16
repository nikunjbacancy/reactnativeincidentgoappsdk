/**
 *
 * OrganizationScreen saga
 *
 */
import { AxiosResponse } from 'axios';
import { Organization } from 'incident-code-core';
import { DeleteUserOrganizationRequestAction } from './types';
export declare function getUserOrganizations(): Generator<import("redux-saga/effects").CallEffect<AxiosResponse<Organization[]>> | import("redux-saga/effects").PutEffect<import("./types").OrganizationActionTypes>, void, AxiosResponse<Organization[]>>;
export declare function deleteUserOrganization({ payload, }: DeleteUserOrganizationRequestAction): Generator<import("redux-saga/effects").CallEffect<AxiosResponse<any>> | import("redux-saga/effects").PutEffect<import("./types").OrganizationActionTypes>, void, unknown>;
export default function organizationScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
