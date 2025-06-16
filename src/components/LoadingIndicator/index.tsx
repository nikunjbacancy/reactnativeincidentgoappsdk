import React, { FC } from 'react';
import colors from '../../assets/colors'
import { ActivityIndicator, ViewStyle } from 'react-native';
import styled from '../../utils/styled'

interface Props {
  style?: ViewStyle;
  message?: string;
}

const LoadingIndicator: FC<Props> = ({ style, message }) => (
  <Container style={style}>
    <ActivityIndicator size="small" color={colors.grey} />
    {message && <Message>{message}</Message>}
  </Container>
);

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.sdkBackgroundColor};
`;

export const Message : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 15px;
`;

export default LoadingIndicator;
