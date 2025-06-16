import { GeoPoint } from 'incident-code-core';
import { LatLng } from 'react-native-maps';
declare const convertLocationToCoords: (location: GeoPoint) => LatLng;
export default convertLocationToCoords;
