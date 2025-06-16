/**
 *
 * SelectOrganizationScreen saga
 *
 */
import { AxiosResponse } from 'axios';
import { AppUser, Organization, QueryResult } from 'incident-code-core';
import { GetOrganizationsRequestAction, UpdateOrganizationsRequestAction } from './types';
export declare function getOrganizations({ payload }: GetOrganizationsRequestAction): Generator<import("redux-saga/effects").SelectEffect | import("redux-saga/effects").CallEffect<AxiosResponse<QueryResult<Organization[]>>> | import("redux-saga/effects").PutEffect<import("./types").SelectOrganizationActionTypes>, void, AxiosResponse<QueryResult<Organization>> & AppUser>;
export declare function updateOrganizations({ payload, }: UpdateOrganizationsRequestAction): any;
export default function selectOrganizationScreenSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
