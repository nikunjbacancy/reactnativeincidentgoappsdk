import { GeoPoint } from 'incident-code-core';
import { GeoPosition } from 'react-native-geolocation-service';

const convertPositionToPoint = (position: GeoPosition): GeoPoint => {
  // mongodb use longitude/latitude
  return {
    type: 'Point',
    coordinates: [position.coords.longitude, position.coords.latitude],
  };
};

export default convertPositionToPoint;
