"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _getSystemLocale = require("../../../utils/locale/getSystemLocale");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * LanguageProvider reducer
 *
 */

// import { getSystemLocale } from '../../../utils/locale/getSystemLocale'

const locale = (0, _getSystemLocale.getSystemLocale)();
const initialState = exports.initialState = {
  locale: locale
};
const languageProviderReducer = (0, _immer.default)((draft, action) => {
  if (action.type === _constants.CHANGE_LOCALE) {
    draft.locale = action.payload;
  }
}, initialState);
var _default = exports.default = languageProviderReducer;
//# sourceMappingURL=reducer.js.map