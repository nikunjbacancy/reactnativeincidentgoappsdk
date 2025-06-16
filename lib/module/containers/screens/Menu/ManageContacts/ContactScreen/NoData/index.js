import React from 'react';
import { useIntl } from 'react-intl';
import styled from '../../../../../../utils/styled';
import messages from '../messages';
const NoData = () => {
  const {
    formatMessage
  } = useIntl();
  return /*#__PURE__*/React.createElement(NoContactsText, null, formatMessage(messages.noContacts));
};
const NoContactsText = styled.Text`
  color: ${({
  theme
}) => theme.colors.highlight};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  margin-top: 30px;
`;
export default NoData;
//# sourceMappingURL=index.js.map