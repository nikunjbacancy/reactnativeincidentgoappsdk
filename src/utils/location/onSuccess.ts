import logger from '../../api/logger';
import { GeoPosition } from 'react-native-geolocation-service';

import { ResolveGeoPosition } from './types';

const onSuccess = (
  resolve: ResolveGeoPosition,
  position: GeoPosition,
  isManual?: boolean,
  coarseLocation?: boolean,
) => {
  // appNative.event.emit(AppEvent.LocationUpdated)
  const type = coarseLocation == null ? 'fine' : 'coarse';
  const from = isManual == null ? 'watcher' : 'manual';
  logger.debug(
    'LocationService',
    `receive a ${type} location by ${from}`,
    position,
  );
  resolve(position);
};

export default onSuccess;
