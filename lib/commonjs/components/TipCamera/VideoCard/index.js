"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../assets");
var _RecordTimer = _interopRequireDefault(require("../../../components/RecordTimer"));
var _actions = require("../../../containers/app/actions");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _reactNativeProgress = require("react-native-progress");
var _hooks = require("../../../utils/hooks");
var _lodash = require("../../../utils/lodash");
var _styled = _interopRequireDefault(require("../../../utils/styled"));
var _messages = _interopRequireDefault(require("../messages"));
var _types = require("../types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */

const VideoCard = ({
  id,
  videoPages,
  currentPage,
  duration,
  thumbnailUrl,
  text,
  navigateClick
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const setTipCameraModeAction = (0, _hooks.useAction)(_actions.setTipCameraMode);
  const setTipCameraVideoIndexAction = (0, _hooks.useAction)(_actions.setTipCameraVideoIndex);
  const handleCardPress = (0, _react.useCallback)(() => {
    const index = (0, _lodash.getFlattenIndex)({
      id
    })(videoPages) - currentPage;
    setTipCameraModeAction(_types.TipCameraMode.video);
    setTipCameraVideoIndexAction(index);
  }, [id, videoPages, currentPage]);
  if (text) {
    return /*#__PURE__*/_react.default.createElement(TextContainer, {
      onPress: navigateClick
    }, /*#__PURE__*/_react.default.createElement(GradientCountContainer, null, /*#__PURE__*/_react.default.createElement(LinkText, null, text === 'back' ? formatMessage(_messages.default.back) : text)));
  }
  return /*#__PURE__*/_react.default.createElement(Container, {
    disabled: !thumbnailUrl,
    onPress: handleCardPress
  }, /*#__PURE__*/_react.default.createElement(GradientContainer, null, /*#__PURE__*/_react.default.createElement(BackgroundImage, {
    source: {
      uri: thumbnailUrl
    }
  }, !thumbnailUrl && /*#__PURE__*/_react.default.createElement(Loading, {
    color: _assets.colors.white
  }), thumbnailUrl && /*#__PURE__*/_react.default.createElement(PlayIcon, {
    source: _assets.images.icPlay()
  }), /*#__PURE__*/_react.default.createElement(StyledRecordTimer, {
    recordedTime: duration
  }))));
};
var _default = exports.default = VideoCard;
const TextContainer = _styled.default.TouchableOpacity`
  width: 63px;
`;
const Container = _styled.default.TouchableOpacity`
  width: 63px;
  margin-right: 6px;
`;
const GradientCountContainer = (0, _styled.default)(_reactNativeLinearGradient.default).attrs(({
  theme
}) => ({
  colors: theme.colors.videoCardOverlay
}))`
  flex: 1;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
const GradientContainer = (0, _styled.default)(_reactNativeLinearGradient.default).attrs(({
  theme
}) => ({
  colors: theme.colors.videoCardOverlay
}))`
  border-radius: 8px;
  width: 63px;
  margin-right: 6px;
`;
const BackgroundImage = (0, _styled.default)(_reactNative.ImageBackground).attrs({
  imageStyle: {
    borderRadius: 8
  }
})`
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PlayIcon = _styled.default.Image`
  margin-top: -20px;
`;
const StyledRecordTimer = (0, _styled.default)(_RecordTimer.default)`
  bottom: 3px;
`;
const LinkText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 19px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: ${({
  theme
}) => theme.colors.light};
`;
const Loading = (0, _styled.default)(_reactNativeProgress.CircleSnail)`
  margin-bottom: 15px;
`;
//# sourceMappingURL=index.js.map