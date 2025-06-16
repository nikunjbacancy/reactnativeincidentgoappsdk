/**
 *
 * Settings reducer
 *
 */

import produce, { Draft } from 'immer';

import {
  BEACON_REGISTRATION_FAILURE,
  BEACON_REGISTRATION_SUCCESS,
} from './constants';
import {
  BeaconRegistrationActionTypes,
  SettingsState,
} from './types';

export const initialState: SettingsState = {
  beaconRegisteredData: {
    flag: false,
    message: '',
  },
  isLoading: false,
};

const settingsScreenReducer = produce(
  (draft: Draft<SettingsState>, action: BeaconRegistrationActionTypes) => {
    switch (action.type) {
      case BEACON_REGISTRATION_SUCCESS:
        draft.beaconRegisteredData = action.payload
        draft.isLoading = false
        break;
      case BEACON_REGISTRATION_FAILURE:
        // draft.creatingTip = false;
        break;
      default:
    }
  },
  initialState,
);

export default settingsScreenReducer;
