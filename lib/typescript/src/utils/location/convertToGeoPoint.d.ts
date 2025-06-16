import { GeoPoint } from 'incident-code-core';
import { GeoPosition } from 'react-native-geolocation-service';
declare const convertPositionToPoint: (position: GeoPosition) => GeoPoint;
export default convertPositionToPoint;
