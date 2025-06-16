import { makeSelectConfigs } from '../../containers/app/selectors';
import find from 'lodash/find';
import useSelector from './useSelector';
const unknownIncidentCategory = {
  name: 'unknown',
  display: 'Unknown',
  notificationName: 'Unknown',
  imageUrl: '',
  backgroundColor: '#444964',
  backgroundGradientColors: ['#444964', '#444964'],
  order: 0,
  enabled: true
};
const useIncidentCategoryConfig = category => {
  const configs = useSelector(makeSelectConfigs());
  return find(configs.incidentCategories, {
    name: category
  }) || unknownIncidentCategory;
};
export default useIncidentCategoryConfig;
//# sourceMappingURL=useIncidentCategoryConfig.js.map