"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _keys = _interopRequireDefault(require("lodash/keys"));
var _reduce = _interopRequireDefault(require("lodash/reduce"));
var _replace = _interopRequireDefault(require("lodash/replace"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const formatString = (str, placeholders) => {
  return (0, _reduce.default)((0, _keys.default)(placeholders), (prevStr, key) => {
    const reg = new RegExp(`\\\${${key}}`, 'gm');
    return (0, _replace.default)(prevStr, reg, placeholders[key]);
  }, str);
};
var _default = exports.default = formatString;
//# sourceMappingURL=formatString.js.map