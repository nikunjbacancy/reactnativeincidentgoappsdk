import { images } from '../../assets';
import React, { FC } from 'react';
import styled from '../../utils/styled';

import GradientButton, { GradientButtonProps } from '../GradientButton';
import IconButton from '../IconButton';

export interface ScreenActionButtonProps extends GradientButtonProps {
  onCancel?(): void;
}

const ScreenActionButton: FC<ScreenActionButtonProps> = ({
  onCancel,
  onPress,
  text,
  rightTextIcon,
  loading,
  disabled,
  tintColor,
}) => (
  <ScreenActionContainer>
    {onCancel && (
      <BackButton
        source={images.icBack()}
        tintColor={tintColor}
        onPress={onCancel}
        fill={!text}
      />
    )}
    {text && (
      <ContinueButton
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
  height: 50px;
`;

const BackButton = styled(IconButton as any)<{ fill: boolean }>`
  flex: ${({ fill }) => (fill ? 1 : 0.2)};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 6px;
  height: 100%;
`;

const ContinueButton = styled(GradientButton).attrs({
  buttonStyle: {
    height: '100%',
  },
})<{ fill: boolean }>`
  flex: ${({ fill }) => (fill ? 1 : 0.8)};
  ${({ fill }) => (fill ? '' : 'margin-left: 15px')};
  border-radius: 6px;
`;

export default ScreenActionButton;
