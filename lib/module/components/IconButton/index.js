import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from '../../utils/styled';
const IconButton = ({
  style,
  imageStyle,
  source,
  tintColor,
  onPress
}) => /*#__PURE__*/React.createElement(TouchableOpacity, {
  style: style,
  onPress: onPress
}, /*#__PURE__*/React.createElement(IconImage, {
  source: source,
  tintColor: tintColor,
  style: imageStyle
}));
const IconImage = styled.Image`
  tint-color: ${({
  tintColor,
  theme
}) => tintColor || theme.colors.grey};
`;
export default styled(IconButton)`
  flex: 1;
  width: 60px;
  justify-content: center;
  align-items: center;
`;
//# sourceMappingURL=index.js.map