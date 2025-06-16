"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleText = exports.TitleRow = exports.NotYetButton = exports.LogoRow = exports.ItemText = exports.ItemRow = exports.ItemIcon = exports.ButtonRow = exports.Background = void 0;
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
const TitleRow = exports.TitleRow = _styled.default.View`
  margin: 30px 30px 15px;
`;
const TitleText = exports.TitleText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 22px;
  line-height: 24px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const ItemRow = exports.ItemRow = _styled.default.View`
  flex-direction: row;
  margin: 10px 30px;
  align-items: center;
`;
const ItemIcon = exports.ItemIcon = _styled.default.Image`
  margin-right: 16px;
`;
const ItemText = exports.ItemText = _styled.default.Text`
  font-size: 15px;
  flex-shrink: 1;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const ButtonRow = exports.ButtonRow = _styled.default.View`
  justify-content: center;
  align-items: center;
  padding: 30px 20px 40px;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const NotYetButton = exports.NotYetButton = (0, _styled.default)(_components.GradientButton)`
  background-color: ${({
  theme
}) => theme.colors.highlight2};
  margin-bottom: 10px;
`;
//# sourceMappingURL=syles.js.map