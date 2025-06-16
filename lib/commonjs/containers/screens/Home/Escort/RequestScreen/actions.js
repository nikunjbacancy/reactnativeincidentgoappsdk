"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startEscortSuccess = exports.startEscortRequest = exports.startEscortFailure = exports.showCancelEscortModal = exports.hideCancelEscortModal = exports.cancelEscortSuccess = exports.cancelEscortRequest = exports.cancelEscortFailure = exports.addPendingEscort = void 0;
var _constants = require("./constants");
const startEscortRequest = (onLocation, comment, isPanic) => ({
  type: _constants.START_ESCORT_REQUEST,
  payload: {
    comment,
    onLocation,
    isPanic
  }
});
exports.startEscortRequest = startEscortRequest;
const startEscortSuccess = () => ({
  type: _constants.START_ESCORT_SUCCESS
});
exports.startEscortSuccess = startEscortSuccess;
const startEscortFailure = error => ({
  type: _constants.START_ESCORT_FAILURE,
  payload: error,
  error: true
});
exports.startEscortFailure = startEscortFailure;
const cancelEscortRequest = () => ({
  type: _constants.CANCEL_ESCORT_REQUEST
});
exports.cancelEscortRequest = cancelEscortRequest;
const cancelEscortSuccess = () => ({
  type: _constants.CANCEL_ESCORT_SUCCESS
});
exports.cancelEscortSuccess = cancelEscortSuccess;
const cancelEscortFailure = error => ({
  type: _constants.CANCEL_ESCORT_FAILURE,
  payload: error,
  error: true
});
exports.cancelEscortFailure = cancelEscortFailure;
const showCancelEscortModal = () => ({
  type: _constants.SHOW_CANCEL_ESCORT_MODAL
});
exports.showCancelEscortModal = showCancelEscortModal;
const hideCancelEscortModal = () => ({
  type: _constants.HIDE_CANCEL_ESCORT_MODAL
});
exports.hideCancelEscortModal = hideCancelEscortModal;
const addPendingEscort = incident => ({
  type: _constants.ADD_PENDING_ESCORT,
  payload: incident
});
exports.addPendingEscort = addPendingEscort;
//# sourceMappingURL=actions.js.map