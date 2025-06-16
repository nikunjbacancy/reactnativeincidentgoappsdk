import { GeoPoint, Id, Organization, OrganizationArea, OrganizationProcedure, OrganizationWithArea, QueryResult } from 'incident-code-core';
export declare const endpoints: {
    organizations: string;
};
declare const _default: {
    getOrganizations: (keyword?: string) => Promise<import("axios").AxiosResponse<QueryResult<Organization[]>>>;
    getOrganization: (id: Id) => Promise<import("axios").AxiosResponse<QueryResult<Organization>>>;
    getOrganizationProcedures: (id: Id) => Promise<import("axios").AxiosResponse<QueryResult<OrganizationProcedure[]>>>;
    getUserOrganizations: () => Promise<import("axios").AxiosResponse<Organization[]>>;
    findIntersectOrganizations: (point: GeoPoint) => Promise<import("axios").AxiosResponse<OrganizationWithArea[]>>;
    findOrganizationArea: (id: Id, point: GeoPoint) => Promise<import("axios").AxiosResponse<OrganizationArea>>;
};
export default _default;
