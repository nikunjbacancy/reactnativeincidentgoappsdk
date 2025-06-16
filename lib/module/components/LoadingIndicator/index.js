import React from 'react';
import colors from '../../assets/colors';
import { ActivityIndicator } from 'react-native';
import styled from '../../utils/styled';
const LoadingIndicator = ({
  style,
  message
}) => /*#__PURE__*/React.createElement(Container, {
  style: style
}, /*#__PURE__*/React.createElement(ActivityIndicator, {
  size: "small",
  color: colors.grey
}), message && /*#__PURE__*/React.createElement(Message, null, message));
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
export const Message = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 15px;
`;
export default LoadingIndicator;
//# sourceMappingURL=index.js.map