"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = void 0;
var _theme = _interopRequireDefault(require("../../../assets/theme"));
var _react = _interopRequireWildcard(require("react"));
var _styled = require("../../../utils/styled");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * ThemeProvider
 *
 * This component provide the styled-component theme
 *
 */

// import { theme } from '../../../assets';

// import { theme } from 'assets';

const ThemeProvider = ({
  children
}) => /*#__PURE__*/_react.default.createElement(_styled.ThemeProvider, {
  theme: _theme.default
}, _react.Children.only(children));
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=index.js.map