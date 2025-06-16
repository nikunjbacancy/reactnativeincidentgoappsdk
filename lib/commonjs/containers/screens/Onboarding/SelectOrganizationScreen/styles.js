"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleText = exports.TitleRow = exports.SelectButton = exports.SearchRow = exports.SearchInput = exports.RequiredText = exports.LogoRow = exports.Logo = exports.List = exports.ItemText = exports.ItemRow = exports.ItemCheckImage = exports.InfoText = exports.InfoRow = exports.HeaderRow = exports.ErrorRow = exports.ErrorMessage = exports.ContinueButtonRow = exports.Background = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Background = exports.Background = (0, _styled.default)(_reactNative.Image).attrs({
  source: _assets.images.backgroundWhite()
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const HeaderRow = exports.HeaderRow = _styled.default.View`
  margin-bottom: 20px;
`;
const Logo = exports.Logo = _styled.default.Image.attrs({
  source: _assets.images.logo()
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 23px;
  left: 20px;
  tint-color: ${({
  theme
}) => theme.colors.dark};
`;
const LogoRow = exports.LogoRow = _styled.default.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const TitleRow = exports.TitleRow = _styled.default.View`
  margin: 10px 30px 15px;
`;
const TitleText = exports.TitleText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 18px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 30px 30px 0;
`;
const InfoText = exports.InfoText = _styled.default.Text`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const RequiredText = exports.RequiredText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.lightGrey};
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
const SearchRow = exports.SearchRow = _styled.default.View`
  flex-grow: 0;
  margin: 20px 30px;
  padding: 0 20px;
  justify-content: center;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const SearchInput = exports.SearchInput = _styled.default.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 15px;
`;
const List = exports.List = (0, _styled.default)(_reactNative.FlatList)``;
const ItemRow = exports.ItemRow = _styled.default.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({
  theme
}) => theme.colors.nearWhite};
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
const SelectButton = exports.SelectButton = (0, _styled.default)(_components.ScreenActionButton)`
  background-color: ${({
  theme
}) => theme.colors.highlight};
`;
const ContinueButtonRow = exports.ContinueButtonRow = _styled.default.View`
  margin: 15px;
`;
//# sourceMappingURL=styles.js.map