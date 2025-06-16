"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoPlayer = exports.VideoLoading = exports.VideoContainer = exports.TouchableLogo = exports.Timer = exports.StyledBadge = exports.RecordStop = exports.RecordStart = exports.RecordControls = exports.PhoneButton = exports.Logo = exports.Container = exports.CloseButton = exports.CircleProgress = exports.ChatContainer = exports.ChatButton = exports.CameraFlipButton = exports.CameraFlashButton = exports.Camera = exports.BottomControls = void 0;
var _assets = require("../../assets");
var _reactNativeCamera = require("react-native-camera");
var _reactNativeProgress = require("react-native-progress");
var _reactNativeVideo = _interopRequireDefault(require("react-native-video"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _Badge = _interopRequireDefault(require("../Badge"));
var _ControlButton = _interopRequireDefault(require("../ControlButton"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
var _LoadingIndicator = _interopRequireDefault(require("../LoadingIndicator"));
var _RecordTimer = _interopRequireDefault(require("../RecordTimer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
  align-items: center;
  position: relative;
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const Camera = exports.Camera = (0, _styled.default)(_reactNativeCamera.RNCamera)`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
`;
const TouchableLogo = exports.TouchableLogo = _styled.default.TouchableOpacity.attrs({})`
  position: absolute;
  width: 30px;
  height: 21px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;
const Logo = exports.Logo = _styled.default.Image.attrs({
  source: _assets.images.icBack()
})`
  position: absolute;
  width: 30px;
  height: 21px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;
const Timer = exports.Timer = (0, _styled.default)(_RecordTimer.default)`
  top: 25px;
`;
const CameraFlashButton = exports.CameraFlashButton = (0, _styled.default)(_ControlButton.default).attrs({
  imageStyle: {
    width: 24,
    height: 24
  }
})`
  position: absolute;
  bottom: 5px;
  left: 0;
`;
const CameraFlipButton = exports.CameraFlipButton = (0, _styled.default)(_ControlButton.default).attrs({
  imageStyle: {
    width: 24,
    height: 24
  }
})`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;
const BottomControls = exports.BottomControls = _styled.default.View`
  flex-direction: row;
  flex: 0.2;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;
const PhoneButton = exports.PhoneButton = (0, _styled.default)(_ControlButton.default).attrs(({
  theme
}) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 30,
    height: 30
  }
}))`
  background-color: ${({
  theme
}) => theme.colors.background4};
  width: 62px;
  height: 62px;
`;
const RecordControls = exports.RecordControls = _styled.default.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  height: 74px;
  width: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border-width: 6px;
  border-color: ${({
  theme
}) => theme.colors.lightGrey};
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const RecordStart = exports.RecordStart = _styled.default.View`
  background-color: ${({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.white : colors.highlight};
  height: 62px;
  width: 62px;
  border-radius: 100px;
`;
const RecordStop = exports.RecordStop = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.highlight2};
  height: 32px;
  width: 32px;
  border-radius: 6px;
`;
const CircleProgress = exports.CircleProgress = (0, _styled.default)(_reactNativeProgress.Circle).attrs(({
  theme
}) => ({
  color: theme.colors.highlight,
  thickness: 6
}))`
  position: absolute;
  top: -6px;
  bottom: 6px;
  left: -6px;
  right: 6px;
  height: 74px;
  width: 74px;
`;
const ChatContainer = exports.ChatContainer = _styled.default.View`
  position: relative;
  
`;
const ChatButton = exports.ChatButton = (0, _styled.default)(_ControlButton.default).attrs(({
  theme
}) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 29,
    height: 26
  }
}))`
  background-color: ${({
  theme
}) => theme.colors.background4};
  width: 62px;
  height: 62px;
`;
const StyledBadge = exports.StyledBadge = (0, _styled.default)(_Badge.default)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: -9px;
  border-width: 3px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
const VideoContainer = exports.VideoContainer = _styled.default.TouchableHighlight`
  flex: 1;
  width: 97%;
  height: 83%;
  position: relative;
  align-items: center;
`;
const VideoPlayer = exports.VideoPlayer = (0, _styled.default)(_reactNativeVideo.default)`
  width: 97%;
  height: 83%;
  flex: 1;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const VideoLoading = exports.VideoLoading = (0, _styled.default)(_LoadingIndicator.default)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({
  theme
}) => theme.colors.highlight};
`;
const CloseButton = exports.CloseButton = (0, _styled.default)(_IconButton.default).attrs(({
  theme
}) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 40,
    height: 40
  }
}))`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 50px;
  height: 50px;
  padding: 10px;
`;
//# sourceMappingURL=styles.js.map