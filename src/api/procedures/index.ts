import axios from '../../api/axios';
import { Id, OrganizationProcedure, QueryResult } from 'incident-code-core';

export const endpoints = {
  procedures: 'procedures',
};

export default {
  getProcedure: (id: Id) =>
    axios.get<QueryResult<OrganizationProcedure>>(
      `${endpoints.procedures}/${id}`,
    ),
};
