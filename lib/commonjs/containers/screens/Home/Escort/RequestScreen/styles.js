"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RequestingContainer = exports.RequestEscortTitle = exports.RequestEscortMessage = exports.RequestEscortLoading = exports.RequestEscortContainer = exports.Container = exports.CancelEscortButton = void 0;
var _components = require("../../../../../components");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1;
  margin-bottom: ${({
  theme,
  isKeyboard
}) => theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;
const RequestEscortContainer = exports.RequestEscortContainer = _styled.default.View`
  flex: 1;
`;
const RequestingContainer = exports.RequestingContainer = _styled.default.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const RequestEscortTitle = exports.RequestEscortTitle = _styled.default.Text`
  text-align: center;
  margin: 20px 60px 0;
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  color: ${({
  theme
}) => theme.colors.dark};
`;
const RequestEscortMessage = exports.RequestEscortMessage = _styled.default.Text`
  text-align: center;
  margin: 40px 60px 0;
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  color: ${({
  theme
}) => theme.colors.dark};
`;
const RequestEscortLoading = exports.RequestEscortLoading = (0, _styled.default)(_components.LoadingIndicator)`
  max-height: 40px;
`;
const CancelEscortButton = exports.CancelEscortButton = (0, _styled.default)(_components.ScreenActionTabButton).attrs(({
  theme
}) => ({
  continueButtonStyle: {
    backgroundColor: theme.colors.highlight2,
    borderRadius: 6
  },
  continueButtonTextStyle: {
    color: theme.colors.white
  }
}))`
  margin: 20px 30px 35px;
`;
//# sourceMappingURL=styles.js.map