import React from 'react';
import styled from '../../utils/styled';
const ControlButton = ({
  style,
  image,
  imageStyle,
  isDisabled,
  onPress
}) => /*#__PURE__*/React.createElement(Container, {
  style: style,
  disabled: isDisabled,
  onPress: onPress
}, /*#__PURE__*/React.createElement(ControlImage, {
  style: imageStyle,
  source: image,
  isDisabled: isDisabled
}));
const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;
const ControlImage = styled.Image`
  opacity: ${({
  isDisabled
}) => isDisabled ? 0.5 : 1};
`;
export default ControlButton;
//# sourceMappingURL=index.js.map