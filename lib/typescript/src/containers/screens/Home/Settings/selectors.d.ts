import { RootState } from 'store/types';
/**
 * Default selector used by Settings
 */
declare const beaconRegisterSettingsScreenState: () => ((state: RootState) => import("./types").SettingsState) & import("reselect").OutputSelectorFields<(args_0: import("./types").SettingsState) => import("./types").SettingsState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default beaconRegisterSettingsScreenState;
