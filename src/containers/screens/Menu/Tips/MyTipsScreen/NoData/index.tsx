import { images } from '../../../../../../assets';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import styled from '../../../../../../utils/styled';

import messages from '../messages';

const NoData: FC = () => {
  const { formatMessage } = useIntl();
  return (
    <Box>
      <BoxImage source={images.icNotFound()} />
      <BoxTitle>{formatMessage(messages.noIncidentsTitle)}</BoxTitle>
      <BoxMessage>{formatMessage(messages.noIncidentsMessage)}</BoxMessage>
    </Box>
  );
};

const Box = styled.View`
  flex: 1;
  align-items: center;
  margin: 40px 15px 10px;
`;

const BoxImage = styled.Image`
  margin-bottom: 20px;
`;

const BoxTitle = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fonts.largeSize};
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

const BoxMessage = styled.Text`
  font-size: ${({ theme }) => theme.fonts.largeSize};
  line-height: 26px;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;

export default NoData;
