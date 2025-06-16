import React from 'react';
import { View } from 'react-native';
import styled from '../../utils/styled';
const TipStatusIcon = ({
  style,
  label
}) => {
  return /*#__PURE__*/React.createElement(TipStatusContainer, null, /*#__PURE__*/React.createElement(View, {
    style: style
  }), label && /*#__PURE__*/React.createElement(TabStatusLabel, null, " ", label));
};
const TipStatusContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TabStatusLabel = styled.Text`
  color: ${({
  theme
}) => theme.colors.white};
`;
export default styled(TipStatusIcon)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: ${({
  active,
  theme: {
    colors
  }
}) => active ? colors.green : colors.highlight2};
`;
//# sourceMappingURL=index.js.map