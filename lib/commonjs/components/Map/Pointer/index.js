"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const POINTER_PARAMS = {
  width: _reactNative.Platform.OS === 'android' ? 10 : 16,
  height: _reactNative.Platform.OS === 'android' ? 12 : 8,
  color: _assets.colors.grey
};
const defaultTranslateX = _reactNative.Platform.OS === 'android' ? `-12px` : `-${POINTER_PARAMS.width / 2}px`;
const defaultPointerHeight = _reactNative.Platform.OS === 'android' ? `${POINTER_PARAMS.width}px` : `${POINTER_PARAMS.height}px`;
const Pointer = ({
  color,
  width,
  height
}) => {
  return /*#__PURE__*/_react.default.createElement(PointerContainer, {
    height: height
  }, /*#__PURE__*/_react.default.createElement(PointerView, {
    color: color,
    height: height,
    width: width
  }));
};
const PointerContainer = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.transparent};
  height: ${({
  height
}) => height ? `${height}px` : defaultPointerHeight};
`;
const PointerView = _styled.default.View`
  position: relative;
  transform: translateX(
    ${({
  width
}) => width ? `-${width / 2}px` : defaultTranslateX}
  );
  left: 50%;
  width: 0;
  height: 0;
  border-top-width: ${({
  width
}) => width ? `${width}px` : `${POINTER_PARAMS.width}px`};
  border-left-width: ${({
  height
}) => height ? `${height}px` : `${POINTER_PARAMS.height}px`};
  border-right-width: ${({
  height
}) => height ? `${height}px` : `${POINTER_PARAMS.height}px`};
  border-top-color: ${({
  theme,
  color
}) => color || theme.colors.grey};
  border-left-color: ${({
  theme
}) => theme.colors.transparent};
  border-right-color: ${({
  theme
}) => theme.colors.transparent};
`;
var _default = exports.default = Pointer;
//# sourceMappingURL=index.js.map