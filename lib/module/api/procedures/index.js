import axios from '../../api/axios';
export const endpoints = {
  procedures: 'procedures'
};
export default {
  getProcedure: id => axios.get(`${endpoints.procedures}/${id}`)
};
//# sourceMappingURL=index.js.map