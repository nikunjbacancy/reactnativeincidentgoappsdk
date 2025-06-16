import { images } from '../../assets';
import React, { FC } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import styled from '../../utils/styled';

import GradientButton, { GradientButtonProps } from '../GradientButton';
import IconButton from '../IconButton';

export interface ScreenActionTabButtonProps extends GradientButtonProps {
  onCancel?(): void;
  style?: ViewStyle;
  cancelButtonStyle?: ViewStyle;
  continueButtonStyle?: ViewStyle;
  continueButtonTextStyle?: TextStyle;
}

const ScreenActionTabButton: FC<ScreenActionTabButtonProps> = ({
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
  iconImage,
}) => (
  <ScreenActionContainer style={style}>
    {onCancel && (
      <CancelButton
        style={cancelButtonStyle}
        source={iconImage || images.icClose()}
        tintColor={tintColor}
        onPress={onCancel}
        fill={!text}
      />
    )}
    {text && (
      <ContinueButton
        style={continueButtonStyle}
        textStyle={continueButtonTextStyle}
        disabled={disabled}
        loading={loading}
        onPress={onPress}
        text={text}
        rightTextIcon={rightTextIcon}
        fill={!onCancel}
      />
    )}
  </ScreenActionContainer>
);

const ScreenActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.nearWhite};
`;

const CancelButton = styled(IconButton as any)<{ fill: boolean }>`
  flex: ${({ fill }) => (fill ? 1 : 0.25)};
  background-color: ${({ theme }) => theme.colors.nearWhite};
  height: 100%;
`;

const ContinueButton = styled(GradientButton).attrs(({ theme, ...rest }) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18,
  },
  ...rest,
}))<{ fill: boolean }>`
  background-color: ${({ theme }) => theme.sdkBackgroundColor};
  flex: ${({ fill }) => (fill ? 1 : 0.75)};
  height: 100%;
  border-radius: 0;
`;

export default ScreenActionTabButton;
