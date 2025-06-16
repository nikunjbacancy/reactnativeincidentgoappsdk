import { ADD_PENDING_ESCORT, CANCEL_ESCORT_FAILURE, CANCEL_ESCORT_REQUEST, CANCEL_ESCORT_SUCCESS, HIDE_CANCEL_ESCORT_MODAL, SHOW_CANCEL_ESCORT_MODAL, START_ESCORT_FAILURE, START_ESCORT_REQUEST, START_ESCORT_SUCCESS } from './constants';
export const startEscortRequest = (onLocation, comment, isPanic) => ({
  type: START_ESCORT_REQUEST,
  payload: {
    comment,
    onLocation,
    isPanic
  }
});
export const startEscortSuccess = () => ({
  type: START_ESCORT_SUCCESS
});
export const startEscortFailure = error => ({
  type: START_ESCORT_FAILURE,
  payload: error,
  error: true
});
export const cancelEscortRequest = () => ({
  type: CANCEL_ESCORT_REQUEST
});
export const cancelEscortSuccess = () => ({
  type: CANCEL_ESCORT_SUCCESS
});
export const cancelEscortFailure = error => ({
  type: CANCEL_ESCORT_FAILURE,
  payload: error,
  error: true
});
export const showCancelEscortModal = () => ({
  type: SHOW_CANCEL_ESCORT_MODAL
});
export const hideCancelEscortModal = () => ({
  type: HIDE_CANCEL_ESCORT_MODAL
});
export const addPendingEscort = incident => ({
  type: ADD_PENDING_ESCORT,
  payload: incident
});
//# sourceMappingURL=actions.js.map