"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubHeader = exports.SafetyButtonRow = exports.SafetyButton = exports.RequestEscortTitle = exports.RequestEscortMessage = exports.RequestEscortLoading = exports.PressPanicInfo = exports.PhoneButton = exports.PanicOverlay = exports.InfoText = exports.InfoRow = exports.ErrorRow = exports.ErrorMessage = exports.Container = exports.ButtonRow = exports.BottomControls = void 0;
var _components = require("../../../../../components");
var _ControlButton = _interopRequireDefault(require("../../../../../components/ControlButton"));
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
  margin-bottom: ${({
  theme,
  isKeyboard
}) => theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;
const ButtonRow = exports.ButtonRow = _styled.default.View`
  justify-content: center;
  align-items: center;
  padding: 40px 20px 10px;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 30px 15px;
  align-items: center;
`;
const SubHeader = exports.SubHeader = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const InfoText = exports.InfoText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
`;
const ErrorRow = exports.ErrorRow = _styled.default.View`
  margin: 0 30px 20px;
`;
const ErrorMessage = exports.ErrorMessage = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.red};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
`;
const BottomControls = exports.BottomControls = _styled.default.View`
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 10px 30px;
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
const PressPanicInfo = exports.PressPanicInfo = (0, _styled.default)(_components.PanicInfo)`
  bottom: 70px;
  right: 30px;
`;
const RequestEscortTitle = exports.RequestEscortTitle = _styled.default.Text`
  text-align: center;
  margin: 20px 60px 0;
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  color: ${({
  theme
}) => theme.colors.dark};
`;
const RequestEscortMessage = exports.RequestEscortMessage = _styled.default.Text`
  text-align: center;
  margin: 40px 60px 0;
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  color: ${({
  theme
}) => theme.colors.dark};
`;
const RequestEscortLoading = exports.RequestEscortLoading = (0, _styled.default)(_components.LoadingIndicator)`
  max-height: 40px;
`;
const SafetyButton = exports.SafetyButton = (0, _styled.default)(_components.GradientButton).attrs({
  textStyle: {
    textTransform: 'uppercase',
    fontSize: 20
  }
})`
  background-color: ${({
  theme
}) => theme.colors.darkRed};
  margin: 20px auto;
  width: 60%;
  height: 70px;
`;
const SafetyButtonRow = exports.SafetyButtonRow = _styled.default.View`
  justify-content: center;
  align-items: center;
  padding: 40px 20px 10px;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
//# sourceMappingURL=styles.js.map