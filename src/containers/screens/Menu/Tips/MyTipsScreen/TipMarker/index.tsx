import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from '../../../../../../utils/styled';

interface Props {
  colors: string[];
  style?: ViewStyle;
}

const TipMarker: FC<Props> = ({ style, colors }) => (
  <Container style={style}>
    <GradientContainer colors={colors}>
      <Border />
    </GradientContainer>
  </Container>
);

const Container = styled.View`
  position: absolute;
`;

const GradientContainer = styled(LinearGradient)`
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

const Border = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
  border-color: rgba(27, 27, 35, 0.4);
  border-width: 5px;
  border-radius: 24px;
`;

export default TipMarker;
