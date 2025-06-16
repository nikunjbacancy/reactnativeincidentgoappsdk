"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _assign = _interopRequireDefault(require("lodash/assign"));
var _isString = _interopRequireDefault(require("lodash/isString"));
var _keys = _interopRequireDefault(require("lodash/keys"));
var _reduce = _interopRequireDefault(require("lodash/reduce"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const flattenMessages = (nestedMessages, prefix = '') => (0, _reduce.default)((0, _keys.default)(nestedMessages), (messages, key) => {
  const value = nestedMessages[key];
  const prefixedKey = prefix ? `${prefix}.${key}` : key;
  if ((0, _isString.default)(value)) {
    return (0, _immer.default)(messages, draft => {
      draft[prefixedKey] = value;
    });
  }
  return (0, _assign.default)(messages, flattenMessages(value, prefixedKey));
}, {});
var _default = exports.default = flattenMessages;
//# sourceMappingURL=flattenMessages.js.map