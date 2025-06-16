"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeLocale = void 0;
var _constants = require("./constants");
/**
 *
 * LanguageProvider actions
 *
 */

const changeLocale = locale => ({
  type: _constants.CHANGE_LOCALE,
  payload: locale
});
exports.changeLocale = changeLocale;
//# sourceMappingURL=actions.js.map