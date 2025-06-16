function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import { useField, useFormikContext } from 'formik';
import React from 'react';
import { TextInput } from 'react-native';
const TextInputField = ({
  name,
  ...rest
}) => {
  const {
    handleBlur,
    handleChange
  } = useFormikContext();
  const [field] = useField(name);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TextInput, _extends({
    onChangeText: handleChange(name),
    onBlur: handleBlur(name),
    value: field.value
  }, rest)));
};
export default TextInputField;
//# sourceMappingURL=index.js.map