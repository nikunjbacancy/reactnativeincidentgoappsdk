"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebViewStyle = exports.MainView = exports.BackButtonView = exports.BackButtonCol = void 0;
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MainView = exports.MainView = _styled.default.View`
  flex: 1;
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
const BackButtonView = exports.BackButtonView = _styled.default.View`
  flex: 0.8;
  margin-top: 10px;
  justify-content: center;
  background: ${({
  theme
}) => theme.colors.white};
`;
const WebViewStyle = exports.WebViewStyle = _styled.default.View`
  flex: 9.2;
  padding-horizontal: 10px;
  padding-bottom: 10px;
  background: ${({
  theme
}) => theme.colors.white};
`;
//# sourceMappingURL=styles.js.map