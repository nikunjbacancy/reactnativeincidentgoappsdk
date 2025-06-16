import createAxiosInstance from '../utils/axios';
import configInterceptors from './interceptor';
const axios = createAxiosInstance();
configInterceptors(axios);
export default axios;
//# sourceMappingURL=axios.js.map