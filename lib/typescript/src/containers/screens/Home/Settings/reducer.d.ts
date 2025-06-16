/**
 *
 * Settings reducer
 *
 */
import { BeaconRegistrationActionTypes, SettingsState } from './types';
export declare const initialState: SettingsState;
declare const settingsScreenReducer: <Base extends {
    readonly beaconRegisteredData: {
        readonly flag: boolean;
        readonly message: string;
    };
    readonly isLoading: boolean;
}>(base?: Base | undefined, action: BeaconRegistrationActionTypes) => Base;
export default settingsScreenReducer;
