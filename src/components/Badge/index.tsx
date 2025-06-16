import React, { FC } from 'react';
import { ViewStyle } from 'react-native';
import styled from '../../utils/styled';

interface Props {
  length?: number;
  style?: ViewStyle;
}

const Badge: FC<Props> = ({ style, length }) => {
  return (
    <Container style={style}>
      <Content>{length || '!'}</Content>
    </Container>
  );
};

const Container = styled.View<ViewStyle>`
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.Text<{ theme: { colors: { white: string } } }>`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
`;

export default Badge;
