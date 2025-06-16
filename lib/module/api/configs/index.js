import axios from '../axios';
export const endpoints = {
  configs: 'configs'
};
export default {
  getConfigs: () => axios.get(endpoints.configs)
};
//# sourceMappingURL=index.js.map