"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/providers/NotificationProvider/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getBadges = async () => {
  const badgesStr = (await _asyncStorage.default.getItem(_constants.NOTIFICATION_BADGES_KEY)) || JSON.stringify([]);
  return JSON.parse(badgesStr);
};
var _default = exports.default = getBadges;
//# sourceMappingURL=getBadges.js.map