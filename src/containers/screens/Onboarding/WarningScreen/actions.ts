import { Location } from 'react-native-background-geolocation';

import {
  HIDE_PANIC_INFO,
  SHOW_PANIC_INFO,
  TRIGGER_DURESS_ERROR,
  TRIGGER_DURESS_REQUEST,
} from './constants';
import { WarningScreenActionTypes } from './types';

export const makeSetShowPanicInfo = (): WarningScreenActionTypes => ({
  type: SHOW_PANIC_INFO,
});

export const hidePanicInfo = (): WarningScreenActionTypes => ({
  type: HIDE_PANIC_INFO,
});

export const triggerDuressRequest = (
  onLocation: (location: Location) => void,
): WarningScreenActionTypes => ({
  type: TRIGGER_DURESS_REQUEST,
  payload: { onLocation },
});

export const duressRequestError = (
  errorMessage: string,
): WarningScreenActionTypes => ({
  type: TRIGGER_DURESS_ERROR,
  payload: { errorMessage },
});
