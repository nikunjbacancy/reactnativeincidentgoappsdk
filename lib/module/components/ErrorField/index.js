import { useField } from 'formik';
import React from 'react';
import { Text } from 'react-native';
import styled from '../../utils/styled';
const ErrorField = ({
  name,
  ...rest
}) => {
  const [, meta] = useField(name);
  return /*#__PURE__*/React.createElement(React.Fragment, null, meta.touched && meta.error ? /*#__PURE__*/React.createElement(Text, rest, meta.error) : null);
};
const StyledErrorField = styled(ErrorField)`
  color: ${({
  theme
}) => theme.colors.red};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
`;
export default StyledErrorField;
//# sourceMappingURL=index.js.map