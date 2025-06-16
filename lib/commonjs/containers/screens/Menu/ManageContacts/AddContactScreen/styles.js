"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = exports.NoMatchesText = exports.NoMatchesContainer = exports.List = exports.InputRow = exports.ErrorText = exports.ErrorHeader = exports.ErrorContainer = exports.Container = exports.BackButtonRow = void 0;
var _reactNative = require("react-native");
var _device = require("../../../../../utils/device");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.KeyboardAvoidingView.attrs(() => ({
  behavior: _device.isAndroid ? 'height' : ''
}))`
  flex: 1;
`;
const List = exports.List = (0, _styled.default)(_reactNative.FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
`;
const ErrorContainer = exports.ErrorContainer = _styled.default.View`
  flex: 1;
  align-items: center;
`;
const ErrorHeader = exports.ErrorHeader = _styled.default.View`
  padding: 0 15px;
  align-items: center;
`;
const ErrorText = exports.ErrorText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 28px;
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
const InputRow = exports.InputRow = _styled.default.View`
  flex-direction: row;
  margin: 10px 30px;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const TextInput = exports.TextInput = _styled.default.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
`;
const NoMatchesContainer = exports.NoMatchesContainer = _styled.default.View`
  justify-content: center;
  align-items: center;
`;
const NoMatchesText = exports.NoMatchesText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.grey};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
`;
const BackButtonRow = exports.BackButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map