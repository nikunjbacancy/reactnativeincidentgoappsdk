"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwilioVideoPreview = exports.ToggleText = exports.ToggleImageContainer = exports.ToggleImage = exports.ToggleContainer = exports.StyledBadge = exports.SharingText = exports.SafeButtonText = exports.SafeButton = exports.RecordDot = exports.RecordContainer = exports.PhoneButton = exports.PanicOverlay = exports.PanicInfoContainer = exports.OrganizationName = exports.MiddleControls = exports.Logo = exports.Container = exports.ChatContainer = exports.ChatButton = exports.CameraFlipButton = exports.Camera = exports.BottomControls = exports.AudioStream = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _Badge = _interopRequireDefault(require("../../../../../components/Badge"));
var _ControlButton = _interopRequireDefault(require("../../../../../components/ControlButton"));
var _reactNativeTwilioVideoWebrtc = require("react-native-twilio-video-webrtc");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
  align-items: center;
  position: relative;
`;
const Camera = exports.Camera = _styled.default.View`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
  background-color: ${({
  theme
}) => theme.colors.background3};
`;
const MiddleControls = exports.MiddleControls = _styled.default.View`
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 0;
  margin-top: auto;
`;
const SafeButton = exports.SafeButton = _styled.default.TouchableOpacity`
  background-color: ${({
  theme
}) => theme.colors.dark};
  height: 40px;
  width: 47%;
  border-radius: 6px;
  justify-content: center;
`;
const SafeButtonText = exports.SafeButtonText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
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
const ToggleContainer = exports.ToggleContainer = _styled.default.TouchableOpacity`
  background-color: ${({
  theme
}) => theme.colors.dark};
  border-radius: 100px;
  overflow: hidden;
  width: 148px;
  height: 62px;
  position: relative;
  padding: 5px;
  display: flex;
  flex-direction: ${({
  recordType
}) => recordType === _types.RecordType.Audio ? 'row' : 'row-reverse'};
  align-items: center;
`;
const ToggleImageContainer = exports.ToggleImageContainer = _styled.default.View`
  border-radius: 100px;
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ToggleImage = exports.ToggleImage = _styled.default.Image`
  width: 53px;
  height: 53px;
`;
const ToggleText = exports.ToggleText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 14px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const RecordContainer = exports.RecordContainer = _styled.default.View`
  width: 97%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
  background-color: ${({
  theme
}) => theme.colors.background4};
`;
const Logo = exports.Logo = _styled.default.Image.attrs({
  source: _assets.images.logo()
})`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;
const OrganizationName = exports.OrganizationName = _styled.default.Text`
  position: absolute;
  top: 25px;
  right: 25px;
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
`;
const SharingText = exports.SharingText = _styled.default.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
`;
const RecordDot = exports.RecordDot = _styled.default.View`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 30px;
  left: 100px;
  border-radius: 18px;
  background-color: red;
`;
const AudioStream = exports.AudioStream = _styled.default.Image.attrs(() => ({
  source: _assets.images.icAudio()
}))`
  width: 27px;
  height: 24px;
  position: absolute;
  bottom: 27px;
  left: 96px;
  tint-color: ${({
  theme
}) => theme.colors.light};
`;
const PanicInfoContainer = exports.PanicInfoContainer = (0, _styled.default)(_components.PanicInfo)`
  bottom: 20px;
  right: 20px;
`;
const PanicOverlay = exports.PanicOverlay = _styled.default.View.attrs({
  pointerEvents: 'box-none'
})`
  background: rgba(100, 30, 30, 0.5);
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;
const TwilioVideoPreview = exports.TwilioVideoPreview = (0, _styled.default)(_reactNativeTwilioVideoWebrtc.TwilioVideoLocalView)`
  flex: 1;
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
//# sourceMappingURL=styles.js.map