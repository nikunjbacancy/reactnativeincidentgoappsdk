import React from 'react';
import { useIntl } from 'react-intl';
import styled from '../../../../../../utils/styled';
import messages from '../messages';
const TimerExpiredBanner = () => {
  const {
    formatMessage
  } = useIntl();
  return /*#__PURE__*/React.createElement(BannerContainer, null, /*#__PURE__*/React.createElement(BannerText, null, formatMessage(messages.timerExpired)));
};
const BannerText = styled.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.white};
  font-size: 18px;
`;
const BannerContainer = styled.View`
  width: 60%;
  background-color: ${({
  theme
}) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: absolute;
  top: 60px;
  left: 20%;
  border-radius: 10px;
`;
export default TimerExpiredBanner;
//# sourceMappingURL=index.js.map