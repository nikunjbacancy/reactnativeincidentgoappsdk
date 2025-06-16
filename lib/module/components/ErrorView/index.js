import { images } from '../../assets';
import React from 'react';
import { useIntl } from 'react-intl';
import styled from '../../utils/styled';
import messages from './messages';
const ErrorView = ({
  errorMessage
}) => {
  const {
    formatMessage
  } = useIntl();
  return /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(ErrorImage, {
    source: images.icError()
  }), /*#__PURE__*/React.createElement(Heading, null, formatMessage(messages.title)), /*#__PURE__*/React.createElement(SubHeading, null, errorMessage));
};
const Container = styled.View`
  background-color: ${({
  theme
}) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const ErrorImage = styled.Image`
  width: 45px;
  height: 45px;
  margin-bottom: 20px;
`;
const Heading = styled.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 28px;
  letter-spacing: -0.4px;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
const SubHeading = styled.Text`
  color: ${({
  theme
}) => theme.colors.primary};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  line-height: 24px;
  letter-spacing: -0.24px;
  text-align: center;
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  margin-top: 10px;
`;
export default ErrorView;
//# sourceMappingURL=index.js.map