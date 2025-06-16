import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from '../../utils/styled';
const HorizontalRule = () => {
  return /*#__PURE__*/React.createElement(SafeAreaView, null, /*#__PURE__*/React.createElement(HorizontalView, null));
};
const HorizontalView = styled.View`
    margin-top: 10px;
    borderBottomColor: ${({
  theme
}) => theme.colors.black};
    borderBottomWidth: 2px;
`;
export default HorizontalRule;
//# sourceMappingURL=index.js.map