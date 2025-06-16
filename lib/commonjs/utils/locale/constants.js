"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _keys = _interopRequireDefault(require("lodash/keys"));
var _translations = _interopRequireDefault(require("../../translations"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = {
  defaultAppLocale: 'en-US',
  availableLocales: (0, _keys.default)(_translations.default)
};
//# sourceMappingURL=constants.js.map