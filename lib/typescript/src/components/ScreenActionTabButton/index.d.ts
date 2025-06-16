import { FC } from 'react';
import { TextStyle, ViewStyle } from 'react-native';
import { GradientButtonProps } from '../GradientButton';
export interface ScreenActionTabButtonProps extends GradientButtonProps {
    onCancel?(): void;
    style?: ViewStyle;
    cancelButtonStyle?: ViewStyle;
    continueButtonStyle?: ViewStyle;
    continueButtonTextStyle?: TextStyle;
}
declare const ScreenActionTabButton: FC<ScreenActionTabButtonProps>;
export default ScreenActionTabButton;
