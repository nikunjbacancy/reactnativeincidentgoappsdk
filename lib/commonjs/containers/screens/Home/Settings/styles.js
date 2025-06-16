"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewTutorial = exports.ViewStep22 = exports.ViewStep21 = exports.ViewStep2 = exports.Tutorial = exports.Timing = exports.Step1_Desc = exports.Step1 = exports.PlusImage = exports.Loader = exports.InfoText = exports.InfoRow = exports.DeviceDetail = exports.Container = exports.Bullet_Red = exports.Bullet = exports.BatteryLevel = exports.Background = exports.BackButtonRow = exports.AddSettingButtonRow = void 0;
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
var _assets = require("../../../../assets");
var _LoadingIndicator = _interopRequireDefault(require("../../../../components/LoadingIndicator"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 10px 15px;
  flex: 1;
`;
const InfoText = exports.InfoText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const AddSettingButtonRow = exports.AddSettingButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const Background = exports.Background = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.grey1};
  border-radius: 10px;
   margin: 5px;
`;
const Step1 = exports.Step1 = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 10px;
`;
const Step1_Desc = exports.Step1_Desc = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 10px;
  text-align: center;
`;
const ViewTutorial = exports.ViewTutorial = _styled.default.View`
  justifyContent:center;
  flexDirection: row;
  margin: 10px;
`;
const Tutorial = exports.Tutorial = _styled.default.Image.attrs({
  source: _assets.images.tutorial()
})`
  width: 120px;
  height: 120px;
  resize-mode: contain;
`;
const Timing = exports.Timing = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  color: ${({
  theme
}) => theme.colors.dark};
`;
const ViewStep2 = exports.ViewStep2 = _styled.default.View`
  justifyContent:space-between;
  alignItems:center;
  flexDirection: row;
`;
const ViewStep21 = exports.ViewStep21 = _styled.default.View`
  margin: 10px;
`;
const Loader = exports.Loader = (0, _styled.default)(_LoadingIndicator.default)`
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
const DeviceDetail = exports.DeviceDetail = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.grey};
`;
const BatteryLevel = exports.BatteryLevel = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraSmallSize};
  color: ${({
  theme
}) => theme.colors.grey}; 
`;
const PlusImage = exports.PlusImage = _styled.default.Image.attrs({
  source: _assets.images.plusImage()
})`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
const ViewStep22 = exports.ViewStep22 = _styled.default.View`
  flexDirection: row;
  margin: 10px;
`;
const Container = exports.Container = _styled.default.TouchableOpacity`
  height: 50px;
  padding: 8px;
  align-items: center;
  flex-direction: row;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
const Bullet = exports.Bullet = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.green};
  margin: 5px 20px;
`;
const Bullet_Red = exports.Bullet_Red = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.red};
  margin: 5px 20px;
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map