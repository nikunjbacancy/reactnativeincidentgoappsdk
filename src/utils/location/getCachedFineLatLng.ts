import { LatLng } from 'incident-code-core';

import getCachedFinePosition from './getCachedFinePosition';

const getCachedFineGeoPoint = async (): Promise<LatLng> => {
  const geoPosition = await getCachedFinePosition();
  return {
    lat: geoPosition.coords.latitude,
    lng: geoPosition.coords.longitude,
  };
};

export default getCachedFineGeoPoint;
