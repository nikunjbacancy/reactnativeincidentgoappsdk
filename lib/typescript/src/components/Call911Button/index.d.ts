import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
interface Props {
    text: string;
    onFill(): void;
    onPress(): void;
    isPanicMode: boolean;
    textStyle?: StyleProp<TextStyle>;
    style?: StyleProp<ViewStyle>;
    withIcon?: boolean;
}
declare const _default: React.NamedExoticComponent<Props>;
export default _default;
