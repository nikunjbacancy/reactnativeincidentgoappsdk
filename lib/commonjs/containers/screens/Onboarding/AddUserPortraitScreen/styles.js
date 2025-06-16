"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleText = exports.TitleRow = exports.OptionalText = exports.LogoRow = exports.InfoText = exports.InfoRow = exports.ContinueButtonRow = exports.Background = exports.BackButtonCol = void 0;
var _assets = require("../../../../assets");
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
const ContinueButtonRow = exports.ContinueButtonRow = _styled.default.View`
  margin: 15px;
`;
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 15px 30px;
`;
const InfoText = exports.InfoText = _styled.default.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const OptionalText = exports.OptionalText = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.lightGrey};
`;
//# sourceMappingURL=styles.js.map