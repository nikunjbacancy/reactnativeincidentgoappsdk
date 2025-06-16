"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../api/twilio/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getTwilioAccessTokenFromStorage = async () => {
  const tokenStr = await _asyncStorage.default.getItem(_constants.KeyTwilioAccessToken);
  return JSON.parse(tokenStr || '{}');
};
var _default = exports.default = getTwilioAccessTokenFromStorage;
//# sourceMappingURL=getTwilioAccessTokenFromStorage.js.map