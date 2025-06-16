import produce from 'immer';
import { HIDE_PANIC_INFO, SHOW_PANIC_INFO, TRIGGER_DURESS_ERROR, TRIGGER_DURESS_REQUEST } from './constants';
export const initialState = {
  showPanicInfo: false,
  error: false,
  errorMessage: undefined
};
const warningScreenReducer = produce((draft, action) => {
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
}, initialState);
export default warningScreenReducer;
//# sourceMappingURL=reducer.js.map