import { Location } from 'react-native-background-geolocation';
import { HIDE_PANIC_INFO, SHOW_PANIC_INFO, TRIGGER_DURESS_ERROR, TRIGGER_DURESS_REQUEST } from './constants';
export interface WarningScreenState {
    showPanicInfo: boolean;
    error: boolean;
    errorMessage?: string;
}
export interface ShowPanicInfoAction {
    type: typeof SHOW_PANIC_INFO;
}
export interface HidePanicInfoAction {
    type: typeof HIDE_PANIC_INFO;
}
export interface TriggerDuressRequestAction {
    type: typeof TRIGGER_DURESS_REQUEST;
    payload: {
        onLocation: (location: Location) => void;
    };
}
export interface TriggerDuressErrorAction {
    type: typeof TRIGGER_DURESS_ERROR;
    payload: {
        errorMessage: string;
    };
}
export type WarningScreenActionTypes = ShowPanicInfoAction | HidePanicInfoAction | TriggerDuressRequestAction | TriggerDuressErrorAction;
