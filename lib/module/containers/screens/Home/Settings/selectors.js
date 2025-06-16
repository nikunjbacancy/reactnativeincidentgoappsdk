/**
 *
 * Settings selectors
 *
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the Settings state domain
 */

const beaconRegisterSettingsScreenStateDomain = state => state.settingsScreen || initialState;

/**
 * Default selector used by Settings
 */

const beaconRegisterSettingsScreenState = () => createSelector(beaconRegisterSettingsScreenStateDomain, subState => subState);
export default beaconRegisterSettingsScreenState;
//# sourceMappingURL=selectors.js.map