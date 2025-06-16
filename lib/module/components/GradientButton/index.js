import React from 'react';
import { Image } from 'react-native';
import { CircleSnail } from 'react-native-progress';
import styled from '../../utils/styled';

// import IconButton from '../IconButton';
import IconButton from '../IconButton';
const GradientButton = ({
  style,
  textStyle,
  disabled,
  onPress,
  image,
  text,
  rightTextIcon,
  loading
}) => /*#__PURE__*/React.createElement(Container, {
  style: style,
  onPress: onPress,
  disabled: disabled
}, loading && /*#__PURE__*/React.createElement(Loading, null), !loading && image && /*#__PURE__*/React.createElement(Image, {
  source: image
}), !loading && text && /*#__PURE__*/React.createElement(GradientText, {
  style: textStyle
}, text), !loading && rightTextIcon && onPress && /*#__PURE__*/React.createElement(RightTextIcon, {
  source: rightTextIcon,
  onPress: onPress
}));
const Container = styled.TouchableOpacity`
  height: 50px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({
  theme: {
    colors
  },
  disabled
}) => disabled ? colors.lightGrey : colors.highlight};
  width: 100%;
`;
const Loading = styled(CircleSnail).attrs(({
  theme
}) => ({
  color: theme.colors.grey,
  marginLeft: 'auto',
  marginRight: 'auto'
}))``;
const GradientText = styled.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const RightTextIcon = styled(IconButton).attrs(({
  theme
}) => ({
  tintColor: theme.colors.white
}))`
  max-width: 24px;
  max-height: 24px;
`;
export default GradientButton;
//# sourceMappingURL=index.js.map