import React, { FC } from 'react';
import {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styled from '../../utils/styled';

interface Props {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  image: ImageSourcePropType;
  onPress(): void;
  isDisabled?: boolean;
}

const ControlButton: FC<Props> = ({
  style,
  image,
  imageStyle,
  isDisabled,
  onPress,
}) => (
  <Container style={style} disabled={isDisabled} onPress={onPress}>
    <ControlImage style={imageStyle} source={image} isDisabled={isDisabled} />
  </Container>
);

const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  border-radius: 14px;
  justify-content: center;
  align-items: center;
`;

const ControlImage = styled.Image<{ isDisabled?: boolean }>`
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};
`;

export default ControlButton;
