import logger from '../../api/logger';
import { LocationError } from 'react-native-background-geolocation';
import { GeoError } from 'react-native-geolocation-service';

import { RejectGeoError } from './types';

const onGeolocationError = (
  reject: RejectGeoError,
  error: GeoError,
  isManual?: boolean,
  coarseLocation?: boolean,
) => {
  const type = coarseLocation == null ? 'fine' : 'coarse';
  const from = isManual == null ? 'watcher' : 'manual';
  logger.warn(
    'LocationService',
    `error on getting a ${type} location by ${from}`,
    error,
  );
  reject(error)
};

const onBackgroundGeolocationError = (error: LocationError) => {
  // Location Error Types: https://transistorsoft.github.io/react-native-background-geolocation/modules/_react_native_background_geolocation_.html#locationerror
  let errorType = '';
  switch (error) {
    case 0:
      errorType = 'Location unknown';
      break;
    case 1:
      errorType = 'Location permission denied';
      break;
    case 2:
      errorType = 'Network error';
      break;
    case 408:
      errorType = 'Location timeout';
      break;
    // case 499:
    //   errorType = 'Location request canceled';
    //   break;
    default:
      errorType = 'Location error code unknown';
      break;
  }
  logger.error('Background Geolocation Error', 'Error Code: ' + errorType);
};

export { onGeolocationError, onBackgroundGeolocationError };
