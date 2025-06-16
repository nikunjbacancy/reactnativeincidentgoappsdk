import { HIDE_PANIC_INFO, SHOW_PANIC_INFO, TRIGGER_DURESS_ERROR, TRIGGER_DURESS_REQUEST } from './constants';
export const makeSetShowPanicInfo = () => ({
  type: SHOW_PANIC_INFO
});
export const hidePanicInfo = () => ({
  type: HIDE_PANIC_INFO
});
export const triggerDuressRequest = onLocation => ({
  type: TRIGGER_DURESS_REQUEST,
  payload: {
    onLocation
  }
});
export const duressRequestError = errorMessage => ({
  type: TRIGGER_DURESS_ERROR,
  payload: {
    errorMessage
  }
});
//# sourceMappingURL=actions.js.map