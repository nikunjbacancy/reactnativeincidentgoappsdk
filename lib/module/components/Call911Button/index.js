import isEqual from 'lodash/isEqual';
import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from '../../utils/styled';
const areEqual = (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
};
const Call911Button = ({
  text,
  onPress,
  textStyle,
  style
}) => {
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(Button, {
    style: style
  }, /*#__PURE__*/React.createElement(Text, {
    style: textStyle
  }, text)));
};
const Button = styled.View`
  background-color: ${({
  theme
}) => theme.colors.darkRed};
  width: 47%;
  height: 40px;
  border-radius: 6px;
  justify-content: center;
  overflow: hidden;
`;
const Text = styled.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
`;
export default /*#__PURE__*/memo(Call911Button, areEqual);
//# sourceMappingURL=index.js.map