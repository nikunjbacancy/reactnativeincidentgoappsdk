import { FC } from 'react';
import { TextInputProps } from 'react-native';
interface Props extends TextInputProps {
    name: string;
}
declare const TextInputField: FC<Props>;
export default TextInputField;
