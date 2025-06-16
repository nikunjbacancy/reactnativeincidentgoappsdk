"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleText = exports.TitleRow = exports.LogoRow = exports.ContinueButtonRow = exports.ContinueButton = exports.Background = exports.ActivateGPSRow = exports.ActivateGPSButton = void 0;
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
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const ActivateGPSRow = exports.ActivateGPSRow = _styled.default.View`
  margin: auto 20px;
  height: 60px;
  flex-direction: row;
  align-items: stretch;
`;
const ActivateGPSButton = exports.ActivateGPSButton = (0, _styled.default)(_components.GradientButton)`
  width: 60%;
  margin: 0 auto;
`;
const ContinueButtonRow = exports.ContinueButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const ContinueButton = exports.ContinueButton = (0, _styled.default)(_components.GradientButton)``;
//# sourceMappingURL=styles.js.map