import { FC } from 'react';
import { GradientButtonProps } from '../GradientButton';
interface Props extends GradientButtonProps {
    disabledWhenNot?: string;
    submitWhenFormIsValid?: boolean;
}
declare const SubmitButtonField: FC<Props>;
export default SubmitButtonField;
