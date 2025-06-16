import { images } from '../../assets';
import React from 'react';
import styled from '../../utils/styled';
import GradientButton from '../GradientButton';
import IconButton from '../IconButton';
const ScreenActionTabButton = ({
  style,
  cancelButtonStyle,
  continueButtonStyle,
  continueButtonTextStyle,
  onCancel,
  onPress,
  text,
  rightTextIcon,
  loading,
  disabled,
  tintColor,
  iconImage
}) => /*#__PURE__*/React.createElement(ScreenActionContainer, {
  style: style
}, onCancel && /*#__PURE__*/React.createElement(CancelButton, {
  style: cancelButtonStyle,
  source: iconImage || images.icClose(),
  tintColor: tintColor,
  onPress: onCancel,
  fill: !text
}), text && /*#__PURE__*/React.createElement(ContinueButton, {
  style: continueButtonStyle,
  textStyle: continueButtonTextStyle,
  disabled: disabled,
  loading: loading,
  onPress: onPress,
  text: text,
  rightTextIcon: rightTextIcon,
  fill: !onCancel
}));
const ScreenActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-top-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelButton = styled(IconButton)`
  flex: ${({
  fill
}) => fill ? 1 : 0.25};
  background-color: ${({
  theme
}) => theme.colors.nearWhite};
  height: 100%;
`;
const ContinueButton = styled(GradientButton).attrs(({
  theme,
  ...rest
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  },
  ...rest
}))`
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
  flex: ${({
  fill
}) => fill ? 1 : 0.75};
  height: 100%;
  border-radius: 0;
`;
export default ScreenActionTabButton;
//# sourceMappingURL=index.js.map