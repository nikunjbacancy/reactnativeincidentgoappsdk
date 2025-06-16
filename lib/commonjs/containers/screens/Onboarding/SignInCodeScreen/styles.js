"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleText = exports.TitleRow = exports.SubmitButtonRow = exports.ResendText = exports.LogoRow = exports.InputRow = exports.CodeTextField = exports.CodeError = exports.Background = exports.BackButtonCol = void 0;
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
  width: null;
  height: null;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const LogoRow = exports.LogoRow = _styled.default.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const BackButtonCol = exports.BackButtonCol = _styled.default.View`
  position: absolute;
  left: 20px;
  background: ${({
  theme
}) => theme.colors.white};
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
`;
const TitleRow = exports.TitleRow = _styled.default.View`
  margin: 30px 30px 15px;
`;
const TitleText = exports.TitleText = _styled.default.Text`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const ResendText = exports.ResendText = _styled.default.Text`
  font-weight: bold;
  text-decoration: underline;
  color: ${({
  theme
}) => theme.colors.darker};
`;
const InputRow = exports.InputRow = _styled.default.View`
  flex-grow: 0;
  margin: 10px 30px;
  padding: 0 15px;
  justify-content: center;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const CodeTextField = exports.CodeTextField = (0, _styled.default)(_components.TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const SubmitButtonRow = exports.SubmitButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const CodeError = exports.CodeError = (0, _styled.default)(_components.ErrorField)`
  margin: 0 30px;
  justify-content: center;
  font-size: 14px;
`;
//# sourceMappingURL=styles.js.map