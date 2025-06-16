"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _ScreenActionButton = _interopRequireDefault(require("../ScreenActionButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ScreenActionButtonField = ({
  submitWhenFormIsValid,
  disabledWhenNot = '',
  onCancel,
  ...rest
}) => {
  const {
    handleSubmit,
    isValid
  } = (0, _formik.useFormikContext)();
  const [field] = (0, _formik.useField)(disabledWhenNot.toString());
  return /*#__PURE__*/_react.default.createElement(_ScreenActionButton.default, _extends({
    disabled: submitWhenFormIsValid ? !isValid : !field.value,
    onPress: () => handleSubmit(),
    onCancel: onCancel
  }, rest));
};
var _default = exports.default = ScreenActionButtonField;
//# sourceMappingURL=index.js.map