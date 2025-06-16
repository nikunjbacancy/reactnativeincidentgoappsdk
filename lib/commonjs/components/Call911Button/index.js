"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const areEqual = (prevProps, nextProps) => {
  return (0, _isEqual.default)(prevProps, nextProps);
};
const Call911Button = ({
  text,
  onPress,
  textStyle,
  style
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(Button, {
    style: style
  }, /*#__PURE__*/_react.default.createElement(Text, {
    style: textStyle
  }, text)));
};
const Button = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.darkRed};
  width: 47%;
  height: 40px;
  border-radius: 6px;
  justify-content: center;
  overflow: hidden;
`;
const Text = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(Call911Button, areEqual);
//# sourceMappingURL=index.js.map