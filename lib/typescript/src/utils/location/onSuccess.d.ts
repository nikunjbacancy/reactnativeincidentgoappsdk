import { GeoPosition } from 'react-native-geolocation-service';
import { ResolveGeoPosition } from './types';
declare const onSuccess: (resolve: ResolveGeoPosition, position: GeoPosition, isManual?: boolean, coarseLocation?: boolean) => void;
export default onSuccess;
