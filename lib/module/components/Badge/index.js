import React from 'react';
import styled from '../../utils/styled';
const Badge = ({
  style,
  length
}) => {
  return /*#__PURE__*/React.createElement(Container, {
    style: style
  }, /*#__PURE__*/React.createElement(Content, null, length || '!'));
};
const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: ${({
  theme
}) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.white};
  font-size: 10px;
`;
export default Badge;
//# sourceMappingURL=index.js.map