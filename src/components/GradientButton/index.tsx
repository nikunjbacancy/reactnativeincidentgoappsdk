import React, { FC } from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { CircleSnail } from 'react-native-progress';
import styled from '../../utils/styled';

// import IconButton from '../IconButton';
import IconButton from '../IconButton';


export interface GradientButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabledTextStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  text?: string;
  rightTextIcon?: ImageSourcePropType;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  loading?: boolean;
  tintColor?: string;
  iconImage?: ImageSourcePropType;
}

const GradientButton: FC<GradientButtonProps> = ({
  style,
  textStyle,
  disabled,
  onPress,
  image,
  text,
  rightTextIcon,
  loading,
}) => (
  <Container style={style} onPress={onPress} disabled={disabled}>
    {loading && <Loading />}
    {!loading && image && <Image source={image} />}
    {!loading && text && <GradientText style={textStyle}>{text}</GradientText>}
    {!loading && rightTextIcon && onPress && (
      <RightTextIcon source={rightTextIcon} onPress={onPress} />
    )}
  </Container>
);

const Container : any = styled.TouchableOpacity<{ disabled: boolean | undefined }>`
  height: 50px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 6px;
  background-color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.lightGrey : colors.highlight};
  width: 100%;
`;

const Loading = styled(CircleSnail).attrs(({ theme }) => ({
  color: theme.colors.grey,
  marginLeft: 'auto',
  marginRight: 'auto',
}))``;

const GradientText = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const RightTextIcon = styled(IconButton as any).attrs(({ theme }) => ({
  tintColor: theme.colors.white,
}))`
  max-width: 24px;
  max-height: 24px;
`;

export default GradientButton;
