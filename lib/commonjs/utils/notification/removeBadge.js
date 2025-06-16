"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _api = require("../../api");
var _constants = require("../../containers/providers/NotificationProvider/constants");
var _filter = _interopRequireDefault(require("lodash/filter"));
var _getBadges = _interopRequireDefault(require("./getBadges"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const removeBadge = async incidentId => {
  const badges = await (0, _getBadges.default)();
  const filteredBadges = (0, _filter.default)(badges, b => b !== incidentId);
  await _asyncStorage.default.setItem(_constants.NOTIFICATION_BADGES_KEY, JSON.stringify(filteredBadges));
  _api.event.emit(_api.AppEvent.OnNotificationBadge, filteredBadges);
};
var _default = exports.default = removeBadge;
//# sourceMappingURL=removeBadge.js.map