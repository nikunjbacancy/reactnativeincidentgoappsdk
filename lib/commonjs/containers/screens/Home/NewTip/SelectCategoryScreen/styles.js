"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextContainer = exports.RowItemButton = exports.RowItem = exports.RowContainer = exports.Row = exports.ItemCSS = exports.InfoText = exports.InfoRow = exports.ImageSelected = exports.ImageContainer = exports.ImageBackground = exports.ContinueScreenActionButton = exports.Container = exports.CategoryText = exports.CategoryImage = void 0;
var _components = require("../../../../../components");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _styled = _interopRequireWildcard(require("../../../../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
const Container = exports.Container = _styled.default.View`
  flex: 1;
  padding: 0 20px;
`;
const RowContainer = exports.RowContainer = _styled.default.ScrollView.attrs({
  style: {
    flexGrow: 1
  }
})`
  flex-grow: 1;
`;
const Row = exports.Row = _styled.default.View`
  flex-direction: row;
  align-items: flex-start;
`;
const ItemCSS = exports.ItemCSS = (0, _styled.css)`
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  flex-grow: 1;
  align-items: center;
`;
const RowItem = exports.RowItem = _styled.default.View`
  ${ItemCSS}
`;
const RowItemButton = exports.RowItemButton = _styled.default.TouchableOpacity`
  ${ItemCSS}
`;
const ImageContainer = exports.ImageContainer = (0, _styled.default)(_reactNativeLinearGradient.default)`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;
const ImageBackground = exports.ImageBackground = (0, _styled.default)(_reactNativeLinearGradient.default)`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;
const ImageSelected = exports.ImageSelected = _styled.default.View`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  border-width: 6px;
  align-items: center;
  justify-content: center;
  border-color: ${({
  theme
}) => theme.colors.highlight};
`;
const CategoryImage = exports.CategoryImage = _styled.default.Image`
  height: 36px;
  width: 36px;
  tint-color: ${({
  theme
}) => theme.colors.light};
`;
const TextContainer = exports.TextContainer = _styled.default.View`
  flex-direction: row;
  height: 36px;
  margin-top: 5px;
`;
const CategoryText = exports.CategoryText = _styled.default.Text`
  flex: 1;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 14px;
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