"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../assets");
var _map = _interopRequireDefault(require("lodash/map"));
var _react = _interopRequireWildcard(require("react"));
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _styled = _interopRequireDefault(require("../../../utils/styled"));
var _constants = require("../constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */

const VideoTracker = ({
  trackerY,
  videoIndex,
  videos,
  onVideoSelected
}) => {
  const listContainerRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    var _listContainerRef$cur;
    (_listContainerRef$cur = listContainerRef.current) === null || _listContainerRef$cur === void 0 || _listContainerRef$cur.scrollTo({
      x: (_constants.THUMBNAIL_WIDTH + _constants.THUMBNAIL_MARGIN_RIGHT) * videoIndex,
      y: 0
    });
  }, [videoIndex]);
  const renderImage = (video, index) => {
    var _video$id;
    return /*#__PURE__*/_react.default.createElement(ThumbnailContainer, {
      key: (_video$id = video.id) === null || _video$id === void 0 ? void 0 : _video$id.toString(),
      onPress: () => onVideoSelected(index),
      width: _constants.THUMBNAIL_WIDTH,
      marginRight: _constants.THUMBNAIL_MARGIN_RIGHT
    }, /*#__PURE__*/_react.default.createElement(Thumbnail, {
      source: {
        uri: video.thumbnailUrl
      },
      width: _constants.THUMBNAIL_WIDTH
    }));
  };
  const renderTracker = () => /*#__PURE__*/_react.default.createElement(TrackerContainer, {
    left: trackerY,
    width: _constants.TRACKER_WIDTH
  }, /*#__PURE__*/_react.default.createElement(TrackerThumbOverlay, null, /*#__PURE__*/_react.default.createElement(TrackerImage, {
    source: _assets.images.icSliderTrack()
  })));
  return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(ListContainer, {
    ref: () => listContainerRef,
    showsVerticalScrollIndicator: false,
    horizontal: true
  }, (0, _map.default)(videos, renderImage), renderTracker()));
};
const Container = _styled.default.View`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  height: 90px;
  justify-content: space-between;
`;
const ListContainer = _styled.default.ScrollView`
  position: relative;
  height: 90px;
  width: 100%;
`;
const TrackerContainer = _styled.default.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({
  left
}) => left || 0}px;
  width: ${({
  width
}) => width || 16}px;
  background-color: rgba(0, 0, 0, 0.4);
`;
const TrackerThumbOverlay = (0, _styled.default)(_reactNativeLinearGradient.default).attrs(({
  theme
}) => ({
  colors: theme.colors.trackThumbOverlay
}))`
  flex: 1;
`;
const TrackerImage = _styled.default.Image`
  position: absolute;
  top: 49%;
  left: -32px;
  width: 80px;
  height: 3px;
  z-index: 10000;
  transform: rotate(90deg);
`;
const ThumbnailContainer = _styled.default.TouchableOpacity`
  width: ${({
  width
}) => width || 63}px;
  height: 90px;
  border-radius: 8px;
  margin-right: ${({
  marginRight
}) => marginRight || 6}px;
  overflow: hidden;
`;
const Thumbnail = _styled.default.Image`
  width: ${({
  width
}) => width || 78}px;
  height: 90px;
  resize-mode: cover;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(VideoTracker);
//# sourceMappingURL=index.js.map