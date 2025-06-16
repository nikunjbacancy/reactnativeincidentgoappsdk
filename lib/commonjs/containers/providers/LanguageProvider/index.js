"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _translations = _interopRequireDefault(require("../../../translations"));
var _common = require("../../../utils/common");
var _hooks = require("../../../utils/hooks");
var _selectors = require("./selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * LanguageProvider
 *
 * This component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `src/translations`)
 *
 */

const LanguageProvider = ({
  children
}) => {
  const locale = (0, _hooks.useSelector)((0, _selectors.makeSelectLocale)());
  return /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, {
    key: locale,
    locale: locale,
    defaultLocale: locale,
    messages: (0, _common.flattenMessages)(_translations.default[locale])
  }, _react.Children.only(children));
};
exports.LanguageProvider = LanguageProvider;
//# sourceMappingURL=index.js.map