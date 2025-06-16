import { FC } from 'react';
import { GestureResponderEvent, ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
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
declare const GradientButton: FC<GradientButtonProps>;
export default GradientButton;
