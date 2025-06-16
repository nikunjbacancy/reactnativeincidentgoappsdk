"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TextInputField = ({
  name,
  ...rest
}) => {
  const {
    handleBlur,
    handleChange
  } = (0, _formik.useFormikContext)();
  const [field] = (0, _formik.useField)(name);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.TextInput, _extends({
    onChangeText: handleChange(name),
    onBlur: handleBlur(name),
    value: field.value
  }, rest)));
};
var _default = exports.default = TextInputField;
//# sourceMappingURL=index.js.map