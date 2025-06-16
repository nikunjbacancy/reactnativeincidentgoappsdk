import React, { FC } from 'react';
import {
  GestureResponderEvent,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import styled from '../../utils/styled';

export interface Props {
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  source: ImageSourcePropType;
  tintColor?: string;
  onPress: (event: GestureResponderEvent) => void;
}

const IconButton: FC<Props> = ({
  style,
  imageStyle,
  source,
  tintColor,
  onPress,
}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <IconImage source={source} tintColor={tintColor} style={imageStyle} />
  </TouchableOpacity>
);

const IconImage = styled.Image<{ tintColor?: string }>`
  tint-color: ${({ tintColor, theme }) => tintColor || theme.colors.grey};
`;

export default styled(IconButton as any)`
  flex: 1;
  width: 60px;
  justify-content: center;
  align-items: center;
`;
