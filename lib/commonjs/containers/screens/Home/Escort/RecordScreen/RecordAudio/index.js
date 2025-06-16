"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _Map = require("../../../../../../components/Map");
var _TipMarker = _interopRequireDefault(require("../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipMarker"));
var _react = _interopRequireWildcard(require("react"));
var _reactNativeMaps = _interopRequireWildcard(require("react-native-maps"));
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */

const MAP_DELTAS = {
  latitudeDelta: 0.0057650618492886,
  longitudeDelta: 0.00398341566324234
};
const RecordAudio = ({
  location
}) => {
  if (!location) return /*#__PURE__*/_react.default.createElement(Loading, null);
  const [mapReady, setMapReady] = (0, _react.useState)(false);
  const latLng = (0, _react.useMemo)(() => ({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude
  }), [location]);
  const mapRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (mapReady) {
      var _mapRef$current;
      (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0 || _mapRef$current.animateToRegion({
        ...latLng,
        ...MAP_DELTAS
      }, 300);
    }
  }, [latLng]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Map, {
    ref: mapRef,
    provider: _reactNativeMaps.PROVIDER_GOOGLE,
    initialRegion: {
      ...latLng,
      ...MAP_DELTAS
    },
    zoomEnabled: false,
    rotateEnabled: false,
    scrollEnabled: false,
    customMapStyle: _Map.Constants.CUSTOM_MAP_STYLE,
    loadingEnabled: true,
    loadingIndicatorColor: _assets.colors.light,
    loadingBackgroundColor: _assets.colors.grey,
    onMapReady: () => setMapReady(true)
  }, /*#__PURE__*/_react.default.createElement(_reactNativeMaps.Marker, {
    coordinate: latLng
  }, /*#__PURE__*/_react.default.createElement(_TipMarker.default, {
    colors: [_assets.colors.highlight, _assets.colors.highlight]
  }))));
};
const Map = (0, _styled.default)(_reactNativeMaps.default)`
  min-height: 105%;
  height: 105%;
  width: 100%;
`;
const Loading = (0, _styled.default)(_components.LoadingIndicator)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(RecordAudio);
//# sourceMappingURL=index.js.map