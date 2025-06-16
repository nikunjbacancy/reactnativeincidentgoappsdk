"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TosRow = exports.TitleText = exports.TitleRow = exports.SubmitButtonRow = exports.PrivacyPolicyText = exports.PhoneText = exports.PhoneLabelCol = exports.PhoneInputCol = exports.PhoneError = exports.LogoRow = exports.LinkText = exports.InputRow = exports.CountryText = exports.Background = exports.AgreeTosError = exports.AgreeText = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _reactNative = require("react-native");
var _styled = _interopRequireWildcard(require("../../../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const InputRow = exports.InputRow = _styled.default.View`
  flex-direction: row;
  margin: 10px 30px;
  align-items: center;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const CountryText = exports.CountryText = _styled.default.Text`
  font-size: 15px;
  padding-left: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const PhoneLabelCol = exports.PhoneLabelCol = _styled.default.View`
  flex-grow: 0;
  border-right-width: 1px;
  border-right-color: ${({
  theme
}) => theme.colors.lighter};
  padding-right: 15px;
`;
const PhoneInputCol = exports.PhoneInputCol = _styled.default.View`
  flex-grow: 1;
  padding-left: 15px;
`;
const PhoneText = exports.PhoneText = (0, _styled.default)(_components.TextInputField).attrs(({
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
const TosRow = exports.TosRow = _styled.default.View`
  flex-direction: row;
  align-items: center;
  margin: 0 30px;
`;
const AgreeText = exports.AgreeText = _styled.default.Text`
  margin: 0 30px 10px 10px;
  ${({
  theme
}) => theme.colors.dark};
`;
const PrivacyPolicyText = exports.PrivacyPolicyText = _styled.default.Text.attrs(({
  link
}) => ({
  onPress: link
}))`
  font-weight: bold;
  text-decoration: underline;
  color: ${({
  theme
}) => theme.colors.darker};
`;
const LinkText = exports.LinkText = _styled.default.Text.attrs(({
  link
}) => ({
  onPress: () => _reactNative.Linking.openURL(link)
}))`
  font-weight: bold;
  text-decoration: underline;
  color: ${({
  theme
}) => theme.colors.darker};
`;
const SubmitButtonRow = exports.SubmitButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const errorLabelMixin = (0, _styled.css)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
const PhoneError = exports.PhoneError = (0, _styled.default)(_components.ErrorField).attrs({
  name: 'phone'
})`
  ${errorLabelMixin}
`;
const AgreeTosError = exports.AgreeTosError = (0, _styled.default)(_components.ErrorField).attrs({
  name: 'agreeTos'
})`
  ${errorLabelMixin};
`;
//# sourceMappingURL=styles.js.map