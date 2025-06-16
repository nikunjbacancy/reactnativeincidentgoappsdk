import { Formik } from 'formik';
import React from 'react';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { promiseListener } from '../../store';
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
}) => /*#__PURE__*/React.createElement(MakeAsyncFunction, {
  listener: promiseListener,
  start: start,
  resolve: resolve,
  reject: reject,
  setPayload: setPayload,
  getPayload: onResolve,
  getError: onReject
}, onSubmit => /*#__PURE__*/React.createElement(Formik, {
  onSubmit: onSubmit,
  initialValues: initialValues,
  validationSchema: validationSchema
}, /*#__PURE__*/React.createElement(React.Fragment, null, children)));
export default Form;
//# sourceMappingURL=index.js.map