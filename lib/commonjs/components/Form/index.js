"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _formik = require("formik");
var _react = _interopRequireDefault(require("react"));
var _reactReduxPromiseListener = _interopRequireDefault(require("react-redux-promise-listener"));
var _store = require("../../store");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Form = ({
  children,
  start,
  resolve,
  reject,
  setPayload,
  onResolve,
  onReject,
  initialValues,
  validationSchema
}) => /*#__PURE__*/_react.default.createElement(_reactReduxPromiseListener.default, {
  listener: _store.promiseListener,
  start: start,
  resolve: resolve,
  reject: reject,
  setPayload: setPayload,
  getPayload: onResolve,
  getError: onReject
}, onSubmit => /*#__PURE__*/_react.default.createElement(_formik.Formik, {
  onSubmit: onSubmit,
  initialValues: initialValues,
  validationSchema: validationSchema
}, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children)));
var _default = exports.default = Form;
//# sourceMappingURL=index.js.map