"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectNotificationProviderStateDomain = exports.makeSelectIOSForegroundNotification = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
/**
 *
 * NotificationProvider selectors
 *
 */

/**
 * Direct selector to the NotificationProvider state domain
 */

const selectNotificationProviderStateDomain = state => state.notificationProvider || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectNotificationProviderStateDomain = selectNotificationProviderStateDomain;
const makeSelectIOSForegroundNotification = () => (0, _reselect.createSelector)(selectNotificationProviderStateDomain, ({
  iosForegroundNotification
}) => iosForegroundNotification);

/**
 * Default selector used by NotificationProvider
 */
exports.makeSelectIOSForegroundNotification = makeSelectIOSForegroundNotification;
const makeSelectNotificationProviderState = () => (0, _reselect.createSelector)(selectNotificationProviderStateDomain, subState => subState);
var _default = exports.default = makeSelectNotificationProviderState;
//# sourceMappingURL=selectors.js.map