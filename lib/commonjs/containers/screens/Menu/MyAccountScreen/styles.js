"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateButtonRow = exports.NameInputField = exports.NameErrorField = exports.InputRow = exports.InfoText = exports.InfoRow = exports.FormContent = exports.DescriptionText = void 0;
var _components = require("../../../../components");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const InfoRow = exports.InfoRow = _styled.default.View`
  margin: 20px 30px 5px;
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
const DescriptionText = exports.DescriptionText = _styled.default.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  marginLeft: 30
}));
const FormContent = exports.FormContent = _styled.default.View`
  flex: 1;
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
const NameInputField = exports.NameInputField = (0, _styled.default)(_components.TextInputField).attrs(({
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
const UpdateButtonRow = exports.UpdateButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const NameErrorField = exports.NameErrorField = (0, _styled.default)(_components.ErrorField)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
//# sourceMappingURL=styles.js.map