import { Id, OrganizationProcedure, QueryResult } from 'incident-code-core';
export declare const endpoints: {
    procedures: string;
};
declare const _default: {
    getProcedure: (id: Id) => Promise<import("axios").AxiosResponse<QueryResult<OrganizationProcedure>>>;
};
export default _default;
