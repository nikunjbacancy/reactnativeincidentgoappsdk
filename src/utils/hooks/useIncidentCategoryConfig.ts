import { makeSelectConfigs } from '../../containers/app/selectors';
import { IncidentCategoryConfig } from 'incident-code-core';
import find from 'lodash/find';

import useSelector from './useSelector';

const unknownIncidentCategory: IncidentCategoryConfig = {
  name: 'unknown',
  display: 'Unknown',
  notificationName: 'Unknown',
  imageUrl: '',
  backgroundColor: '#444964',
  backgroundGradientColors: ['#444964', '#444964'],
  order: 0,
  enabled: true,
};

const useIncidentCategoryConfig = (category?: string) => {
  const configs = useSelector(makeSelectConfigs());
  return (
    find<IncidentCategoryConfig>(configs.incidentCategories, {
      name: category,
    }) || unknownIncidentCategory
  );
};

export default useIncidentCategoryConfig;
