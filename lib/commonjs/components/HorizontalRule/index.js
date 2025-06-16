"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const HorizontalRule = () => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.SafeAreaView, null, /*#__PURE__*/_react.default.createElement(HorizontalView, null));
};
const HorizontalView = _styled.default.View`
    margin-top: 10px;
    borderBottomColor: ${({
  theme
}) => theme.colors.black};
    borderBottomWidth: 2px;
`;
var _default = exports.default = HorizontalRule;
//# sourceMappingURL=index.js.map