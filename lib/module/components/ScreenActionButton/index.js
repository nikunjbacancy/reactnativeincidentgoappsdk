import { images } from '../../assets';
import React from 'react';
import styled from '../../utils/styled';
import GradientButton from '../GradientButton';
import IconButton from '../IconButton';
const ScreenActionButton = ({
  onCancel,
  onPress,
  text,
  rightTextIcon,
  loading,
  disabled,
  tintColor
}) => /*#__PURE__*/React.createElement(ScreenActionContainer, null, onCancel && /*#__PURE__*/React.createElement(BackButton, {
  source: images.icBack(),
  tintColor: tintColor,
  onPress: onCancel,
  fill: !text
}), text && /*#__PURE__*/React.createElement(ContinueButton, {
  disabled: disabled,
  loading: loading,
  onPress: onPress,
  text: text,
  rightTextIcon: rightTextIcon,
  fill: !onCancel
}));
const ScreenActionContainer = styled.View`
  flex-direction: row;
  height: 50px;
`;
const BackButton = styled(IconButton)`
  flex: ${({
  fill
}) => fill ? 1 : 0.2};
  background-color: ${({
  theme
}) => theme.colors.lightGrey};
  border-radius: 6px;
  height: 100%;
`;
const ContinueButton = styled(GradientButton).attrs({
  buttonStyle: {
    height: '100%'
  }
})`
  flex: ${({
  fill
}) => fill ? 1 : 0.8};
  ${({
  fill
}) => fill ? '' : 'margin-left: 15px'};
  border-radius: 6px;
`;
export default ScreenActionButton;
//# sourceMappingURL=index.js.map