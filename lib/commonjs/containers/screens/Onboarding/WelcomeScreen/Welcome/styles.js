"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.Text = exports.Image = exports.Container = void 0;
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Container = exports.Container = _styled.default.View`
  flex: 1px;
  padding: 0 30px;
  margin-top: 60px;
  align-items: center;
`;
const Image = exports.Image = _styled.default.Image`
  padding: 0 30px;
`;
const Title = exports.Title = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 22px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: 20px;
  margin-bottom: 10px;
`;
const Text = exports.Text = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: ${({
  theme
}) => theme.colors.lighter};
`;
//# sourceMappingURL=styles.js.map