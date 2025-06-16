"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserView = exports.UserName = exports.Title = exports.MenuOptionText = exports.MenuOptionInner = exports.MenuOptionIcon = exports.MenuContainer = exports.InfoWarningText = exports.InfoText = exports.InfoRow = exports.HamburgerMenu = exports.Dot = exports.ContainerWarning = exports.Container = exports.ButtonRow = exports.BlockedPermissionMessage = exports.BlockedPermissionContainer = void 0;
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
var _reactNativePopupMenu = require("react-native-popup-menu");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.ScrollView`
  flex:1;
  border-radius: 10px;
  background: ${({
  theme
}) => theme.colors.lightGrey};
  margin: 20px 20px;
  `;
const ButtonRow = exports.ButtonRow = _styled.default.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  padding: 10px 10px 10px;
  border-radius: 50px;
  background: ${({
  theme
}) => theme.colors.white};
`;
const Title = exports.Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 5px
  color: ${({
  theme
}) => theme.colors.black};
  line-height: 22px;
`;
const Dot = exports.Dot = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.red};
`;
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 30px 15px;
`;
const InfoText = exports.InfoText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 10px
  color: ${({
  theme
}) => theme.colors.black};
`;
const ContainerWarning = exports.ContainerWarning = _styled.default.View`
  flex:1;
  border-radius: 10px;
  background: ${({
  theme
}) => theme.colors.lightGrey};
  margin: 20px 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  `;
const InfoWarningText = exports.InfoWarningText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 5px;
  color: ${({
  theme
}) => theme.colors.black};
`;
const BlockedPermissionContainer = exports.BlockedPermissionContainer = _styled.default.View`
  flex: 1;
`;
const BlockedPermissionMessage = exports.BlockedPermissionMessage = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;
const UserView = exports.UserView = _styled.default.View`
    flex-direction: row;
    justifyContent:space-between;
`;
const UserName = exports.UserName = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.dark};
  padding: 15px;
`;
const MenuContainer = exports.MenuContainer = (0, _styled.default)(_reactNativePopupMenu.Menu)`
  padding: 15px;
  background-color: ${({
  theme
}) => theme.colors.transparent};
  border-left-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
const HamburgerMenu = exports.HamburgerMenu = _styled.default.Image`
  width: 40px;
  height: 40px;
`;
const MenuOptionInner = exports.MenuOptionInner = _styled.default.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
const MenuOptionText = exports.MenuOptionText = _styled.default.Text`
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const MenuOptionIcon = exports.MenuOptionIcon = _styled.default.Image`
  margin-left: auto;
`;
//# sourceMappingURL=styles.js.map