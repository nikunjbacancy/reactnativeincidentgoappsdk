import { images } from '../../../assets';
import React, { memo } from 'react';
import { Animated, Image } from 'react-native';
import styled from '../../../utils/styled';
const ControlButton = ({
  isPlaying
}) => {
  const opacity = new Animated.Value(1);
  Animated.timing(opacity, {
    toValue: 0,
    duration: 750,
    delay: 0
  }).start();
  const image = isPlaying ? images.icPlay() : images.icPause();
  return /*#__PURE__*/React.createElement(AnimatedView, {
    style: {
      opacity
    }
  }, /*#__PURE__*/React.createElement(Image, {
    source: image
  }));
};
const AnimatedView = styled(Animated.View)`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  background-color: ${({
  theme
}) => theme.colors.dark};
  opacity: ${({
  opacity
}) => opacity || 1};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-27.5px, -27.5px);
`;
export default /*#__PURE__*/memo(ControlButton);
//# sourceMappingURL=index.js.map