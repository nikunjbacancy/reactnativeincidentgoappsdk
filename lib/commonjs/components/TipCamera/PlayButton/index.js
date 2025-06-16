"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../assets");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ControlButton = ({
  isPlaying
}) => {
  const opacity = new _reactNative.Animated.Value(1);
  _reactNative.Animated.timing(opacity, {
    toValue: 0,
    duration: 750,
    delay: 0
  }).start();
  const image = isPlaying ? _assets.images.icPlay() : _assets.images.icPause();
  return /*#__PURE__*/_react.default.createElement(AnimatedView, {
    style: {
      opacity
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: image
  }));
};
const AnimatedView = (0, _styled.default)(_reactNative.Animated.View)`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background-color: ${({
  theme
}) => theme.colors.dark};
  opacity: ${({
  opacity
}) => opacity || 1};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-27.5px, -27.5px);
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(ControlButton);
//# sourceMappingURL=index.js.map