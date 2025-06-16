import { FC } from 'react';
import { ViewStyle } from 'react-native';
interface Props {
    style?: ViewStyle;
    back?(): void;
}
declare const BackButton: FC<Props>;
export default BackButton;
