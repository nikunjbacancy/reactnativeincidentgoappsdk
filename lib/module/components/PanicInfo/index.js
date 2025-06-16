import React from 'react';
import { useIntl } from 'react-intl';
import styled from '../../utils/styled';
import messages from './messages';
const PanicInfo = ({
  style,
  text
}) => {
  const {
    formatMessage
  } = useIntl();
  const createText = () => {
    return text || formatMessage(messages.panicInfo);
  };
  return /*#__PURE__*/React.createElement(PanicInfoContainer, {
    style: style
  }, /*#__PURE__*/React.createElement(PanicText, null, createText()));
};
export const PanicInfoContainer = styled.View`
  position: absolute;
  bottom: 55px;
  right: 30px;
  padding: 8px 10px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.4);
`;
export const PanicText = styled.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  text-align: center;
`;
export default PanicInfo;
//# sourceMappingURL=index.js.map