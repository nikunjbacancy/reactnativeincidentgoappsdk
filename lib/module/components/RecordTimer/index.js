import React from 'react';
import styled from '../../utils/styled';
import { secondsToMinutes } from '../../utils/times';
const RecordTimer = ({
  style,
  isRecording,
  recordedTime
}) => /*#__PURE__*/React.createElement(Container, {
  style: style
}, /*#__PURE__*/React.createElement(Content, null, isRecording && /*#__PURE__*/React.createElement(RedDot, null), /*#__PURE__*/React.createElement(TimerText, null, secondsToMinutes(recordedTime))));
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
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 19px;
  line-height: 19px;
  color: ${({
  theme
}) => theme.colors.light};
`;
// letter-spacing: -0.4px;
//# sourceMappingURL=index.js.map