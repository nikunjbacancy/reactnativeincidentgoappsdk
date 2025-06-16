"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _api = require("../../api");
var _constants = require("../../containers/providers/NotificationProvider/constants");
var _getBadges = _interopRequireDefault(require("./getBadges"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const addBadge = async incidentId => {
  const badges = await (0, _getBadges.default)();
  badges.push(incidentId);
  await _asyncStorage.default.setItem(_constants.NOTIFICATION_BADGES_KEY, JSON.stringify(badges));
  _api.event.emit(_api.AppEvent.OnNotificationBadge, badges);
};
var _default = exports.default = addBadge;
//# sourceMappingURL=addBadge.js.map