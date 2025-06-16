"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ErrorField = ({
  name,
  ...rest
}) => {
  const [, meta] = (0, _formik.useField)(name);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, meta.touched && meta.error ? /*#__PURE__*/_react.default.createElement(_reactNative.Text, rest, meta.error) : null);
};
const StyledErrorField = (0, _styled.default)(ErrorField)`
  color: ${({
  theme
}) => theme.colors.red};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
`;
var _default = exports.default = StyledErrorField;
//# sourceMappingURL=index.js.map