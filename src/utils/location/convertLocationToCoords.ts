import { GeoPoint } from 'incident-code-core';
import { LatLng } from 'react-native-maps';

const convertLocationToCoords = (location: GeoPoint): LatLng => {
  const [longitude, latitude] = location.coordinates!;
  return {
    latitude,
    longitude,
  };
};

export default convertLocationToCoords;
