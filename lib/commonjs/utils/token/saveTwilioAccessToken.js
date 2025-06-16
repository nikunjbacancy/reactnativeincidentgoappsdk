"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../api/twilio/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable @typescript-eslint/camelcase */

const saveTwilioAccessToken = async token => {
  const tokenWithExpire = !token.expires_at ? {
    ...token,
    expires_at: Date.now() + (token.expires_in || 1) * 1000 - _constants.ExpireOffset
  } : token;
  await _asyncStorage.default.setItem(_constants.KeyTwilioAccessToken, JSON.stringify(tokenWithExpire));
};
var _default = exports.default = saveTwilioAccessToken;
//# sourceMappingURL=saveTwilioAccessToken.js.map