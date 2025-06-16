/**
 *
 * Settings reducer
 *
 */

import produce from 'immer';
import { BEACON_REGISTRATION_FAILURE, BEACON_REGISTRATION_SUCCESS } from './constants';
export const initialState = {
  beaconRegisteredData: {
    flag: false,
    message: ''
  },
  isLoading: false
};
const settingsScreenReducer = produce((draft, action) => {
  switch (action.type) {
    case BEACON_REGISTRATION_SUCCESS:
      draft.beaconRegisteredData = action.payload;
      draft.isLoading = false;
      break;
    case BEACON_REGISTRATION_FAILURE:
      // draft.creatingTip = false;
      break;
    default:
  }
}, initialState);
export default settingsScreenReducer;
//# sourceMappingURL=reducer.js.map