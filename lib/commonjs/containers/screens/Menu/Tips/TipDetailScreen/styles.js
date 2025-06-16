"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrganizationName = exports.OrganizationContainer = exports.Logo = exports.CategoryName = exports.CategoryImage = exports.CategoryContent = exports.CategoryContainer = exports.BackButtonContainer = exports.BackButton = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Logo = exports.Logo = _styled.default.Image.attrs({
  source: _assets.images.logo()
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 25px;
  left: 20px;
  tint-color: white;
`;
const BackButtonContainer = exports.BackButtonContainer = _styled.default.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;
const BackButton = exports.BackButton = (0, _styled.default)(_components.BackButton)`
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
const CategoryContainer = exports.CategoryContainer = _styled.default.View`
  flex: 0.15;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.colors.transparent};
  height: 100%;
`;
const CategoryImage = exports.CategoryImage = _styled.default.Image`
  height: 36px;
  width: 36px;
`;
const OrganizationContainer = exports.OrganizationContainer = _styled.default.View`
  flex: 0.65;
  height: 100%;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
const OrganizationName = exports.OrganizationName = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
const CategoryContent = exports.CategoryContent = _styled.default.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const CategoryName = exports.CategoryName = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.dark};
`;
//# sourceMappingURL=styles.js.map