"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSystemLocale = void 0;
var _get = _interopRequireDefault(require("lodash/get"));
var _reactNativeLocalize = require("react-native-localize");
var _constants = _interopRequireDefault(require("./constants"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import * as RNLocalize from 'react-native-localize'

const getSystemLocale = () =>
// IOS
(0, _get.default)((0, _reactNativeLocalize.findBestAvailableLanguage)(_constants.default.availableLocales), 'languageTag') ||
// Default
_constants.default.defaultAppLocale;

// export default getSystemLocale;
exports.getSystemLocale = getSystemLocale;
//# sourceMappingURL=getSystemLocale.js.map