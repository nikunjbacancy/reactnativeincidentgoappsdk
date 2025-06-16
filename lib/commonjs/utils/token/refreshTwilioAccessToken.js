"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshTwilioAccessToken = void 0;
var api = _interopRequireWildcard(require("../../api"));
var _saveTwilioAccessToken = _interopRequireDefault(require("./saveTwilioAccessToken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const refreshTwilioAccessToken = async () => {
  const token = await api.twilio.getToken();
  await (0, _saveTwilioAccessToken.default)(token);
  return token;
};
exports.refreshTwilioAccessToken = refreshTwilioAccessToken;
//# sourceMappingURL=refreshTwilioAccessToken.js.map