import { GeoPoint } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';

const convertLocationToGeoPoint = (location: Location): GeoPoint => ({
  type: 'Point',
  coordinates: [location.coords.longitude, location.coords.latitude],
});

export default convertLocationToGeoPoint;
