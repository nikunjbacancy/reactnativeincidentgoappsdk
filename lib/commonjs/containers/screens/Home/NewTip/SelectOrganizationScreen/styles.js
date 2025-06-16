"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarginBottom = exports.List = exports.ItemText = exports.ItemRow = exports.ItemCheckImage = exports.InfoText = exports.InfoRow = exports.ErrorRow = exports.ErrorMessage = exports.ContinueScreenActionButton = exports.Call911Title = exports.Call911Info = exports.Call911Container = exports.Call911Button = void 0;
var _components = require("../../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
const MarginBottom = exports.MarginBottom = _styled.default.View`
  margin-bottom: 40px;
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
  style: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})`
  flex-grow: 1;
`;
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
const ContinueScreenActionButton = exports.ContinueScreenActionButton = (0, _styled.default)(_components.ScreenActionTabButton).attrs(({
  theme
}) => ({
  continueButtonTextStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase'
  }
}))``;
//# sourceMappingURL=styles.js.map