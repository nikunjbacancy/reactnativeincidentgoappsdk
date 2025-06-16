"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showIOSForegroundNotification = exports.hideIOSForegroundNotification = void 0;
var _constants = require("./constants");
/**
 *
 * NotificationProvider actions
 *
 */

const showIOSForegroundNotification = notification => ({
  type: _constants.SHOW_IOS_FOREGROUND_NOTIFICATION,
  payload: notification
});
exports.showIOSForegroundNotification = showIOSForegroundNotification;
const hideIOSForegroundNotification = () => ({
  type: _constants.HIDE_IOS_FOREGROUND_NOTIFICATION
});
exports.hideIOSForegroundNotification = hideIOSForegroundNotification;
//# sourceMappingURL=actions.js.map