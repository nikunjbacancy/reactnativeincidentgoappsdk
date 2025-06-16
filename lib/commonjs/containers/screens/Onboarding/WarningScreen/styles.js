"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WarningText = exports.WarningRow = exports.WarningButton = exports.TouchableContainer = exports.ScrollWrapper = exports.SafeView = exports.LogoRow = exports.LocationText = exports.DuressInfo = exports.DuressButton = exports.ContinueButtonRow = exports.ContinueButton = exports.Background = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const SafeView = exports.SafeView = _styled.default.View`
  flex: 1;
`;
const TouchableContainer = exports.TouchableContainer = _styled.default.TouchableOpacity`
  flex: 1;
`;
const ScrollWrapper = exports.ScrollWrapper = _styled.default.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
const Background = exports.Background = (0, _styled.default)(_reactNative.Image).attrs({
  source: _assets.images.background()
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
`;
const LogoRow = exports.LogoRow = _styled.default.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
const WarningRow = exports.WarningRow = _styled.default.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
const WarningText = exports.WarningText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
`;
const LocationText = exports.LocationText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 15px;
  line-height: 25px;
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 20px;
  
  text-align: center;
`;
const WarningButton = exports.WarningButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily
  }
}))`
  flex: 1;
  margin: 0 auto;
  max-width: 65%;
  max-height: 100px;
  background-color: ${({
  theme
}) => theme.colors.highlight2};

`;
const DuressButton = exports.DuressButton = (0, _styled.default)(_components.PanicButton).attrs(({
  theme
}) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily
  }
}))`
  flex: 1;
  margin: 0 auto;
  min-width: 65%
  max-height: 100px;
  background-color: ${({
  theme
}) => theme.colors.highlight2};
`;
const DuressInfo = exports.DuressInfo = (0, _styled.default)(_components.PanicInfo)`
  top: 40%;
  bottom: 15%;
  right: 12%;
  left: 12%;
`;
const ContinueButtonRow = exports.ContinueButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
  flex: 1;
  justify-content: flex-end;
`;
const ContinueButton = exports.ContinueButton = (0, _styled.default)(_components.GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark
  }
}))`
  background-color: ${({
  theme
}) => theme.colors.white};
`;
//# sourceMappingURL=styles.js.map