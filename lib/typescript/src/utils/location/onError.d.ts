import { LocationError } from 'react-native-background-geolocation';
import { GeoError } from 'react-native-geolocation-service';
import { RejectGeoError } from './types';
declare const onGeolocationError: (reject: RejectGeoError, error: GeoError, isManual?: boolean, coarseLocation?: boolean) => void;
declare const onBackgroundGeolocationError: (error: LocationError) => void;
export { onGeolocationError, onBackgroundGeolocationError };
