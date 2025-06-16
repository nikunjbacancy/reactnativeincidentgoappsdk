"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _Map = require("../../../../../../components/Map");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _reactNativeMaps = _interopRequireWildcard(require("react-native-maps"));
var _TipMarker = _interopRequireDefault(require("../TipMarker"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234
};
const MapSnapshot = ({
  coords,
  gradientColor
}) => /*#__PURE__*/_react.default.createElement(_reactNativeMaps.default, {
  provider: _reactNativeMaps.PROVIDER_GOOGLE,
  initialRegion: {
    ...coords,
    ...MAP_DELTAS
  },
  zoomEnabled: false,
  rotateEnabled: false,
  scrollEnabled: false,
  style: {
    ..._reactNative.StyleSheet.absoluteFillObject,
    bottom: -30,
    zIndex: 1
  },
  customMapStyle: _Map.Constants.CUSTOM_MAP_STYLE,
  loadingEnabled: true,
  loadingIndicatorColor: _assets.colors.light,
  loadingBackgroundColor: _assets.colors.grey,
  liteMode: true
}, /*#__PURE__*/_react.default.createElement(_reactNativeMaps.Marker, {
  coordinate: coords
}, /*#__PURE__*/_react.default.createElement(_TipMarker.default, {
  colors: gradientColor
})));
var _default = exports.default = MapSnapshot;
//# sourceMappingURL=index.js.map