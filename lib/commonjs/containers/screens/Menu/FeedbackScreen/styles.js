"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextRow = exports.TextInput = exports.StyledErrorField = exports.SendButtonRow = exports.PrivacyText = exports.PrivacyRow = exports.PrivacyLinkText = exports.InputRow = exports.InfoText = exports.InfoRow = exports.EmailInput = void 0;
var _components = require("../../../../components");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
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
const InputRow = exports.InputRow = _styled.default.View`
  flex-direction: row;
  margin: 10px 30px;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const TextRow = exports.TextRow = (0, _styled.default)(InputRow)`
  height: 150px;
  padding: 8px 0;
`;
const EmailInput = exports.EmailInput = (0, _styled.default)(_components.TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const TextInput = exports.TextInput = (0, _styled.default)(_components.TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter,
  textAlignVertical: 'top'
}))`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const StyledErrorField = exports.StyledErrorField = (0, _styled.default)(_components.ErrorField)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
const PrivacyRow = exports.PrivacyRow = _styled.default.View`
  margin: 10px 30px 20px;
`;
const PrivacyText = exports.PrivacyText = _styled.default.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.lightGrey};
`;
const PrivacyLinkText = exports.PrivacyLinkText = _styled.default.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.lightGrey};
  text-decoration: underline;
  text-decoration-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
const SendButtonRow = exports.SendButtonRow = _styled.default.View`
  margin: 0 15px 15px;
`;
//# sourceMappingURL=styles.js.map