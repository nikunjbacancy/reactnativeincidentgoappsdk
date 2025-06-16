import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { ViewStyle } from 'react-native';
import styled from '../../utils/styled';

import messages from './messages';

interface Props {
  style?: ViewStyle;
  text?: string;
}

const PanicInfo: FC<Props> = ({ style, text }) => {
  const { formatMessage } = useIntl();
  const createText = () => {
    return text || formatMessage(messages.panicInfo);
  };
  return (
    <PanicInfoContainer style={style}>
      <PanicText>{createText()}</PanicText>
    </PanicInfoContainer>
  );
};

export const PanicInfoContainer : any = styled.View`
  position: absolute;
  bottom: 55px;
  right: 30px;
  padding: 8px 10px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.4);
`;

export const PanicText : any = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.smallSize};
  text-align: center;
`;

export default PanicInfo;
