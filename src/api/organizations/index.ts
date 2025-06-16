import {
  GeoPoint,
  Id,
  Organization,
  OrganizationArea,
  OrganizationProcedure,
  OrganizationWithArea,
  QueryResult,
} from 'incident-code-core';

import axios from '../axios';

export const endpoints = {
  organizations: 'organizations',
};

export default {
  getOrganizations: (keyword = '') =>
    axios.get<QueryResult<Organization[]>>(
      `${endpoints.organizations}?filter[name][$regex]=${keyword}`,
    ),
  getOrganization: (id: Id) =>
    axios.get<QueryResult<Organization>>(
      `${endpoints.organizations}/${id}/info`,
    ),
  getOrganizationProcedures: (id: Id) =>
    axios.get<QueryResult<OrganizationProcedure[]>>(
      `${endpoints.organizations}/${id}/procedures`,
    ),
  getUserOrganizations: () =>
    axios.get<Organization[]>(`${endpoints.organizations}/app`),
  findIntersectOrganizations: (point: GeoPoint) =>
    axios.post<OrganizationWithArea[]>(
      `${endpoints.organizations}/intersects`,
      point,
    ),
  findOrganizationArea: async (id: Id, point: GeoPoint) =>
    axios.post<OrganizationArea>(
      `${endpoints.organizations}/${id}/intersects`,
      point,
    ),
};
