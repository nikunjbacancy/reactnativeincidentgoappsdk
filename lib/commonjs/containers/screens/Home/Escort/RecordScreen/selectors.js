"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectShouldShowSafeModal = exports.makeSelectShouldShowPanicInfo = exports.makeSelectShouldShowExitPanicModal = exports.makeSelectShouldShowChatModal = exports.makeSelectShouldShowCallModal = exports.makeSelectRequestingImSafe = exports.makeSelectRecordType = exports.makeSelectMessages = exports.makeSelectIsPanicMode = exports.makeSelectFromPassiveEscort = exports.makeSelectAppState = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * RecordScreen selectors
 *
 */

/**
 * Direct selector to the RecordScreen state domain
 */

const recordScreenStateDomain = state => state.escortRecordScreen || _reducer.initialState;

/**
 * Other specific selectors
 */

const makeSelectShouldShowCallModal = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  shouldShowCallModal
}) => shouldShowCallModal);
exports.makeSelectShouldShowCallModal = makeSelectShouldShowCallModal;
const makeSelectShouldShowSafeModal = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  shouldShowSafeModal
}) => shouldShowSafeModal);
exports.makeSelectShouldShowSafeModal = makeSelectShouldShowSafeModal;
const makeSelectShouldShowChatModal = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  shouldShowChatModal
}) => shouldShowChatModal);
exports.makeSelectShouldShowChatModal = makeSelectShouldShowChatModal;
const makeSelectShouldShowExitPanicModal = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  shouldShowExitPanicModal
}) => shouldShowExitPanicModal);
exports.makeSelectShouldShowExitPanicModal = makeSelectShouldShowExitPanicModal;
const makeSelectShouldShowPanicInfo = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  shouldShowPanicInfo
}) => shouldShowPanicInfo);
exports.makeSelectShouldShowPanicInfo = makeSelectShouldShowPanicInfo;
const makeSelectRecordType = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  recordType
}) => recordType);
exports.makeSelectRecordType = makeSelectRecordType;
const makeSelectMessages = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  messages
}) => messages);
exports.makeSelectMessages = makeSelectMessages;
const makeSelectRequestingImSafe = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  requestingImSafe
}) => requestingImSafe);
exports.makeSelectRequestingImSafe = makeSelectRequestingImSafe;
const makeSelectIsPanicMode = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  isPanicMode
}) => isPanicMode);
exports.makeSelectIsPanicMode = makeSelectIsPanicMode;
const makeSelectFromPassiveEscort = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  fromPassiveEscort
}) => fromPassiveEscort);
exports.makeSelectFromPassiveEscort = makeSelectFromPassiveEscort;
const makeSelectAppState = () => (0, _reselect.createSelector)(recordScreenStateDomain, ({
  appState
}) => appState);

/**
 * Default selector used by RecordScreen
 */
exports.makeSelectAppState = makeSelectAppState;
const makeSelectRecordScreenState = () => (0, _reselect.createSelector)(recordScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectRecordScreenState;
//# sourceMappingURL=selectors.js.map