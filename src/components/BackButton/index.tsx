import { images } from '../../assets';
import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import NavigatorService from '../../utils/navigation';
import styled from '../../utils/styled';

import IconButton from '../IconButton';

interface Props {
  style?: ViewStyle;
  back?(): void;
}

const BackButton: FC<Props> = ({ style, back }) => (
  <BackButtonContainer>
    <BackButtonIcon
      style={style}
      source={images.icBack()}
      onPress={back || (NavigatorService.back as any)}
    />
  </BackButtonContainer>
);

export default BackButton;

const BackButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  flex: 0.2;
`;

const BackButtonIcon = styled(IconButton)`
  background-color: ${({ theme }) => theme.colors.background2};
  height: 100%;
`;
