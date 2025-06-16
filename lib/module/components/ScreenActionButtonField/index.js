function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useField, useFormikContext } from 'formik';
import React from 'react';
import ScreenActionButton from '../ScreenActionButton';
const ScreenActionButtonField = ({
  submitWhenFormIsValid,
  disabledWhenNot = '',
  onCancel,
  ...rest
}) => {
  const {
    handleSubmit,
    isValid
  } = useFormikContext();
  const [field] = useField(disabledWhenNot.toString());
  return /*#__PURE__*/React.createElement(ScreenActionButton, _extends({
    disabled: submitWhenFormIsValid ? !isValid : !field.value,
    onPress: () => handleSubmit(),
    onCancel: onCancel
  }, rest));
};
export default ScreenActionButtonField;
//# sourceMappingURL=index.js.map