/**
 *
 * Settings selectors
 *
 */
import { createSelector } from 'reselect';
import { RootState } from 'store/types';
import { initialState } from './reducer';

/**
 * Direct selector to the Settings state domain
 */

const beaconRegisterSettingsScreenStateDomain = (state: RootState) =>
  state.settingsScreen || initialState;

/**
 * Default selector used by Settings
 */

const beaconRegisterSettingsScreenState = () =>
  createSelector(beaconRegisterSettingsScreenStateDomain, subState => subState);

export default beaconRegisterSettingsScreenState;
