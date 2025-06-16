import rootAxios from 'axios';
import Qs from 'qs';
// import Config from 'react-native-config';
import { sdkConfigs } from '../sdkConfigs';
const createAxiosInstance = () => rootAxios.create({
  // baseURL: Config.API_URL,
  baseURL: sdkConfigs.configs.base_url,
  paramsSerializer: params => Qs.stringify(params, {
    arrayFormat: 'brackets'
  })
});
export default createAxiosInstance;
//# sourceMappingURL=axios.js.map