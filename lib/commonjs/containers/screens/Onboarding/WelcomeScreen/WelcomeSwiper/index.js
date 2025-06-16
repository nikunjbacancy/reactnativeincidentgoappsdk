"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _map = _interopRequireDefault(require("lodash/map"));
var _react = _interopRequireWildcard(require("react"));
var _reactNativeSwiper = _interopRequireDefault(require("react-native-swiper"));
var _Welcome = _interopRequireDefault(require("../Welcome"));
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */

const WelcomeSwiper = ({
  index,
  onIndexChange,
  welcomeItems
}) => {
  const swiper = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    var _swiper$current;
    (_swiper$current = swiper.current) === null || _swiper$current === void 0 || _swiper$current.scrollTo(index, true);
  }, [swiper.current, index]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_reactNativeSwiper.default, {
    ref: swiper,
    loop: false,
    showsPagination: false,
    onIndexChanged: onIndexChange
  }, (0, _map.default)(welcomeItems, screen => /*#__PURE__*/_react.default.createElement(_Welcome.default, {
    welcomeItem: screen,
    key: screen.index
  }))));
};
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(WelcomeSwiper);
//# sourceMappingURL=index.js.map