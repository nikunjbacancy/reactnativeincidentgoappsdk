import { GeoPoint } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
declare const convertLocationToGeoPoint: (location: Location) => GeoPoint;
export default convertLocationToGeoPoint;
