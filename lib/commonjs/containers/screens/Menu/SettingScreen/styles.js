"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchText = exports.SwitchContainer = exports.SwitchButton = exports.LogoutButtonText = exports.LogoutButtonRow = exports.LogoutButton = exports.DeleteButtonText = exports.DeleteButtonRow = exports.DeleteButton = exports.Container = exports.BackButtonRow = void 0;
var _device = require("../../../../utils/device");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
`;
const SwitchContainer = exports.SwitchContainer = _styled.default.View`
  flex-direction: row;
  padding: 0 30px;
  margin-top: 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const SwitchButton = exports.SwitchButton = _styled.default.Switch`
  margin-left: auto;
  ${_device.isAndroid ? '' : 'transform: scale(0.7);'}
`;
const SwitchText = exports.SwitchText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const DeleteButtonRow = exports.DeleteButtonRow = _styled.default.View`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const LogoutButtonRow = exports.LogoutButtonRow = _styled.default.View`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const DeleteButton = exports.DeleteButton = _styled.default.TouchableOpacity`
  
`;
const LogoutButton = exports.LogoutButton = _styled.default.TouchableOpacity`
  
`;
const DeleteButtonText = exports.DeleteButtonText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
const LogoutButtonText = exports.LogoutButtonText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;

// export const DeleteButtonRow = styled.View`
//   margin: 10px 15px 15px;
//   justify-content: flex-end;
// `;

// export const DeleteButton = styled(GradientButton).attrs(({ theme }) => ({
//   textStyle: {
//     color: theme.colors.white,
//   },
// }))`
//   background-color: ${({ theme }) => theme.colors.red};
// `;
//# sourceMappingURL=styles.js.map