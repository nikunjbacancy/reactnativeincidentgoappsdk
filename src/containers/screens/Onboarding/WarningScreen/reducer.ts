import produce, { Draft } from 'immer';

import {
  HIDE_PANIC_INFO,
  SHOW_PANIC_INFO,
  TRIGGER_DURESS_ERROR,
  TRIGGER_DURESS_REQUEST,
} from './constants';
import { WarningScreenActionTypes, WarningScreenState } from './types';

export const initialState: WarningScreenState = {
  showPanicInfo: false,
  error: false,
  errorMessage: undefined,
};

const warningScreenReducer = produce(
  (draft: Draft<WarningScreenState>, action: WarningScreenActionTypes) => {
    switch (action.type) {
      case SHOW_PANIC_INFO:
        draft.showPanicInfo = true;
        break;
      case HIDE_PANIC_INFO:
        draft.showPanicInfo = false;
        break;
      case TRIGGER_DURESS_REQUEST:
        draft.showPanicInfo = false;
        break;
      case TRIGGER_DURESS_ERROR:
        draft.error = true;
        draft.errorMessage = action.payload.errorMessage;
        break;
      default:
        break;
    }
  },
  initialState,
);

export default warningScreenReducer;
