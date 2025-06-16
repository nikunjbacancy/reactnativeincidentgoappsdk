"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManageOrganizationsButton = exports.List = exports.ItemText = exports.ItemRowList = exports.ItemRow = exports.ItemCheckImage = exports.InfoText = exports.InfoRow = exports.ErrorRow = exports.ErrorMessage = exports.CreateEscortButtonRow = exports.Container = exports.Call911Title = exports.Call911Info = exports.Call911Container = exports.Call911Button = exports.AddCommentText = exports.AddCommentRow = exports.AddCommentInput = void 0;
var _components = require("../../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
  margin-bottom: ${({
  theme,
  isKeyboard
}) => theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 30px 15px;
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
const List = exports.List = (0, _styled.default)(_reactNative.FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
const ItemRow = exports.ItemRow = _styled.default.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
  justify-content: center;
`;
const ItemRowList = exports.ItemRowList = _styled.default.View`
  height: 60px;
  justify-content: center;
`;
const ItemText = exports.ItemText = _styled.default.Text`
  margin: 20px 30px;
  font-size: 15px;
`;
const ItemCheckImage = exports.ItemCheckImage = _styled.default.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;
const AddCommentRow = exports.AddCommentRow = _styled.default.View`
  margin: 0 30px 10px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: 80px;
  padding: 8px 0;
`;
const AddCommentText = exports.AddCommentText = _styled.default.Text`
  margin: 10px 30px;
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const AddCommentInput = exports.AddCommentInput = _styled.default.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;
const CreateEscortButtonRow = exports.CreateEscortButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const ManageOrganizationsButton = exports.ManageOrganizationsButton = _styled.default.View`
  margin: 10px 15px 15px;
`;
const Call911Container = exports.Call911Container = _styled.default.View`
  flex: 1;
  flex-direction: column;
  margin: 0 60px;
  justify-content: center;
`;
const Call911Title = exports.Call911Title = _styled.default.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 30px;
`;
const Call911Info = exports.Call911Info = _styled.default.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 17px;
  margin-bottom: 10px;
`;
const Call911Button = exports.Call911Button = (0, _styled.default)(_components.GradientButton)`
  width: 60%;
  margin: 0 auto;
  background-color: ${({
  theme
}) => theme.colors.highlight2};
`;
//# sourceMappingURL=styles.js.map