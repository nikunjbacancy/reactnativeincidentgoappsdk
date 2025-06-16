"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const icon = {
  width: 22,
  height: 32
};
const Header = ({
  title
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, null, /*#__PURE__*/_react.default.createElement(HeaderRow, null, /*#__PURE__*/_react.default.createElement(Logo, {
    source: _assets.images.logo()
  }), /*#__PURE__*/_react.default.createElement(TitleText, null, title), /*#__PURE__*/_react.default.createElement(EmptySpace, null)));
};
const HeaderRow = _styled.default.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  padding: 0 30px;
  
`;
const Logo = _styled.default.Image`
  width: ${icon.width}px;
  height: ${icon.height}px;
  tint-color: ${({
  theme
}) => theme.colors.dark};
`;
const EmptySpace = _styled.default.View`
  width: ${icon.width}px;
  height: ${icon.height}px;
`;
const TitleText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  margin-left: 20px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
var _default = exports.default = (0, _styled.default)(Header)`
  margin-top: 20px;
`;
//# sourceMappingURL=index.js.map