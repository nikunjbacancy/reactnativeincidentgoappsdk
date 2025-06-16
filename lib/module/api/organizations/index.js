import axios from '../axios';
export const endpoints = {
  organizations: 'organizations'
};
export default {
  getOrganizations: (keyword = '') => axios.get(`${endpoints.organizations}?filter[name][$regex]=${keyword}`),
  getOrganization: id => axios.get(`${endpoints.organizations}/${id}/info`),
  getOrganizationProcedures: id => axios.get(`${endpoints.organizations}/${id}/procedures`),
  getUserOrganizations: () => axios.get(`${endpoints.organizations}/app`),
  findIntersectOrganizations: point => axios.post(`${endpoints.organizations}/intersects`, point),
  findOrganizationArea: async (id, point) => axios.post(`${endpoints.organizations}/${id}/intersects`, point)
};
//# sourceMappingURL=index.js.map