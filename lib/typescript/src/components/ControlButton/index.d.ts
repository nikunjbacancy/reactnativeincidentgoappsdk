import { FC } from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';
interface Props {
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    image: ImageSourcePropType;
    onPress(): void;
    isDisabled?: boolean;
}
declare const ControlButton: FC<Props>;
export default ControlButton;
