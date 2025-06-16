"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputText = exports.InputRow = exports.InfoText = exports.InfoRow = exports.ContinueScreenActionButton = exports.AcknowledgmentText = exports.AcknowledgmentRow = void 0;
var _components = require("../../../../../components");
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
const InputRow = exports.InputRow = _styled.default.View`
  margin: 10px 30px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: 150px;
  padding: 8px 0;
`;
const InputText = exports.InputText = _styled.default.TextInput.attrs(({
  theme
}) => ({
  placeholderTextColor: theme.colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;
const AcknowledgmentRow = exports.AcknowledgmentRow = _styled.default.View`
  margin: 15px 30px;
`;
const AcknowledgmentText = exports.AcknowledgmentText = _styled.default.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.dark};
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