import { Location } from 'react-native-background-geolocation';
import { WarningScreenActionTypes } from './types';
export declare const makeSetShowPanicInfo: () => WarningScreenActionTypes;
export declare const hidePanicInfo: () => WarningScreenActionTypes;
export declare const triggerDuressRequest: (onLocation: (location: Location) => void) => WarningScreenActionTypes;
export declare const duressRequestError: (errorMessage: string) => WarningScreenActionTypes;
