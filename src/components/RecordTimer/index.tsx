import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from '../../utils/styled';
import { secondsToMinutes } from '../../utils/times';

interface Props {
  isRecording?: boolean;
  recordedTime?: number;
  style?: StyleProp<ViewStyle>;
}

const RecordTimer: FC<Props> = ({ style, isRecording, recordedTime }) => (
  <Container style={style}>
    <Content>
      {isRecording && <RedDot />}
      <TimerText>{secondsToMinutes(recordedTime)}</TimerText>
    </Content>
  </Container>
);

export default RecordTimer;

const Container = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;

const RedDot = styled.View`
  width: 8px;
  height: 8px;
  position: absolute;
  left: -15px;
  border-radius: 4px;
  background-color: red;
`;

const TimerText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 19px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.light};
`;
// letter-spacing: -0.4px;