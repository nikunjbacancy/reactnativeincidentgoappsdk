"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var Yup = _interopRequireWildcard(require("yup"));
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * SetTimerModal form validator
 *
 */

const maxHours = 23;
const maxMinutes = 59;
const maxSeconds = 59;
const SetTimerSchema = formatMessage => Yup.object().shape({
  hours: Yup.number().integer(formatMessage(_messages.default.timerNumberValidation)).max(maxHours, `Hour ${formatMessage(_messages.default.timerMaxValueValidation)} ${maxHours}`),
  minutes: Yup.number().integer(formatMessage(_messages.default.timerNumberValidation)).max(maxMinutes, `Minute ${formatMessage(_messages.default.timerMaxValueValidation)} ${maxMinutes}`),
  seconds: Yup.number().integer(formatMessage(_messages.default.timerNumberValidation)).max(maxSeconds, `Second ${formatMessage(_messages.default.timerMaxValueValidation)} ${maxSeconds}`)
});
var _default = exports.default = SetTimerSchema;
//# sourceMappingURL=validator.js.map